/*
GitHub user info
*/

const formElement = document.querySelector("form");
formElement.addEventListener("submit", e => {
  e.preventDefault();
  const login = formElement.elements.login.value;
  fetch(`https://api.github.com/users/${login}`)
    .then(response => response.json())
    .then(user => {
      // Create user info and display on HTML page
      const pictureElement = document.createElement("img");
      pictureElement.src = user.avatar_url;
      pictureElement.style.height = "150px";
      pictureElement.style.width = "150px";
      const nameElement = document.createElement("div");
      nameElement.textContent = user.name;
      nameElement.style.fontSize = "20px";
      const websiteElement = document.createElement("a");
      websiteElement.href = user.blog;
      websiteElement.textContent = websiteElement.href;
      // Add info on the page
      const infoElement = document.getElementById("info");
      infoElement.innerHTML = ""; // Remove previous user info
      infoElement.appendChild(pictureElement);
      infoElement.appendChild(nameElement);
      infoElement.appendChild(websiteElement);
    })
    .catch(err => {
      console.error(err.message);
    });
});
