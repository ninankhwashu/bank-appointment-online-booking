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

    if (fullName && idNumber && branch && service && date && time) {
      let randomEmployee =
        employees[Math.floor(Math.random() * employees.length)];
      let details = `
      <p>Client: ${fullName}</p>
      <p>Service: ${service}</p>
      <p>Date: ${date}</p>
      <p>Time: ${time}</p>
      <p>You will be assisted by ${randomEmployee} for your ${service}. We look forward to helping you to the best of our ability. See you the 😊!</p>
    `;
      document.getElementById("appointmentDetails").innerHTML = details;
      alert("Appointment booked successfully!");
    } else {
      alert("Please fill out all fields.");
    }
  });
