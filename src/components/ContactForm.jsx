import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  assertEmailJsConfig,
  EMAILJS_PUBLIC_KEY,
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
} from "../config/emailjs";

const inputClass =
  "w-full rounded-lg border-0 bg-neutral-800 px-4 py-3 text-sm text-foreground placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-spice-400/50";

const INITIAL_FORM = { name: "", email: "", message: "" };

function formatSubmissionTime(date = new Date()) {
  const h = date.getHours() % 12 || 12;
  const m = String(date.getMinutes()).padStart(2, "0");
  const month = date.toLocaleString("en-US", { month: "long" });
  const day = date.getDate();
  return `${h}:${m} on ${month} ${day}`;
}

const ContactForm = () => {
  const [form, setForm] = useState(INITIAL_FORM);
  const [status, setStatus] = useState("idle");
  const [errorDetail, setErrorDetail] = useState(null);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (status !== "idle" && status !== "sending") {
      setStatus("idle");
      setErrorDetail(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setErrorDetail(null);

    try {
      assertEmailJsConfig();

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: form.name.trim(),
          email: form.email.trim(),
          message: form.message.trim(),
          time: formatSubmissionTime(),
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );

      setForm(INITIAL_FORM);
      setStatus("success");
    } catch (err) {
      console.error("[EmailJS]", err);
      const apiText = err?.text ?? "";
      if (apiText.includes("service ID not found")) {
        setErrorDetail(
          "EmailJS service ID is wrong. In the dashboard, open Email Services and copy the Service ID (starts with service_), then set VITE_EMAILJS_SERVICE_ID in .env and restart the dev server."
        );
      } else if (apiText.includes("template ID not found")) {
        setErrorDetail(
          "EmailJS template ID is wrong. Copy the Template ID from the dashboard into VITE_EMAILJS_TEMPLATE_ID in .env and restart the dev server."
        );
      } else {
        setErrorDetail(null);
      }
      setStatus("error");
    }
  };

  const isSending = status === "sending";

  return (
    <form onSubmit={handleSubmit} className="mx-auto w-full max-w-3xl space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          value={form.name}
          onChange={handleChange}
          className={inputClass}
          required
          disabled={isSending}
        />
        <input
          type="email"
          name="email"
          placeholder="Email address"
          value={form.email}
          onChange={handleChange}
          className={inputClass}
          required
          disabled={isSending}
        />
      </div>
      <textarea
        name="message"
        placeholder="Message"
        rows={6}
        value={form.message}
        onChange={handleChange}
        className={`${inputClass} resize-none min-h-[140px]`}
        required
        disabled={isSending}
      />

      {status === "success" && (
        <p
          role="status"
          aria-live="polite"
          className="rounded-lg border border-border bg-surface px-4 py-3 text-center text-sm text-foreground"
        >
          Thanks! Your message was sent successfully.
        </p>
      )}
      {status === "error" && (
        <div
          role="alert"
          aria-live="assertive"
          className="space-y-2 rounded-lg border border-border bg-surface px-4 py-3 text-center text-sm text-foreground"
        >
          <p>Something went wrong. Please try again or email us directly.</p>
          {errorDetail && (
            <p className="text-left text-xs text-muted">{errorDetail}</p>
          )}
        </div>
      )}

      <div className="flex justify-center pt-2">
        <button
          type="submit"
          disabled={isSending}
          className="rounded-lg bg-accent-highlight px-10 py-3 text-sm font-bold text-neutral-950 transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSending ? "Sending…" : "Send Message"}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
