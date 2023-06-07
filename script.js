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
  for(let i=0; i < launchesLength; i++)
  {
    let rowBody = '<div class="row align-items-start">';
    for(let j=0; j<3; j++)
    {
      let launchesArr = launches[i];
      let details = "There's no information about this mission."
      if(launchesArr.details !== null) {
        details = launchesArr.details
      }
      rowBody += `
        <div class="col">
          <div class="card">
            <img src="${launchesArr.links.mission_patch}" class="card-img-top" alt="mission_patch">
            <div class="card-body">
              <h5 class="card-title">${launchesArr.mission_name} | ${launchesArr.launch_year} | ID: ${launchesArr.flight_number}</h5>
              <p class="card-text">${ details}</p>
              <a href="launch.flight_number" class="card-link">More about ${launchesArr.mission_name}</a>
            </div>
          </div>
        </div>
      `;
     i++;
    }
    rowBody += '</div>';
    container.innerHTML+=rowBody;
    i--;
  }
}