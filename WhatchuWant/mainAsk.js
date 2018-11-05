document.addEventListener("DOMContentLoaded", function(event) {


var challenge = ""
var goal = 0

  document.getElementById("challenge").addEventListener("click", function(event) {
    challengeText.innerHTML = ""

    function randGoal(max) {
      let random = Math.floor(Math.random() * Math.floor(max))
      if (random === 0) {
        challenge = "First Challenge"
        goal = 350
        return challengeText.innerHTML = "Do fifty pushups a day for a week!"
      }
      if (random === 1) {
        challenge = "Second Challenge"
        goal = 7
        return challengeText.innerHTML = "Go for a mile long run everyday for a week!"
      }
      if (random === 2) {
        challenge = "Third Challenge"
        goal = 700
        return challengeText.innerHTML = "Do one hundred situps per day!"

      }

    }
    randGoal(3)
    console.log(challenge)

  })

    document.getElementById("challenge").addEventListener("click", function(event){
      localStorage.setItem('challenge', challenge)
      localStorage.setItem('goal', JSON.stringify(goal))
    })





  //Event Listener
})
