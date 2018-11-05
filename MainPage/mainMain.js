document.addEventListener("DOMContentLoaded", function(event) {

localStorage.getItem('challenge')
let name = localStorage.getItem('name')
// let goal =
if (localStorage.getItem('challenge') === 'First Challenge') {
  title.innerText = "Hey "+name+", how are those pushups going?"
  text_inline.innerText = "I bet it was a lot!"
  chalAsk.innerText = "How many pushups did you do today?"

}

else if (localStorage.getItem('challenge') === 'Second Challenge') {
  title.innerText = "Hey "+name+", how are those runs going?"
  text_inline.innerText = "I bet you were fast!"
  chalAsk.innerText = "How long did you run today?"
}

else if (localStorage.getItem('challenge') === 'Third Challenge') {
  title.innerText = "Hey "+name+", how are those situps going?"
  text_inline.innerText = "I bet your tummy hurts!"
  chalAsk.innerText = "How many situps did you do today?"
}
// let tr = document.createElement("tr")
// tr.innerHTML =  `<th scope="row">${elements[i].number}</th>
//        <td>${elements[i].symbol}</td>
//        <td>${elements[i].name}</td>`
//         let tbody = document.querySelector("tbody")
//
// tbody.appendChild(tr)

});
