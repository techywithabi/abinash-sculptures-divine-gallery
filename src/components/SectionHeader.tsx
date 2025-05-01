
import { cn } from "../lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeader({ 
  title, 
  subtitle, 
  centered = true, 
  className 
}: SectionHeaderProps) {
  return (
    <div className={cn(
      "space-y-3 mb-10",
      centered && "text-center",
      className
    )}>
      <h2 className="text-3xl md:text-4xl font-bold font-playfair">{title}</h2>
      {subtitle && <p className="text-muted-foreground">{subtitle}</p>}
      <div className={cn(
        "flex items-center w-24 h-1 bg-divine-copper mt-4",
        centered ? "mx-auto" : ""
      )} />
    </div>
  );
}
