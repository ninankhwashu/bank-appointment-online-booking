document.addEventListener("DOMContentLoaded", function () {
  let dateInput = document.getElementById("date");

  let today = new Date();
  let yyyy = today.getFullYear();
  let mm = today.getMonth() + 1;
  let dd = today.getDate();

  let formattedDate = `${yyyy}-${mm < 10 ? "0" + mm : mm}-${
    dd < 10 ? "0" + dd : dd
  }`;
  dateInput.min = formattedDate;

  dateInput.addEventListener("change", function () {
    let selectedDate = new Date(this.value);
    let day = selectedDate.getDay();

    if (day === 0 || day === 6) {
      alert("Weekends are unavailable for booking. Please select a weekday.");
      this.value = "";
    }
  });
});

document
  .getElementById("getStartedButton")
  .addEventListener("click", function () {
    document.getElementById("introScreen").classList.add("hidden");
    document.getElementById("mainContent").classList.remove("hidden");
  });

let employees = [
  "Ms Nina Nkhwashu",
  "Mr Darryl Stein",
  "Ms Ntokozo Khumalo",
  "Mr Sbusiso Ndala",
  "Ms Kathlyn Mierta",
  "Ms Nazneen Shado",
  "Ms Lynn Mathews",
  "Mr Lenny Lee",
  "Ms Nkhensani Hlungwana",
];

document
  .getElementById("appointmentForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let fullName = document.getElementById("fullName").value;
    let idNumber = document.getElementById("idNumber").value;
    let branch = document.getElementById("branch").value;
    let service = document.getElementById("service").value;
    let date = document.getElementById("date").value;
    let time = document.getElementById("time").value;

    if (idNumber.length !== 13 || isNaN(idNumber)) {
      alert("The ID number must be exactly 13 digits long.");
      return;
    }

    if (fullName && idNumber && branch && service && date && time) {
      let randomEmployee =
        employees[Math.floor(Math.random() * employees.length)];
      let details = `
      <p><strong>Client:</strong> ${fullName}</p>
   
            <p><strong>Service:</strong> ${service}</p>
      <p><strong>Date:</strong> ${date}</p>
      <p><strong>Time:</strong> ${time}</p>
      <p><em>You will be assisted by <strong>${randomEmployee}</strong>  for your <strong>${service}</strong>. We look forward to helping you to the best of our ability. See you then</em> 😊!</p>
    `;

      document.getElementById("appointmentDetails").innerHTML = details;

      appointmentDetails.classList.add("left-align");
      alert("Appointment booked successfully 😊!");
      document.getElementById("appointmentForm").reset();
    } else {
      alert("Please fill out all fields.");
    }
  });
