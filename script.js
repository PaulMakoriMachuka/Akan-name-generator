document.getElementById("akanForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const dateInput = document.getElementById("birthdate").value;
  const gender = document.querySelector('input[name="gender"]:checked');

  if (!dateInput) {
    return alert("Please enter your birthdate.");
  }

  if (!gender) {
    return alert("Please select your gender.");
  }

  const date = new Date(dateInput);
  const dayOfWeek = date.getDay(); // 0 (Sunday) to 6 (Saturday)

  const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

  let akanName = "";

  if (gender.value === "male") {
    akanName = maleNames[dayOfWeek];
  } else if (gender.value === "female") {
    akanName = femaleNames[dayOfWeek];
  }

  document.getElementById("result").textContent = `Your Akan name is: ${akanName}`;
});
