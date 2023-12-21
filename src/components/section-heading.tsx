import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};
export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="text-3xl capitalize mb-8" style={{ fontWeight: 600 }}>
      {children}
    </h2>
  );
}
