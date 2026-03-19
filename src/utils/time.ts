// TODO: add short formats option

function reformatTime(element: number) {
  let currentEl = "";
  element.toString().length === 1
    ? (currentEl = `0${element}`)
    : (currentEl = element.toString());
  return currentEl;
}

const dateSpan = document.getElementById("date");
// Get Date
function getDate() {
  const date = new Date();
  const day = reformatTime(date.getDate());
  const month = reformatTime(date.getMonth() + 1);
  const year = reformatTime(date.getFullYear());
  const currentDate = `${day}-${month}-${year}`;
  dateSpan!.textContent = currentDate;
}

const timeSpan = document.getElementById("time");

function getTime() {
  const date = new Date();
  const hours = reformatTime(date.getHours());
  const minutes = reformatTime(date.getMinutes());
  const seconds = reformatTime(date.getSeconds());
  const currentTime = `${hours}:${minutes}:${seconds}`;
  timeSpan!.textContent = currentTime;
  setTimeout(() => {
    getTime();
    if (currentTime === "23:59:59") {
      getDate();
    }
  }, 1000);
}
getDate();
getTime();