export function getRandomHexColor(data) {
  const arr = [...data];
  const counter = Number.parseInt(arr[3]);
  const value = `#${Math.floor(Math.random() * (16777215 - counter))
    .toString(16)
    .padStart(6, 0)}`;

  return value;
}
