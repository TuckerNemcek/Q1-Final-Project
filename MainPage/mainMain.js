document.addEventListener("DOMContentLoaded", function(event) {

localStorage.getItem('challenge')

if (localStorage.getItem('challenge') === 'First Challenge') {
  title.innerText = "Hey [user], how are those pushups going?"
}

else if (localStorage.getItem('challenge') === 'Second Challenge') {
  title.innerText = "Hey [user], how are those runs going?"
}

else if (localStorage.getItem('challenge') === 'Third Challenge') {
  title.innerText = "Hey [user], how are those situps going?"
  
}


});
