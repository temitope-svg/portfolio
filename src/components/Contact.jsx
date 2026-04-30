import { forwardRef } from "react";

const Contact = forwardRef((props, ref) => (
    <div id="contact" ref={ref} style={{ height: "100vh", scrollSnapAlign: "start" }}>
        <div className="flex items-center justify-center h-full">
            <h1 className="text-4xl font-bold text-gray-800">Welcome to Contact</h1>
        </div>
    </div>
));

export default Contact;