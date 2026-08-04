import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";

const CONTENT_DIR = path.join(process.cwd(), "content", "templates");

function readTemplateFile(slug) {
  const fullPath = path.join(CONTENT_DIR, `${slug}.mdx`);
  const raw = fs.readFileSync(fullPath, "utf8");
  return matter(raw);
}

function toTemplate(slug, data) {
  const price = Number(data.price);
  const compareAtPrice = data.compareAtPrice ? Number(data.compareAtPrice) : null;

  return {
    slug,
    title: data.title ?? slug,
    tagline: data.tagline ?? "",
    description: data.description ?? "",
    category: data.category ?? "Templates",
    badge: data.badge ?? null,
    accent: data.accent ?? "bg-pastel-lilac",
    price,
    compareAtPrice,
    discount:
      compareAtPrice && compareAtPrice > price
        ? Math.round(((compareAtPrice - price) / compareAtPrice) * 100)
        : null,
    checkoutUrl: data.checkoutUrl ?? "",
    previewUrl: data.previewUrl ?? "",
    images: data.images ?? [],
    highlights: data.highlights ?? [],
    modules: data.modules ?? [],
    perfectFor: data.perfectFor ?? [],
    pages: data.pages ?? null,
    featured: Boolean(data.featured),
    order: typeof data.order === "number" ? data.order : 99,
  };
}

export function getTemplateSlugs() {
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getAllTemplates() {
  return getTemplateSlugs()
    .map((slug) => toTemplate(slug, readTemplateFile(slug).data))
    .sort((a, b) => a.order - b.order);
}

export function getCategories() {
  const templates = getAllTemplates();
  const counts = new Map();

  templates.forEach((template) => {
    counts.set(template.category, (counts.get(template.category) ?? 0) + 1);
  });

  return Array.from(counts, ([name, count]) => ({ name, count })).sort((a, b) =>
    a.name.localeCompare(b.name)
  );
}

export async function getTemplate(slug) {
  const { data, content } = readTemplateFile(slug);
  const mdxSource = await serialize(content);

  return {
    template: toTemplate(slug, data),
    mdxSource,
  };
}

export function getRelatedTemplates(slug, limit = 3) {
  const all = getAllTemplates();
  const current = all.find((template) => template.slug === slug);
  if (!current) return all.slice(0, limit);

  const sameCategory = all.filter(
    (template) => template.slug !== slug && template.category === current.category
  );
  const rest = all.filter(
    (template) => template.slug !== slug && template.category !== current.category
  );

  return [...sameCategory, ...rest].slice(0, limit);
}
