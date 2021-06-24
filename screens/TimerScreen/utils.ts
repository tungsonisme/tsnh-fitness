export const formatToTimeDisplay = (seconds: number | undefined): string => {
  if (seconds === undefined) {
    return '';
  }

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds - minutes * 60;

  return `${minutes < 10 ? `0${minutes}` : minutes} : ${
    remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds
  }`;
};

export const formatToNumberDisplay = (number: number | undefined): string => {
  return `${number}X`;
};
