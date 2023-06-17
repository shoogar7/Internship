const params = new URLSearchParams(document.location.search);
const flight_numberURL = parseInt(params.get("flight_number"));
const fetchURL = "https://api.spacexdata.com/v3/launches/"+flight_numberURL;

function displayLaunch(launch) {
    const container = document.getElementById('con');
    let details = "There's no information about this mission."
    if(launch.details !== null) {
        details = launch.details;
    }
    let image = "Assets/no_mission_patch.jpg";
    //Checking if it's imgur, because imgur drops access deny
    if(launch.links.mission_patch_small !== null) {
        if(!(launch.links.mission_patch_small.includes("imgur"))) {
            image = launch.links.mission_patch_small;
        }
    }
    let launchId = "There is no mission id.";
    if(launch.mission_id.length !== 0) {
        launchId = launch.mission_id;
    }
    let cardBody = `<div class="card w-50" id="card"> 
      <img src="${image}" class="card-img-top w-75" id="" alt="Mission patch">
      <div class="card-body">
        <h5 class="card-title">${launch.mission_name} | ID: ${launch.flight_number} | ${launch.launch_year}</h5>
        <h6 class="card-subtitle text-muted">${launchId}</h6>
        <p class="card-text">${details}</p>
        `;
    if(launch.ships.length !== 0) {
        cardBody += `<p class="card-text">Ships: <br>`;
    }
    for(let i=0; i<launch.ships.length; i++) {
        cardBody += `${launch.ships[i]} <br>`;
    }
    cardBody += `</p>
       <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
        `;
    for(let i=0; i<launch.links.flickr_images.length; i++){
        cardBody += `<div class="carousel-item">
                        <img src="${launch.links.flickr_images[i]}" class="d-block w-100" alt="...">
                    </div>`
    }
    cardBody += `</div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
      </div>
      <div class="card-footer text-center">
          <a href="index.html" class="btn btn-primary ">Back to all launches</a>
      </div>
  </div>
      `;
    container.innerHTML = cardBody;
    document.querySelector(".carousel-item").classList.add("active");
  }

fetch(fetchURL)
  .then(response => response.json())
  .then(launch => { 
    console.log(launch);
    displayLaunch(launch);
    }
  ) 
  .catch((error) => {
      console.error('Error:', error);
  });