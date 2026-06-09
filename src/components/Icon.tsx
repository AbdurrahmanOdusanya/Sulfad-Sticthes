import * as Lucide from 'lucide-react';

interface IconProps {
  name: string;
  className?: string;
  size?: number;
}

export default function Icon({ name, className, size }: IconProps) {
  // Safe lookup for Lucide icons
  const LucideIcon = (Lucide as any)[name];
  if (!LucideIcon) {
    // Default fallback to Scissors
    return <Lucide.Scissors className={className} size={size} />;
  }
  return <LucideIcon className={className} size={size} />;
}
