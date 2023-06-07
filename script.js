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
  let n=launches.length;
  for(let i=0; i<n; i++)
  {
    //let colNum = n/3;
    let colId = "col"+i;
    let rowBody = `
    <div class="row align-items-start">
      <div class="col" id="${colId}">
      </div>
    </div><br>
    `;
    document.getElementsByClassName("container").innerHTML=rowBody;
    let details = "There's no information about this mission."
    //console.log(document.getElementsByClassName("container").innerHTML);
    for(let j=0; j<3; j++)
    {
      let launchesArr = launches[i];

      if(launchesArr.details !== null) {
        details = launchesArr.details
      }

      let colBody = `
      <div class="card">
        <img src="${launchesArr.links.mission_patch}" class="card-img-top" alt="mission_patch">
        <div class="card-body">
          <h5 class="card-title">${launchesArr.mission_name} | ${launchesArr.launch_year} | ID: ${launchesArr.flight_number}</h5>
          <p class="card-text">${ details}</p>
          <a href="launch.flight_number" class="card-link">More about ${launchesArr.mission_name}</a>
        </div>
      </div>
      `;
      document.getElementById(colId).innerHTML=colBody;
    }
  }
}