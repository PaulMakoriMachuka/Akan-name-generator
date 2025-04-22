function getAkanName(date, gender) {
  const day = date.getDay();

  const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

  if (gender === "male") {
    return maleNames[day];
  } else if (gender === "female") {
    return femaleNames[day];
  } else {
    return null; // In case gender is not properly set
  }
}
