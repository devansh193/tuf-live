interface ContentCardProps {
  title: string;
  description: string;
  className: string;
  subClassname: string;
  headingClassName: string;
  children?: React.ReactNode;
}

export const ContentCard = ({
  title,
  description,
  className,
  subClassname,
  children,
  headingClassName,
}: ContentCardProps) => {
  return (
    <div className={`relative rounded-xl p-6 ${className}`}>
      <h3
        className={` text-xl font-semibold leading-tight" ${headingClassName}`}
      >
        {title}
      </h3>
      <p className={`mt-2 text-neutral-600 text-sm max-w-lg ${subClassname}`}>
        {description}
      </p>
      {children}
    </div>
  );
};
