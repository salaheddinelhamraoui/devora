import Link from "next/link";

import Logo from "./Logo";
import { company, footerNav, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-ink/8 bg-cream-200/60">
      <div className="container-page py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-5 text-sm leading-relaxed text-ink-muted">
              Notion templates designed to be used, not just admired. Buy once, duplicate in
              seconds, keep it forever.
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-5 inline-block text-sm font-semibold text-ink underline underline-offset-4 hover:text-brand-600"
            >
              {site.email}
            </a>
          </div>

          {footerNav.map((column) => (
            <div key={column.title}>
              <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-ink-soft">
                {column.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-ink-muted transition-colors hover:text-ink"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 grid gap-8 border-t border-ink/10 pt-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-ink-soft">
              Company details
            </h3>
            <address className="mt-3 text-xs not-italic leading-relaxed text-ink-muted">
              <span className="font-semibold text-ink">{company.legalName}</span>
              <br />
              trading as {company.tradingName}
              <br />
              {company.addressLines.map((line) => (
                <span key={line}>
                  {line}
                  <br />
                </span>
              ))}
              <a
                href={`mailto:${company.email}`}
                className="underline underline-offset-2 hover:text-ink"
              >
                {company.email}
              </a>
            </address>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-ink-soft">
              What we sell
            </h3>
            <p className="mt-3 text-xs leading-relaxed text-ink-muted">
              Digital Notion templates, delivered by email immediately after payment. Nothing is
              shipped. Prices are shown in euro (EUR) and any applicable tax is calculated at
              checkout.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-ink-soft">
              Support
            </h3>
            <p className="mt-3 text-xs leading-relaxed text-ink-muted">
              Questions about an order, a template or a refund? Write to{" "}
              <a
                href={`mailto:${company.email}`}
                className="underline underline-offset-2 hover:text-ink"
              >
                {company.email}
              </a>{" "}
              and we reply within one working day.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-ink/10 pt-7 text-xs text-ink-soft sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {company.legalName}. All rights reserved.
          </p>
          <p>
            Notion is a trademark of Notion Labs, Inc. {site.name} is an independent studio and is
            not affiliated with Notion Labs, Inc.
          </p>
        </div>
      </div>
    </footer>
  );
}
