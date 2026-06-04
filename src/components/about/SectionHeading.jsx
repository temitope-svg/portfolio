const SectionHeading = ({ children, className = "" }) => (
  <h3
    className={`relative inline-block pb-2 text-lg font-semibold text-foreground after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-10 after:bg-accent-highlight after:content-[''] ${className}`}
  >
    {children}
  </h3>
);

export default SectionHeading;
