function generateWorkout(event) {
  event.preventDefault();

  new Typewriter("#generator-output", {
    strings: ["Hello"],
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let workoutPlanForm = document.querySelector("#workout-plan-form");
workoutPlanForm.addEventListener("submit", generateWorkout);
