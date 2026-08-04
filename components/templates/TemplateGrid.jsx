import TemplateCard from "./TemplateCard";

export default function TemplateGrid({ templates, priorityCount = 0 }) {
  if (!templates.length) {
    return (
      <div className="card px-6 py-16 text-center">
        <p className="text-lg font-semibold text-ink">No templates match that search.</p>
        <p className="mt-2 text-sm text-ink-muted">
          Try a different keyword, or clear the filters to see everything.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-x-7 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
      {templates.map((template, index) => (
        <TemplateCard
          key={template.slug}
          template={template}
          priority={index < priorityCount}
        />
      ))}
    </div>
  );
}
