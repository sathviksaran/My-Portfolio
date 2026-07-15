type Props = {
  title: string;
  highlight: string;
  subtitle?: string;
};

export default function SectionTitle({
  title,
  highlight,
  subtitle,
}: Props) {
  return (
    <div className="text-center mb-16">

      <h2 className="text-4xl md:text-5xl font-bold">

        {title}{" "}

        <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 bg-clip-text text-transparent">
          {highlight}
        </span>

      </h2>

      <div className="w-24 h-1 bg-blue-500 rounded-full mx-auto mt-5"></div>

      {subtitle && (
        <p className="mt-6 text-slate-400 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}

    </div>
  );
}