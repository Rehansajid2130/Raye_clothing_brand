/**
 * Utility function for conditionally joining class names.
 * Compatible with standard shadcn/ui and Tailwind CSS setups.
 */
export function cn(...inputs: (string | boolean | null | undefined | Record<string, boolean>)[]) {
  const classes: string[] = [];
  for (const input of inputs) {
    if (!input) continue;
    if (typeof input === "string") {
      classes.push(input);
    } else if (typeof input === "object") {
      for (const [key, val] of Object.entries(input)) {
        if (val) classes.push(key);
      }
    }
  }
  return classes.join(" ");
}
