function takeAction () {
    alert("I am taking action");
}

function showTextArea() {
    const contentFromAlign = document.getElementById("contentFromAlign");
    const textArea = document.getElementById("textArea");
    const editButton = document.getElementById("editButton");
  
    textArea.style.display = "block";
    textArea.value = contentFromAlign.textContent.trim();
    contentFromAlign.style.display = "none";
    editButton.textContent = "Save";
    editButton.onclick = saveChanges;
  }
  
  function saveChanges() {
    const contentFromAlign = document.getElementById("contentFromAlign");
    const textArea = document.getElementById("textArea");
    const editButton = document.getElementById("editButton");

    contentFromAlign.textContent = textArea.value;
    contentFromAlign.style.display = "block";
    textArea.style.display = "none";
    editButton.textContent = "Edit";
    editButton.onclick = showTextArea;
  }

function sendForm(event) {
    event.preventDefault();
  
    var output = document.getElementById("output");
    var name = document.getElementById("inputName").value;
    var email = document.getElementById("inputEmail").value;
    var message = document.getElementById("inputMessage").value;
  
    var outputText =
      "<br><br>" + 
      "<h6>Thanks for your responses! Your data recorded as:</h6>" +
      "<br>" +
      "Hello, my name is " + name +
      "<br>" +
      "My email is " + email +
      "<br>" +
      "And this is my message : " +
      "<br>" + message;
  
    output.innerHTML = outputText;
  }
  