const dateSpan = document.getElementById("date");
// Get Date
function getDate() {
  const date = new Date();
  const day = date.getDate();
  const currentDay = day.toString().length === 1 ? `0${day}` : day;
  const month = date.getMonth() + 1;
  const currentMonth = month.toString().length === 1 ? `0${month}` : month;
  const year = date.getFullYear();
  const currentDate = `${currentDay}-${currentMonth}-${year}`;
  dateSpan!.textContent = currentDate;
}

const timeSpan = document.getElementById("time");

function getTime() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const currentMinutes =
    minutes.toString().length === 1 ? `0${minutes}` : minutes;
  const seconds = date.getSeconds();
  const currentSeconds =
    seconds.toString().length === 1 ? `0${seconds}` : seconds;
  const currentTime = `${hours}:${currentMinutes}:${currentSeconds}`;
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