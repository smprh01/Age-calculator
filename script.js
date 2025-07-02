const form = document.getElementById("ageForm");
const resultDiv = document.getElementById("result");
let interval;

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const dob = document.getElementById("dob").value;
  if (!dob) {
    alert("Please enter your date of birth!");
    return;
  }

  const birthDate = new Date(dob);

  if (interval) clearInterval(interval);

  interval = setInterval(() => {
    const now = new Date();

    let years = now.getFullYear() - birthDate.getFullYear();
    let months = now.getMonth() - birthDate.getMonth();
    let days = now.getDate() - birthDate.getDate();
    let hours = now.getHours() - birthDate.getHours();
    let minutes = now.getMinutes() - birthDate.getMinutes();
    let seconds = now.getSeconds() - birthDate.getSeconds();

    if (seconds < 0) {
      seconds += 60;
      minutes--;
    }
    if (minutes < 0) {
      minutes += 60;
      hours--;
    }
    if (hours < 0) {
      hours += 24;
      days--;
    }
    if (days < 0) {
      months--;
      const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
      days += prevMonth.getDate();
    }
    if (months < 0) {
      months += 12;
      years--;
    }

    resultDiv.innerHTML = `You are <strong>${years}</strong> years, <strong>${months}</strong> months, <strong>${days}</strong> days, 
    <strong>${hours}</strong> hours, <strong>${minutes}</strong> minutes, and <strong>${seconds}</strong> seconds old.`;
  }, 1000);
});