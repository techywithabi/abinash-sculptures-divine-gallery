
import { cn } from "../lib/utils";
import { Link } from "react-router-dom";

interface ImageWithOverlayProps {
  src: string;
  alt: string;
  title?: string;
  description?: string;
  linkTo?: string;
  className?: string;
  imageClassName?: string;
  overlayClassName?: string;
}

export default function ImageWithOverlay({ 
  src, 
  alt, 
  title, 
  description, 
  linkTo,
  className, 
  imageClassName,
  overlayClassName
}: ImageWithOverlayProps) {
  const content = (
    <div className={cn(
      "group relative overflow-hidden rounded-md transition-transform duration-300 hover:shadow-xl hover:scale-[1.02]",
      className
    )}>
      <img 
        src={src} 
        alt={alt} 
        className={cn(
          "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110",
          imageClassName
        )} 
      />
      <div className={cn(
        "absolute inset-0 bg-foreground/50 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300",
        overlayClassName
      )}>
        {title && <h3 className="text-divine-cream text-xl font-medium mb-2">{title}</h3>}
        {description && <p className="text-divine-cream/90 text-sm">{description}</p>}
      </div>
    </div>
  );

  if (linkTo) {
    return <Link to={linkTo}>{content}</Link>;
  }

  return content;
}
