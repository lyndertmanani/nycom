// utils.ts
export const truncateWords = (text: string | undefined, wordLimit: number): string => {
  if (!text) return "";
  const words = text.split(" ");
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(" ") + "...";
  }
  return text;
};
