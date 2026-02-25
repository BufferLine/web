interface ComparisonBoxProps {
  title: string;
  items: string[];
  variant: "before" | "after";
}

export default function ComparisonBox({
  title,
  items,
  variant,
}: ComparisonBoxProps) {
  const isBefore = variant === "before";

  return (
    <div
      className={`p-5 rounded-xl ${
        isBefore
          ? "bg-slate-900/70 border border-slate-700"
          : "bg-green-950/30 border border-green-700"
      }`}
    >
      <h3
        className={`text-lg font-bold mb-4 ${
          isBefore ? "text-red-400" : "text-green-400"
        }`}
      >
        {title}
      </h3>
      <div className="space-y-3">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-3">
            <div
              className={`w-2 h-2 rounded-full ${
                isBefore ? "bg-red-500" : "bg-green-500"
              }`}
            />
            <span className="text-slate-300">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
