type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  text,
  align = "left"
}: SectionHeadingProps) {
  return (
    <div
      className={
        align === "center"
          ? "mx-auto max-w-3xl text-center"
          : "max-w-3xl text-left"
      }
    >
      {eyebrow ? (
        <p className="premium-label mb-5 text-xs font-bold text-amber/90">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-balance text-4xl font-black leading-[0.96] tracking-normal text-cream sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {text ? (
        <p className="mt-7 text-pretty text-base leading-8 text-cream-muted/90 sm:text-lg sm:leading-9">
          {text}
        </p>
      ) : null}
    </div>
  );
}
