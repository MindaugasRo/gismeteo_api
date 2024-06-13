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