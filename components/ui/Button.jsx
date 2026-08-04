import Link from "next/link";

const VARIANTS = {
  primary: "btn-primary",
  accent: "btn-accent",
  ghost: "btn-ghost",
};

const SIZES = {
  md: "btn-md",
  lg: "btn-lg",
};

export default function Button({
  href,
  external = false,
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}) {
  const classes = `btn ${VARIANTS[variant] ?? VARIANTS.primary} ${
    SIZES[size] ?? SIZES.md
  } ${className}`;

  if (href && external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        {...props}
      >
        {children}
      </a>
    );
  }

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
}
