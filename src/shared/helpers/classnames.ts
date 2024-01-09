export const classnames = (
  classname: string | undefined = "",
  mods: Record<string, boolean | string | undefined>,
  additional: Array<string | undefined> = [],
) => {
  return [
    classname,
    ...additional,
    Object.entries(mods)
      .filter(([key, value]) => Boolean(value))
      .map(([key]) => key),
  ]
    .join(" ")
    .trim();
};
