export function classNames(...classes: (string | boolean)[]) {
  return classes
    .filter(Boolean)
    .map((className) => className.toString())
    .join(' ');
}
