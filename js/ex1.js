/*
Display list of paintings
*/

fetch(
  "https://raw.githubusercontent.com/bpesquet/thejsway/master/resources/paintings.json"
)
  .then(response => response.json()) // access and return response from the JSON content
  .then(paintings => {
    const paintingsElement = document.getElementById("paintings"); //get element from .html page
    paintings.forEach(painting => { //create rows for table in HTML page, then append data 
      const paintingElement = document.createElement("tr");
      paintingElement.innerHTML = `<td>  
        ${painting.name}
        </td>
        <td>
        ${painting.year}
        </td>
        <td>
        ${painting.artist}
        </td>`;
      paintingsElement.appendChild(paintingElement);
    });
  })
  .catch(err => {
    console.error(err.message); //catch and display error in console
  });