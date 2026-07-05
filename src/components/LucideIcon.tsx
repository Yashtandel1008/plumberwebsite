import React from "react";
import * as Icons from "lucide-react";

// Extend standard SVG attributes so dynamic Lucide icons support props like 'fill'
interface LucideIconProps extends Omit<React.ComponentPropsWithoutRef<"svg">, "name"> {
  name: string;
  size?: number;
}

export const LucideIcon: React.FC<LucideIconProps> = ({
  name,
  className = "",
  size = 24,
  ...props
}) => {
  // Access the icon dynamically from the Lucide exports
  const IconComponent = (Icons as any)[name];
  
  if (!IconComponent) {
    // Return a fallback question mark icon if name is mismatch/not found
    return <Icons.HelpCircle className={className} size={size} {...props} />;
  }

  return <IconComponent className={className} size={size} {...props} />;
};
