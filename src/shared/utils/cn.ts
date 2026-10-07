// Utility to merge Tailwind class names
// Usage: cn('base-class', condition && 'conditional-class')
export function cn(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(' ')
}
