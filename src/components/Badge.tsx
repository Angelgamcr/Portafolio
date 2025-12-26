export enum BadgeColors {
  Default = "bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200",
  Red = "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400",
  Green = "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400",
  Blue = "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400",
  Orange = "bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400",
  Purple = "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400",
  Cyan = "bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-400",
  Slate = "bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300",
}
interface BadgeProps {
  children: string;
  color?: BadgeColors;
  className?: string;
}

export function Badge({
  children,
  color = BadgeColors.Default,
  className = "",
}: BadgeProps) {
  return (
    <span
      key={children}
      className={`${color} px-3 py-1 text-sm font-medium ${className}`}
    >
      {children}
    </span>
  );
}
