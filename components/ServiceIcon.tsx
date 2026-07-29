import {
  Paintbrush,
  Layers,
  Bath,
  ChefHat,
  Wrench,
  Hammer,
  type LucideIcon,
} from "lucide-react";

const icons: Record<string, LucideIcon> = {
  paintbrush: Paintbrush,
  layers: Layers,
  bath: Bath,
  "chef-hat": ChefHat,
  wrench: Wrench,
  hammer: Hammer,
};

export function ServiceIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Icon = icons[name] ?? Hammer;
  return <Icon className={className} aria-hidden="true" />;
}
