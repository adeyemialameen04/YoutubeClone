export const formatTime = (seconds) => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
  return formattedTime;
};

export const formatViews = (views) => {
  if (views >= 1000000) {
    return (views / 1000000).toFixed(1) + "M";
  } else if (views >= 1000) {
    return (views / 1000).toFixed(1) + "K";
  }
  return views;
};

export const formatLikes = (likes) => {
  if (likes >= 1000000) {
    return (likes / 1000000).toFixed(1) + "M";
  } else if (likes >= 1000) {
    return (likes / 1000).toFixed(1) + "K";
  }
  return likes;
};

export const truncateText = (text, maxWords) => {
  if (text.length >= maxWords) {
    return `${text.slice(0, maxWords)} ...`;
  }
};
