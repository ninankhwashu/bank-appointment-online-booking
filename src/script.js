document
  .getElementById("appointmentForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let branch = document.getElementById("branch").value;
    let service = document.getElementById("service").value;
    let date = document.getElementById("date").value;
    let time = document.getElementById("time").value;

    if (branch && service && date && time) {
      alert(
        `Appointment booked at ${branch} for ${service} on ${date} at ${time}. See you then 😊!`
      );
      saveAppointment({ branch, service, date, time });
    } else {
      alert("Please fill out all fields.");
    }
  });

function saveAppointment(appointment) {
  let appointments = JSON.parse(localStorage.getItem("appointments")) || [];
  appointments.push(appointment);
  localStorage.setItem("appointments", JSON.stringify(appointments));
  console.log("Saved appointment:", appointment);
}

document.addEventListener("DOMContentLoaded", function () {
  animateHero();
});

function animateHero() {
  let hero = document.querySelector(".hero-content");
  hero.style.opacity = 0;
  hero.style.transform = "translateY(30px)";
  setTimeout(() => {
    hero.style.transition = "opacity 1s, transform 1s";
    hero.style.opacity = 1;
    hero.style.transform = "translateY(0)";
  }, 100);
}
