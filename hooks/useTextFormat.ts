export function removeFirstLeadingZero(numberStr: string) {
  const result = numberStr.replace(/^0/, "");
  return result === "" ? "0" : result;
}

export function getInitials(name: string) {
  const trimmedName = name.trim();
  if (trimmedName.length === 0) {
    return "N/A";
  }
  const nameParts = trimmedName.split(" ");
  const initials = nameParts.map((part) => part[0]?.toUpperCase()).join("");
  return initials;
}

const CravingsBackgroundColors = [
  "#037F7D",
  "#0042ED",
  "#D88E00",
  "#59037F",
  "#0A086F",
  "#057725",
  "#132027",
  "#824203",
];

export const generateColor = (id: string) => {
  // Convert the UUID to a number by generating a hash
  let hash = 0;
  for (let i = 0; i < id.length; i++) {
    hash = (hash << 5) - hash + id.charCodeAt(i);
    hash |= 0; // Convert to 32bit integer
  }

  // Use modulus to get an index within the colors array
  const colorIndex = Math.abs(hash) % CravingsBackgroundColors.length;
  return CravingsBackgroundColors[colorIndex];
};

export function capitalizeFirstLetter(str: string) {
  if (str?.length === 0) {
    return str;
  }
  return str?.charAt(0).toUpperCase() + str?.slice(1);
}
