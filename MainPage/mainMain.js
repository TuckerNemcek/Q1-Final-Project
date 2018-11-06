document.addEventListener("DOMContentLoaded", function(event) {

  localStorage.getItem('challenge')
  let achievedGoals =  document.getElementById("text_inline").value

  const body = document.querySelector("body")
  let name = localStorage.getItem('name')
  let goal = JSON.parse(localStorage.getItem('goal'))
// goal sucessfully decrements when the event listener is put here
let weekGoal = document.createElement("weekGoal")
weekGoal.innerHTML = `<div id="weekGoal" class="center-align">
only ${goal} left to go!
</div>`
submit.addEventListener("click", function(){
  achievedGoals = goalInput.value
  goal = goal - achievedGoals
  weekGoal.innerHTML = `<div id="weekGoal" class="center-align">
  only ${goal} left to go!
  </div>`
  console.log(achievedGoals)
  console.log(goal)
})


  if (localStorage.getItem('challenge') === 'First Challenge') {
    title.innerText = "Hey " + name + ", how are those pushups going?"
    text_inline.innerText = "I bet it was a lot!"
    chalAsk.innerText = "How many pushups did you do today?"


  } else if (localStorage.getItem('challenge') === 'Second Challenge') {
    title.innerText = "Hey " + name + ", how are those runs going?"
    text_inline.innerText = "I bet you were fast!"
    chalAsk.innerText = "How long did you run today?"


  } else if (localStorage.getItem('challenge') === 'Third Challenge') {
    title.innerText = "Hey " + name + ", how are those situps going?"
    text_inline.innerText = "I bet your tummy hurts!"
    chalAsk.innerText = "How many situps did you do today?"
  }

body.appendChild(weekGoal)





// DOMContentLoaded
});
