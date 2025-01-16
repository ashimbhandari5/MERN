let age = 23;
if (age >= 0 && age <= 18) {
  console.log("underage");
} else if (age >= 19 && age <= 60) {
  console.log("adult");
} else if (age >= 61 && age <= 150) {
  console.log("old");
} else {
  console.log("none");
}
