// Country list
const countryList = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antarctica",
    "Antigua-and-Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Autria",
    "Azerbaïjan"
  ];
  
//list of available options// 
var n= countryList.length; //length of country list  
function autoComplete(value) { 
   document.getElementById('country').innerHTML = ''; 
    //setting country list empty at the start of function
    l=value.length; 
for (var i = 0; i<n; i++) { 
    if(((countryList[i].toLowerCase()).indexOf(value.toLowerCase()))>-1) //check if input string is existing in countryList[i] string
    {
        var node = document.createElement("option"); //create element tag option 
        var val = document.createTextNode(countryList[i]); //create text content for this tag 
         node.appendChild(val); //append text to option tags 

         document.getElementById("country").appendChild(node); //creating and appending new elements in country list
         
   }
}
}