let Addbtn = document.getElementById("Addbtn");
Addbtn.addEventListener("click", nitin);
let newobj = [];
function nitin(e) {
  e.preventDefault();
  let Addtext = document.getElementById("Addtext");
  let Addtitle = document.getElementById("Addtitle");
  let data = localStorage.getItem("data");
  if (data == null) {
    newobj = [];
  } else {
    newobj = JSON.parse(data);
  }

  let objData = {
    title: Addtitle.value,
    text: Addtext.value,
  };
  newobj.push(objData);
  localStorage.setItem("data", JSON.stringify(newobj));
  display();
}

// show
function display() {
  let data = localStorage.getItem("data");
  if (data == null) {
    newobj = [];
  } else {
    newobj = JSON.parse(data);
  }

  let html = "";
  newobj.forEach(function (element, index) {
    html += ` 
        <div class=" card  my-3 mx-3" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title"> ${element.title}</h5>
          <p class="card-text">${element.text}</p>
          <button id="${index}" onclick="deleteNote(this.id)"  class="btn btn-primary">delete note</button>
        </div>
        </div>`;
  });
  let noteData = document.getElementById("noteData");
  if (newobj.length != 0) {
    noteData.innerHTML = html;
  } else {
    noteData.innerHTML = `i have no notes please add a note`;
  }
}

// delete
function deleteNote(index) {
  let data = localStorage.getItem("data");
  if (data == null) {
    newobj = [];
  } else {
    newobj = JSON.parse(data);
  }

  newobj.splice(index, 1);
  localStorage.setItem("data", JSON.stringify(newobj));
  display();
}

//serarh;

let search = document.getElementById("search");
search.addEventListener("input", afraheem);

function afraheem() {
  let card = document.getElementsByClassName("card");
  let val = search.value;
  Array.from(card).forEach(function (element) {
    let cardText = element.getElementsByTagName("p")[0].innerText;

    if (cardText.includes(val)) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });
}
