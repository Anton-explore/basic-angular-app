export const formatDuration = (duration: number) => {
  const hours = Math.floor(duration / 60);
  const minutes = duration % 60;
  return hours === 0
    ? `${minutes.toString().padStart(2, '0')} min`
    : `${hours.toString()}h ${minutes.toString().padStart(2, '0')} min`;
};

export const convertToLocalDate = (data: string): string => {
  const date = new Date(data);
  return date.toLocaleDateString();
};
