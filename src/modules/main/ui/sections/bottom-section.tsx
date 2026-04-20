interface ContentCardProps {
  title: string;
  description: string;
  className: string;
  subClassname: string;
  headingClassName: string;
  children?: React.ReactNode;
}

const ContentCard = ({
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

export const BottomSection = () => {
  return (
    <div className="h-150 flex items-start justify-between mt-4 gap-x-4">
      <ContentCard
        subClassname="text-[#6C2473]"
        title="Segment your customers"
        headingClassName="text-[#510056]"
        description="Create focused groups and keep your outreach personalized for every audience."
        className="h-3/4 w-1/2 bg-[#F7E3FA]"
      >
        <div
          className="absolute h-[50px] w-[6px] top-1/2 -left-[3px] bg-white shadow-sm"
          style={{
            clipPath:
              "polygon(50% 0%, 100% 12%, 100% 88%, 50% 100%, 0% 88%, 0% 12%)",
          }}
        />
      </ContentCard>
      <div className="w-1/2 h-full space-y-6">
        <ContentCard
          headingClassName="text-[#5B2301]"
          subClassname="text-[#602410]"
          title="Automate onboarding"
          description="Guide new users with contextual tips and smooth activation touchpoints."
          className="h-2/4 w-full bg-[#FDEBD0] mt-12 text-[#855536]"
        />
        <ContentCard
          subClassname="text-[#1E6814]"
          headingClassName="text-[#065900]"
          title="Track product health"
          description="Monitor engagement trends and identify opportunities to improve retention."
          className="h-2/4 w-full bg-[#DCF6D6]"
        />{" "}
      </div>
    </div>
  );
};
