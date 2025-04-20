 // Function to get and validate the birthdate
  function getBirthdate() {
    const input = document.getElementById("birthdate").value.trim();
    const date = new Date(input);
    return isNaN(date) ? null : date;
  }
  
  // Function to get selected gender
  function getGender() {
    const selected = document.querySelector('input[name="gender"]:checked');
    return selected ? selected.value : null;
  }
  
  // Function to determine Akan name based on birthdate and gender
  function getAkanName(date, gender) {
    const day = date.getDay(); // 0 = Sunday, ..., 6 = Saturday
  
    const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
  
    return gender === "male" ? maleNames[day] : femaleNames[day];
  }
  
  // Function to display the result
  function displayResult(name) {
    document.getElementById("result").textContent = `Your Akan name is: ${name}`;
  }
  
  // Optional: show error messages
  function showError(message) {
    alert(message);
  }