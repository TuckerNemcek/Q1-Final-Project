document.addEventListener("DOMContentLoaded", function(event) {



  // console.log(input)
  //
  // function formData() {
  let first_name = document.querySelector("#first_name")


  document.getElementById("submit").addEventListener("click", function (event){
    localStorage.setItem('name', first_name.value)

  })

  // }
  // event listener
})


// function reg() {
//   window.captureEvents(Event.SUBMIT);
//   window.onsubmit = hit;
// }

// function hit() {
//   let input = document.querySelector("#first_name")
//   alert(input.innerText);
// }
