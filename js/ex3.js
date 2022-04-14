/*
Send visited coutnries data to web server
*/

// Create traveler info
const traveler = {
    name: "Sam",
    countries: [
      {
        name: "Ecuador",
        year: 2003
      },
      {
        model: "Portugal",
        color: 2004
      },
      {
        model: "Russia",
        color: 2016
      }
    ]
  };
  
// Send this object as JSON data to the web server

fetch("https://thejsway-server.herokuapp.com/api/countries", {  // access URL and send request 
    method: "POST", //method to send data to web server
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(traveler) //user method to transform traveler data into a JSON string.
  })
    .then(response => response.text())
    .then(result => {
      console.log(result); //display result 
    })
    .catch(err => {
      console.error(err.message); //display error in console 
    });