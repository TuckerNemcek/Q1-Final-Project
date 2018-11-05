document.addEventListener("DOMContentLoaded", function(event) {


var challenge = ""


  document.getElementById("challenge").addEventListener("click", function(event) {
    challengeText.innerHTML = ""

    function randGoal(max) {
      let random = Math.floor(Math.random() * Math.floor(max))
      if (random === 0) {
        challenge = "First Challenge"
        return challengeText.innerHTML = "Do fifty pushups a day for a week!"
      }
      if (random === 1) {
        challenge = "Second Challenge"
        return challengeText.innerHTML = "Go for a half hour long run everyday for a week!"
      }
      if (random === 2) {
        challenge = "Third Challenge"
        return challengeText.innerHTML = "Do fifty situps per day!"
      }

    }
    randGoal(3)
    console.log(challenge)

  })

    document.getElementById("challenge").addEventListener("click", function(event){
      localStorage.setItem('challenge', challenge)

    })





  //Event Listener
})
