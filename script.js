function calculateAge() {
  let dob = new Date(document.getElementById("dob").value);
  let today = new Date();

  // Calculate age in years
  let ageInYears = today.getFullYear() - dob.getFullYear();

  // Calculate age in months
  let monthDiff = today.getMonth() - dob.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
    ageInYears--;
    monthDiff += 12;
  }
  let ageInMonths = monthDiff;

  // Calculate age in days
  let dayDiff = today.getDate() - dob.getDate();
  if (dayDiff < 0) {
    let monthDays = new Date(
      today.getFullYear(),
      today.getMonth(),
      0
    ).getDate();
    dayDiff += monthDays;
    ageInMonths--;
  }
  let ageInDays = dayDiff;

  // Display age
  document.getElementById(
    "result"
  ).innerHTML = `You are ${ageInYears} years, ${ageInMonths} months, and ${ageInDays} days old.`;
}
