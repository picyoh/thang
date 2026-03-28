// TODO: add Temporal Object instead of Date ?

function formatTime(
  type: string,
  format: string,
  first: string,
  second: string,
  third: string,
) {
  // TODO: adjust time and time to other formats ?
  let formated = "";
  if(type === "time"){
    // Time
    formated = format.replace("hh",first).replace("mm", second).replace("ss", third);
  }else if(type === "date"){
    // add year format
    const yearSplit = format.split("y");
    const yearLength = yearSplit.filter((element)=> element === "").length;
    const year = third.slice(yearLength, third.length);
    // Date
    formated = format.replace("dd", first).replace("mm", second).replace("yy", year);
  }
  return formated;
}

// Get Date
function getDate(format: string) {
  const date = new Date();
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = String(date.getFullYear()).padStart(2, "0");
  return formatTime("date",format, day, month, year);
}

// Update Date
function updateDate(dateSpan: HTMLElement, format: string) {
  const currentDate = getDate(format);
  dateSpan!.textContent = currentDate;
}

// Get Time
function getTime(format: string) {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  return formatTime("time",format, hours, minutes, seconds);
}

// Handle component
export function handleTimeComponent(type: string, format: string) {
  // Get HTML Elements
  const dateSpan = document.getElementById("date-container");
  const timeSpan = document.getElementById("time-container");
  // Update Date
  if (dateSpan?.textContent === "" && type === "date") {
    updateDate(dateSpan, format);
  }
  // Update Time
  if (type === "time") {
    const currentTime = getTime(format);
    timeSpan!.textContent = currentTime;
    if (currentTime === "00:00:00") {
      updateDate(dateSpan!, format);
    }
  }
}
