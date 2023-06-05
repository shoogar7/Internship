/*fetch('https://api.spacexdata.com/v3/launches/')
        .then(response => response.json())
        .then(text => { 
            console.log(text)
            }
        ) 
        .catch((error) => {
            console.error('Error:', error);
        }); */


fetch('https://api.spacexdata.com/v3/launches/1')
        .then(response => response.json())
        .then(text => { 
            let information=text.mission_name;
            let title=document.querySelectorAll(".card-title")[0];
            title.innerHTML=information;
            information=text.links.mission_patch;
            document.querySelectorAll(".card-img-top")[0].src=information;
            information=text.details;
            document.querySelectorAll(".card-text")[0].innerHTML=information;
            information=text.links.wikipedia;
            document.querySelectorAll(".btn-primary")[0].href=information;
            }
        ) 
        .catch((error) => {
            console.error('Error:', error);
        }); 

fetch('https://api.spacexdata.com/v3/launches/2')
        .then(response => response.json())
        .then(text => { 
            let information=text.mission_name;
            let title=document.querySelectorAll(".card-title")[1];
            title.innerHTML=information;
            information=text.links.mission_patch;
            document.querySelectorAll(".card-img-top")[1].src=information;
            information=text.details;
            document.querySelectorAll(".card-text")[1].innerHTML=information;
            information=text.links.wikipedia;
            document.querySelectorAll(".btn-primary")[1].href=information;
            }
        ) 
        .catch((error) => {
            console.error('Error:', error);
        }); 

fetch('https://api.spacexdata.com/v3/launches/3')
        .then(response => response.json())
        .then(text => { 
            let information=text.mission_name;
            let title=document.querySelectorAll(".card-title")[2];
            title.innerHTML=information;
            information=text.links.mission_patch;
            document.querySelectorAll(".card-img-top")[2].src=information;
            information=text.details;
            document.querySelectorAll(".card-text")[2].innerHTML=information;
            information=text.links.wikipedia;
            document.querySelectorAll(".btn-primary")[2].href=information;
            }
        ) 
        .catch((error) => {
            console.error('Error:', error);
        }); 

fetch('https://api.spacexdata.com/v3/launches/4')
        .then(response => response.json())
        .then(text => { 
            let information=text.mission_name;
            let title=document.querySelectorAll(".card-title")[3];
            title.innerHTML=information;
            information=text.links.mission_patch;
            document.querySelectorAll(".card-img-top")[3].src=information;
            information=text.details;
            document.querySelectorAll(".card-text")[3].innerHTML=information;
            information=text.links.wikipedia;
            document.querySelectorAll(".btn-primary")[3].href=information;
            }
        ) 
        .catch((error) => {
            console.error('Error:', error);
        }); 

fetch('https://api.spacexdata.com/v3/launches/8')
        .then(response => response.json())
        .then(text => { 
            let information=text.mission_name;
            let title=document.querySelectorAll(".card-title")[4];
            title.innerHTML=information;
            information=text.links.mission_patch;
            document.querySelectorAll(".card-img-top")[4].src=information;
            information=text.details;
            document.querySelectorAll(".card-text")[4].innerHTML=information;
            information=text.links.wikipedia;
            document.querySelectorAll(".btn-primary")[4].href=information;
            }
        ) 
        .catch((error) => {
            console.error('Error:', error);
        }); 

fetch('https://api.spacexdata.com/v3/launches/9')
        .then(response => response.json())
        .then(text => { 
            let information=text.mission_name;
            let title=document.querySelectorAll(".card-title")[5];
            title.innerHTML=information;
            information=text.links.mission_patch;
            document.querySelectorAll(".card-img-top")[5].src=information;
            information=text.details;
            document.querySelectorAll(".card-text")[5].innerHTML=information;
            information=text.links.wikipedia;
            document.querySelectorAll(".btn-primary")[5].href=information;
            }
        ) 
        .catch((error) => {
            console.error('Error:', error);
        }); 
/*  function displayLaunch(data)
  {
    const l = data.launch;
    const launchDiv = document.getElementById("launch");
  }
*/

/* let mhm = fetch('https://api.spacexdata.com/v3/launches/1')
let html1 = `<h3>${mhm.mission_name}</h3>
            <h6>Subtitle</h6>
            <p>Information</p>
            <a href="">Link</a>`;    
*/

/*let title=document.querySelectorAllAll(".card-title");
console.log(title);
let arr=[10];
let i;
for(i=0; i<6; i++)
{
  arr[i]=document.querySelectorAll(".card-title");
}
console.log(arr);*/

//document.getElementById("col1").innerHTML=html1;

/*
let html2 = `<h3>Title</h3>
            <h6>Subtitle</h6>
            <p>Information</p>
            <a href="">Link</a>`;
let html3 = `<h3>Title</h3>
            <h6>Subtitle</h6>
            <p>Information</p>
            <a href="">Link</a>`;
let html4 = `<h3>Title</h3>
            <h6>Subtitle</h6>
            <p>Information</p>
            <a href="">Link</a>`;    
let html5 = `<h3>Title</h3>
            <h6>Subtitle</h6>
            <p>Information</p>
            <a href="">Link</a>`;
let html6 = `<h3>Title</h3>
            <h6>Subtitle</h6>
            <p>Information</p>
            <a href="">Link</a>`;
document.getElementById("col1").innerHTML=html1;
document.getElementById("col2").innerHTML=html2;
document.getElementById("col3").innerHTML=html3;
document.getElementById("col4").innerHTML=html4;
document.getElementById("col5").innerHTML=html5;
document.getElementById("col6").innerHTML=html6;*/