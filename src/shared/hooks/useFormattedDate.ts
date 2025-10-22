export const useFormattedDate = (dateString?: string): string => {
  if (!dateString) return "Дата";

  const date = new Date(dateString);

  const formatter = new Intl.DateTimeFormat("ru-RU", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  const formatted = formatter.format(date);

  const [day, monthRaw, yearRaw] = formatted.replace(" г.", "").split(" ");
  const month = monthRaw.charAt(0).toUpperCase() + monthRaw.slice(1);

  return `${day} ${month}, ${yearRaw}`;
};
