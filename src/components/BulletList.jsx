export default function BulletList({ items, itemClassName = "text-muted" }) {
  if (!items?.length) return null;

  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className={`flex gap-3 ${itemClassName}`}>
          <span
            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-highlight"
            aria-hidden="true"
          />
          <span className="leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  );
}
