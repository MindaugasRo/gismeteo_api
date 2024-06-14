function showLithuaniaRealTime() {
  function updateClock() {
    const nowLithuania = luxon.DateTime.now().setZone('Europe/Vilnius').setLocale('lt-LT');
    const formattedTime = nowLithuania.toFormat('yyyy-MM-dd HH:mm:ss LLLL');
    clockElement.textContent = formattedTime;
  }
  const clockElement = document.getElementById('time-display');
  setInterval(updateClock, 1000);
  updateClock(); // iškviečiama funkciją
}

// Paleidžiama funkcija laiko rodymui
window.onload = showLithuaniaRealTime;


// function getComputerTime() {
//     const date = new Date();
//     const hours = date.getHours();
//     const minutes = date.getMinutes();
//     const seconds = date.getSeconds();
//     return `${hours}:${minutes}:${seconds}`;
//   }
//   console.log("Kompiuterio laikas " + getComputerTime());

//   function getComputerTimeOnHours() {
//     const date = new Date();
//     const hours = date.getHours();
//     return `${hours}`;
//   }
//   console.log("Kompiuterio laikas valandų tikslumu " + getComputerTimeOnHours());

// // laiko atnaujinimas kas sekunde
// setInterval(() => {
//     clockElement.textContent = getComputerTime();
//   }, 1000);

//   let clockElement = document.getElementById("clock");
// clockElement.textContent = getComputerTime();