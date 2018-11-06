document.addEventListener("DOMContentLoaded", function(event) {

  let first_name = document.querySelector("#first_name")


  document.getElementById("submit").addEventListener("click", function (event){
    localStorage.setItem('name', first_name.value)
  })

  // event listener
})
