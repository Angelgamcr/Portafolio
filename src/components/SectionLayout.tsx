interface SectionProps extends React.ComponentPropsWithoutRef<"section"> {
  classNameDiv?: string;
  backgroundUrl?: string;
  backgroundScrollable?: boolean;
}

export default function SectionLayout({
  classNameDiv = "max-w-6xl",
  backgroundUrl,
  backgroundScrollable = true,
  children,
  className = "",
  ...props
}: SectionProps) {
  return (
    <>
      <section {...props} className={`${className} py-20 px-6 relative `}>
        {/* IMAGEN DE FONDO */}
        {backgroundUrl && (
          <>
            <div
              // src={backgroundUrl}
              className={`absolute bg-[url('/${backgroundUrl}')] ${
                backgroundScrollable ? "z-10" : "bg-fixed "
              } inset-0 bg-cover bg-center blur-sm `}
              style={{
                backgroundImage: `url('${backgroundUrl}')`,
              }}
            />
            <div className="absolute inset-0 bg-black/40 z-10" />
          </>
        )}

        {/* CONTENIDO */}
        <div
          className={`${classNameDiv} mx-auto relative z-20 `} // Difuma el contenido:  backdrop-blur-sm
        >
          {children}
        </div>
      </section>
    </>
  );
}
