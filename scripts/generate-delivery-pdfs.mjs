/**
 * Builds the post-purchase delivery PDF for every template in content/templates.
 *
 *   npm run pdfs
 *
 * Each PDF is what the customer receives after paying: a thank-you page with a
 * button linking to that template's Notion duplication URL, and a setup guide.
 *
 * The link comes from `notionUrl` in the template's frontmatter. While it is
 * empty the button is rendered as a visible placeholder and carries no link, so
 * an unfinished PDF can never be shipped by accident.
 *
 * Output goes to deliverables/ — NOT to public/. These files contain the private
 * duplication link, so publishing them on the website would give the template
 * away to anyone who found the URL. Upload them to your payment provider as the
 * product's digital file instead.
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import matter from "gray-matter";
import PDFDocument from "pdfkit";

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const CONTENT = path.join(ROOT, "content", "templates");
const OUT = path.join(ROOT, "deliverables");

const COMPANY = {
  brand: "Devora Kit",
  legalName: "Devora Systems LLC",
  address: "1209 Mountain Rd Pl NE, Ste R, Albuquerque, NM 87110, United States",
  email: "contact@devorakit.com",
  site: "https://devorakit.com",
};

const INK = "#17130F";
const MUTED = "#6B615A";
const SOFT = "#938981";
const BRAND = "#5638D8";
const CREAM = "#FBF8F3";
const LINE = "#E9E0D2";

// Frontmatter accent class -> the pastel hex used on the site.
const ACCENTS = {
  "bg-pastel-rose": "#FBE0E7",
  "bg-pastel-butter": "#FDEFC3",
  "bg-pastel-mint": "#D8F0E3",
  "bg-pastel-sky": "#DCEAFB",
  "bg-pastel-lilac": "#E9E2FB",
  "bg-pastel-peach": "#FBE3D3",
};

const PAGE = { width: 595.28, height: 841.89 };
const M = 56; // page margin
const COL = PAGE.width - M * 2;

function wordmark(doc, x, y) {
  doc.roundedRect(x, y, 26, 26, 8).fill(INK);
  doc.font("Helvetica-Bold").fontSize(14).fillColor(CREAM).text("D", x + 8, y + 6);
  doc.font("Helvetica-Bold").fontSize(13).fillColor(INK).text("Devora", x + 34, y + 7, {
    continued: true,
  });
  doc.fillColor(BRAND).text("Kit");
}

function footer(doc) {
  // Drawing below the bottom margin would make pdfkit spill onto a new page.
  doc.page.margins.bottom = 0;
  const y = PAGE.height - 74;
  doc.moveTo(M, y).lineTo(PAGE.width - M, y).lineWidth(0.8).strokeColor(LINE).stroke();
  doc.font("Helvetica").fontSize(7.5).fillColor(SOFT);
  doc.text(`${COMPANY.legalName}, trading as ${COMPANY.brand}`, M, y + 12, { width: COL });
  doc.text(COMPANY.address, M, y + 24, { width: COL });
  doc.text(`${COMPANY.email}   ·   ${COMPANY.site}`, M, y + 36, { width: COL });
}

function button(doc, { label, url, y, accent }) {
  const w = COL;
  const h = 56;
  const enabled = Boolean(url);

  doc.roundedRect(M + 2, y + 4, w, h, 28).fill("#EBE4DA"); // shadow
  doc.roundedRect(M, y, w, h, 28).fill(enabled ? INK : accent);

  doc
    .font("Helvetica-Bold")
    .fontSize(15)
    .fillColor(enabled ? CREAM : INK)
    .text(label, M, y + 21, { width: w, align: "center" });

  if (enabled) doc.link(M, y, w, h, url);
  return y + h;
}

function steps(doc, items, startY) {
  let y = startY;
  items.forEach((item, index) => {
    doc.circle(M + 11, y + 9, 11).fill(INK);
    doc
      .font("Helvetica-Bold")
      .fontSize(9)
      .fillColor(CREAM)
      .text(String(index + 1), M + 4, y + 5.5, { width: 14, align: "center" });

    doc.font("Helvetica-Bold").fontSize(11).fillColor(INK).text(item.title, M + 34, y + 1, {
      width: COL - 34,
    });
    doc.font("Helvetica").fontSize(9.5).fillColor(MUTED).text(item.body, M + 34, y + 16, {
      width: COL - 34,
      lineGap: 2,
    });
    y = doc.y + 14;
  });
  return y;
}

function buildPdf(template, outFile) {
  const accent = ACCENTS[template.accent] ?? ACCENTS["bg-pastel-lilac"];
  const doc = new PDFDocument({
    size: [PAGE.width, PAGE.height],
    margins: { top: M, bottom: M, left: M, right: M },
    info: {
      Title: `${template.title} — your download`,
      Author: COMPANY.legalName,
      Subject: `Delivery document for ${template.title}`,
    },
  });
  doc.pipe(fs.createWriteStream(outFile));

  /* ---------------------------------------------------------------- page 1 */
  doc.rect(0, 0, PAGE.width, PAGE.height).fill(CREAM);
  doc.rect(0, 0, PAGE.width, 6).fill(accent);

  wordmark(doc, M, 56);

  doc.font("Helvetica").fontSize(11).fillColor(MUTED).text("Thank you for your purchase", M, 132, {
    width: COL,
  });

  doc.font("Times-Bold").fontSize(38).fillColor(INK).text(template.title, M, 154, {
    width: COL,
    lineGap: -4,
  });

  let y = doc.y + 10;
  doc.roundedRect(M, y, COL, 78, 18).fill(accent);
  doc.font("Helvetica").fontSize(10.5).fillColor(INK).text(
    template.tagline || template.description,
    M + 22,
    y + 20,
    { width: COL - 44, lineGap: 3 }
  );

  y += 78 + 34;
  doc
    .font("Helvetica-Bold")
    .fontSize(11)
    .fillColor(INK)
    .text("Your template is ready", M, y, { width: COL });
  y = doc.y + 6;
  doc
    .font("Helvetica")
    .fontSize(10)
    .fillColor(MUTED)
    .text(
      "Click the button below to open it in Notion, then press Duplicate in the top-right corner to copy the whole workspace into your own account.",
      M,
      y,
      { width: COL, lineGap: 3 }
    );

  y = button(doc, {
    y: doc.y + 20,
    accent,
    label: template.notionUrl ? "OPEN YOUR TEMPLATE" : "TEMPLATE LINK NOT SET",
    url: template.notionUrl,
  });

  if (!template.notionUrl) {
    doc
      .font("Helvetica-Oblique")
      .fontSize(8.5)
      .fillColor(SOFT)
      .text(
        'Placeholder: set "notionUrl" in content/templates/' +
          template.slug +
          ".mdx and run npm run pdfs again.",
        M,
        y + 12,
        { width: COL, align: "center" }
      );
  }

  y += 52;
  doc.moveTo(M, y).lineTo(PAGE.width - M, y).lineWidth(0.8).strokeColor(LINE).stroke();

  doc.font("Helvetica-Bold").fontSize(9.5).fillColor(INK).text("Your licence", M, y + 16, {
    width: COL,
  });
  doc
    .font("Helvetica")
    .fontSize(8.5)
    .fillColor(MUTED)
    .text(
      "This template is licensed to you for personal or internal business use. You may edit it freely and keep it forever. You may not resell it, redistribute it, publish it as your own product, or share this duplication link. Full terms at " +
        COMPANY.site +
        "/license",
      M,
      doc.y + 4,
      { width: COL, lineGap: 2 }
    );

  footer(doc);

  /* ---------------------------------------------------------------- page 2 */
  doc.addPage();
  doc.rect(0, 0, PAGE.width, PAGE.height).fill(CREAM);
  doc.rect(0, 0, PAGE.width, 6).fill(accent);

  wordmark(doc, M, 56);

  doc.font("Times-Bold").fontSize(28).fillColor(INK).text("Setting it up", M, 128, { width: COL });
  doc
    .font("Helvetica")
    .fontSize(10)
    .fillColor(MUTED)
    .text("Two minutes, no Notion experience needed.", M, doc.y + 4, { width: COL });

  let y2 = steps(doc, [
    {
      title: "Open the link",
      body: "Use the button on the first page. It opens the template as a public Notion page in your browser.",
    },
    {
      title: "Press Duplicate",
      body: "The Duplicate button sits in the top-right corner of the Notion page. If you are not signed in, Notion will ask you to log in or create a free account first.",
    },
    {
      title: "Choose a workspace",
      body: "Notion copies every page, database and view into the workspace you pick. The copy is yours: nothing stays linked to us.",
    },
    {
      title: "Make it yours",
      body: "Rename anything, delete the sections you do not need, change the colours. Nothing in the template is locked.",
    },
  ], doc.y + 24);

  y2 += 6;
  doc.roundedRect(M, y2, COL, 66, 16).fill("#F4EEE4");
  doc.font("Helvetica-Bold").fontSize(10).fillColor(INK).text("What you need", M + 20, y2 + 16, {
    width: COL - 40,
  });
  doc
    .font("Helvetica")
    .fontSize(9)
    .fillColor(MUTED)
    .text(
      "A free Notion account and any modern browser, or the Notion desktop, tablet or mobile app. No plugin, extension or extra purchase is required.",
      M + 20,
      y2 + 32,
      { width: COL - 40, lineGap: 2 }
    );

  y2 += 66 + 26;
  doc.font("Helvetica-Bold").fontSize(10).fillColor(INK).text("If something goes wrong", M, y2, {
    width: COL,
  });
  doc
    .font("Helvetica")
    .fontSize(9)
    .fillColor(MUTED)
    .text(
      `Email ${COMPANY.email} with the address you used at checkout and we will fix it, resend your link, or refund you. We reply within one working day.`,
      M,
      doc.y + 5,
      { width: COL, lineGap: 2 }
    );

  y2 = doc.y + 20;
  doc.font("Helvetica-Bold").fontSize(10).fillColor(INK).text("Free updates", M, y2, { width: COL });
  doc
    .font("Helvetica")
    .fontSize(9)
    .fillColor(MUTED)
    .text(
      "When we improve this template we email you the updated link at no extra cost. Your existing copy is never changed or removed.",
      M,
      doc.y + 5,
      { width: COL, lineGap: 2 }
    );

  y2 = doc.y + 26;
  const links = [
    ["Delivery policy", `${COMPANY.site}/delivery`],
    ["Refund policy", `${COMPANY.site}/refund`],
    ["Licence", `${COMPANY.site}/license`],
    ["Terms", `${COMPANY.site}/terms`],
  ];
  let lx = M;
  doc.font("Helvetica").fontSize(8.5);
  links.forEach(([label, url], index) => {
    const text = index === links.length - 1 ? label : `${label}   ·   `;
    const w = doc.widthOfString(text);
    doc.fillColor(BRAND).text(text, lx, y2, { lineBreak: false });
    doc.link(lx, y2 - 2, doc.widthOfString(label), 12, url);
    lx += w;
  });

  footer(doc);
  doc.end();
}

/* -------------------------------------------------------------------------- */

fs.mkdirSync(OUT, { recursive: true });

const files = fs.readdirSync(CONTENT).filter((f) => f.endsWith(".mdx"));
const missing = [];

for (const file of files) {
  const slug = file.replace(/\.mdx$/, "");
  const { data } = matter(fs.readFileSync(path.join(CONTENT, file), "utf8"));
  const outFile = path.join(OUT, `${slug}-delivery.pdf`);

  buildPdf({ ...data, slug, notionUrl: data.notionUrl || "" }, outFile);
  if (!data.notionUrl) missing.push(slug);

  console.log(`  ${path.relative(ROOT, outFile)}`);
}

console.log(`\n${files.length} delivery PDFs written to deliverables/`);

if (missing.length) {
  console.log(
    `\nWARNING: no notionUrl set for ${missing.length} template(s):\n` +
      missing.map((s) => `  - content/templates/${s}.mdx`).join("\n") +
      `\nTheir buttons are placeholders. Do not send these to customers yet.`
  );
}
