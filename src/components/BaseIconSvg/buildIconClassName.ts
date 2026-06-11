const buildIconClassName = (
  baseClassName: string,
  className?: string
): string => {
  return [baseClassName, className].filter(Boolean).join(" ");
};

export { buildIconClassName };
