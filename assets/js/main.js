// add hovered class to selected list item
let list = document.querySelectorAll(".navigation li");

function activeLink() {
  list.forEach((item) => {
    item.classList.remove("hovered");
  });
  this.classList.add("hovered");
}

list.forEach((item) => item.addEventListener("mouseover", activeLink));

// Menu Toggle
let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");
let profileSidebar = document.querySelector(".profile-userpic");

toggle.onclick = function () {
  navigation.classList.toggle("active");
  main.classList.toggle("active");
  profileSidebar.classList.toggle("active");
};


// Sign Out
let signOutButton = document.querySelector(".sign-out-button");

signOutButton.addEventListener("click", function () {
  // Add your sign-out logic here
  alert("Signing out..."); // Replace this with your actual sign-out functionality
});


//upload file
function displayFileName() {
  // Display the selected file name
  const fileInput = document.getElementById('fileInput');
  const fileNameDisplay = document.getElementById('fileName');

  if (fileInput.files.length > 0) {
      fileNameDisplay.textContent = 'Selected File: ' + fileInput.files[0].name;
  } else {
      fileNameDisplay.textContent = '';
  }
}
//dropdown sa rms (select category)
function selectCategory(category) {
  document.getElementById('selectedCategory').textContent = category;
}


//thesis

function addThesis() {
  const title = document.getElementById('title').value;
  const abstract = document.getElementById('abstract').value;

  fetch('/api/add_thesis', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ title, abstract })
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
}

function searchThesis() {
  const searchTitle = document.getElementById('searchTitle').value;

  fetch('/api/search', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ title: searchTitle })
  })
  .then(response => response.json())
  .then(data => {
      const resultsDiv = document.getElementById('searchResults');
      resultsDiv.innerHTML = '';

      data.forEach(result => {
          const resultDiv = document.createElement('div');
          resultDiv.innerHTML = `<strong>Title:</strong> ${result.title}<br><strong>Abstract:</strong> ${result.abstract}<br><br>`;
          resultsDiv.appendChild(resultDiv);
      });
  })
  .catch(error => console.error('Error:', error));
}

