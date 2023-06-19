const params = new URLSearchParams(document.location.search);
const flight_numberURL = parseInt(params.get("flight_number"));
const fetchURL = "https://api.spacexdata.com/v3/launches/"+flight_numberURL;

function displayLaunch(launch) {
    document.title = launch.mission_name;
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
      <img src="${image}" class="card-img-top w-75 mx-auto" id="" alt="Mission patch">
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
          <a href="#" class="btn btn-primary "><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-filetype-pdf" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM1.6 11.85H0v3.999h.791v-1.342h.803c.287 0 .531-.057.732-.173.203-.117.358-.275.463-.474a1.42 1.42 0 0 0 .161-.677c0-.25-.053-.476-.158-.677a1.176 1.176 0 0 0-.46-.477c-.2-.12-.443-.179-.732-.179Zm.545 1.333a.795.795 0 0 1-.085.38.574.574 0 0 1-.238.241.794.794 0 0 1-.375.082H.788V12.48h.66c.218 0 .389.06.512.181.123.122.185.296.185.522Zm1.217-1.333v3.999h1.46c.401 0 .734-.08.998-.237a1.45 1.45 0 0 0 .595-.689c.13-.3.196-.662.196-1.084 0-.42-.065-.778-.196-1.075a1.426 1.426 0 0 0-.589-.68c-.264-.156-.599-.234-1.005-.234H3.362Zm.791.645h.563c.248 0 .45.05.609.152a.89.89 0 0 1 .354.454c.079.201.118.452.118.753a2.3 2.3 0 0 1-.068.592 1.14 1.14 0 0 1-.196.422.8.8 0 0 1-.334.252 1.298 1.298 0 0 1-.483.082h-.563v-2.707Zm3.743 1.763v1.591h-.79V11.85h2.548v.653H7.896v1.117h1.606v.638H7.896Z"/>
        </svg></a>
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