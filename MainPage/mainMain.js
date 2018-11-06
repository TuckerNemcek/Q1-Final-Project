document.addEventListener("DOMContentLoaded", function(event) {

  localStorage.getItem('challenge')
  let achievedGoals =  document.getElementById("text_inline").value


  let name = localStorage.getItem('name')
  let goal = JSON.parse(localStorage.getItem('goal'))
// goal sucessfully decrements when the event listener is put here


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
let body = document.querySelector("body")
  let weekGoal = document.createElement("weekGoal")
  weekGoal.innerHTML = `<div id="weekGoal" class="center-align">
    only ${goal} left to go!
  </div>`

body.appendChild(weekGoal)

function chalSubmit (){
  achievedGoals = text_inline.value
}

submit.addEventListener("click", function(){
  achievedGoals = goalInput.value
  goal = goal - achievedGoals
console.log(achievedGoals)
console.log(goal)


 })
// DOMContentLoaded
});
