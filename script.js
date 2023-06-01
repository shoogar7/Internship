fetch("https://api.spacexdata.com/v3/launches")
.then(res => res.text())
  .then(data => console.log(data))