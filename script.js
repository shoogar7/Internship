fetch("https://api.spacexdata.com/v3/launches")
.then((res) => {
    if(res.ok){
        return res.json();
    }else{
        throw new Error("ERROR");
    }
})
  .then(data => {
    console.log(data);
    displayLaunch(data)
  })
  .catch((error) => console.error("FETCH ERROR:", error));



  function displayLaunch(data)
  {
    const launch = data.launches;
    const launchDiv = document.getElementById("launch");
  }

let html1 = `<h3>${launch.mission_name}</h3>
            <h6>Subtitle</h6>
            <p>Information</p>
            <a href="">Link</a>`;    

document.getElementById("col1").innerHTML=html1;

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