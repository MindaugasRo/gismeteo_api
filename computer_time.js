function getComputerTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    return `${hours}:${minutes}:${seconds}`;
  }
  console.log("Kompiuterio laikas " + getComputerTime());

  function getComputerTimeOnHours() {
    const date = new Date();
    const hours = date.getHours();
    return `${hours}`;
  }
  console.log("Kompiuterio laikas valandų tikslumu " + getComputerTimeOnHours());

// laiko atnaujinimas kas sekunde
setInterval(() => {
    clockElement.textContent = getComputerTime();
  }, 1000);

  let clockElement = document.getElementById("clock");
clockElement.textContent = getComputerTime();


// const moment1 = moment('2024-06-13T15:42:00Z');
// const moment2 = moment('2024-06-13T16:00:00Z');

// const difference = moment2.diff(moment1, 'minutes');
// console.log(difference);