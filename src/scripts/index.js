import 'bootstrap'; 
import '../styles/main.scss';
  
let baseUrl = "https://restcountries.eu/rest/v2/all";  
class Countries{
    constructor(){         
    }   
    fetch(){
    } 
}
  
// \/ All of your javascript should go here \/
    fetch(baseUrl)
    .then((response) => {
      document.querySelector("tbody").innerHTML = "loading...";
      return response.json();
      
    })
    .then((data) => {
      document.querySelector("tbody").innerHTML = "";
      let count = 0;
        data.forEach(element => {
            // Create new TableRow 
          let newHTML =`
            <td>${element.name}</td> 
            <td>${element.capital}</td> 
            <td>${element.languages[0].name}</td> 
            <td><img src="  
            ${element.flag}  
            " style="width:100px"></img></td>`
            count++; 
          //  
          let newRow = document.querySelector("tbody").
            insertRow(document.querySelector("tbody").rows.length);       
            newRow.innerHTML = newHTML;
        });    
          let countString = `Number of Countries: ${count}`;
          document.querySelector(".count").innerHTML = countString;
    })
    .catch((error) =>{
      console.log(error);
    });  
  
// let button = document.querySelector("Button");

// button.addEventListener("click", ()=>{

//     // console.log(baseUrl);
//     fetchCountry(baseUrl);

// });
