export default function checkIfRestaurantOpen(openingHours) {
  const timeNow = new Date(); //Takes system time for now
  const dayIndex = timeNow.getDay() - 1;
  if (openingHours[dayIndex].split(":")[0].trimLeft() === "Closed") {
    return false;
  }

  const splitTime = openingHours[dayIndex].split(/[\s:-]+/);
  const openingTime = getMilitaryTime(splitTime[1], splitTime[2], splitTime[3]);
  const closingTime = getMilitaryTime(splitTime[5], splitTime[6], splitTime[7]);
  const timeNowInString =
    (timeNow.getHours() < 10 ? "0" : "" + timeNow.getHours().toString()) +
    (timeNow.getMinutes() < 10 ? "0" : "" + timeNow.getMinutes().toString());
  if (timeNowInString > openingTime && timeNowInString < closingTime) {
    return true;
  }
}

const getMilitaryTime = (hour, minute, meridiem) => {
  if (meridiem === "PM") {
    const militaryTimeString = (parseInt(hour) + 12).toString() + minute;
    return militaryTimeString === "2400" ? "0000" : militaryTimeString;
  }
  return hour + minute;
};
