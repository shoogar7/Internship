fetch('https://api.spacexdata.com/v3/launches/')
        .then(response => response.json())
        .then(text => { 
            console.log(text)
            displayAllLaunches(text);
            }
        ) 
        .catch((error) => {
            console.error('Error:', error);
        });
function displayAllLaunches(launches) 
{
  const container = document.getElementById('con');
  let launchesLength=launches.length;
  let rowBody = "";
  for(let i=0; i < launchesLength; i++)//i=0
  {
    if(i===0 || i%3===0){
        rowBody += '<div class="row row-cols-1 row-cols-md-3 g-4">';//przypisze to
      }
      let launchesArr = launches[i];
      let details = "There's no information about this mission."
      if(launchesArr.details !== null) {
        details = launchesArr.details;
      }
      let image = "Assets/no_mission_image.jpg";
      //Checking if it's imgur, because imgur drops access deny
      if(launchesArr.links.mission_patch_small !== null) {
        if(!(launchesArr.links.mission_patch_small.includes("imgur"))){
          image = launchesArr.links.mission_patch_small;
        }
      }
      //h-100
      rowBody += `
        <div class="col-md-4 mb-4">
          <div class="card h-100">
            <img src="${image}" class="card-img-top" alt="mission_patch">
            <div class="card-body">
              <h5 class="card-title">${launchesArr.mission_name} | ${launchesArr.launch_year} | ID: ${launchesArr.flight_number}</h5>
              <p class="card-text">${details}</p>
              <a href="launch.flight_number" class="btn btn-primary">More about ${launchesArr.mission_name}</a>
            </div>
          </div>
        </div>
      `;
     if(i%3===2){
      rowBody += '</div>';
     }
  }
  container.innerHTML+=rowBody;
}