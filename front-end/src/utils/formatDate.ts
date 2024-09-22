const month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export function formatDate(unix: EpochTimeStamp) {
  const dt = new Date();
  dt.setTime(unix * 1000);

  return `${dt.getDate()} ${month[dt.getMonth()]}, ${dt.getFullYear()}`;
}

export function formatTimeFromUnix(unix: EpochTimeStamp) {
  const now = new Date();
  now.setTime(unix * 1000);
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  return `${hours}:${minutes}`;
}
