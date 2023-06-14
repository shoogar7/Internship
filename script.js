const paginationObj={
  page_number:0, 
  offset:0,
  number_of_pages:null
};
const maxDisplayedLaunches = 6;
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

function displayAllLaunches(launches) 
{
  const container = document.getElementById('con');
  const launchesLength=launches.length;
  console.log(launchesLength);
  console.log(paginationObj.number_of_pages);
  let rowBody = "";
  for(let i=0; i < launchesLength; i++)
  {
    if(i===0 || i%3===0){
        rowBody += '<div class="row row-cols-1 row-cols-md-3 g-4">';
    }
    let launchesArr = launches[i];
    let details = "There's no information about this mission."
    if(launchesArr.details !== null) {
      details = launchesArr.details;
    }
    let image = "Assets/no_mission_patch.jpg";
    //Checking if it's imgur, because imgur drops access deny
    if(launchesArr.links.mission_patch_small !== null) {
      if(!(launchesArr.links.mission_patch_small.includes("imgur"))){
        image = launchesArr.links.mission_patch_small;
      }
    }
    rowBody += `
      <div class="col-md-4 mb-4">
        <div class="card h-100">
          <img src="${image}" class="card-img-top" alt="mission_patch">
          <div class="card-body">
            <h5 class="card-title">${launchesArr.mission_name} | ${launchesArr.launch_year} | ID: ${launchesArr.flight_number}</h5>
            <p class="card-text">${details}</p>
          </div>
          <div class="card-footer">
            <a href="launch.flight_number" class="btn btn-primary">More about ${launchesArr.mission_name}</a>
          </div>
        </div>
      </div>
    `;
    if(i%3===2){
    rowBody += '</div>';
    }
  }
  container.innerHTML=rowBody;
}

function setNumberOfPages(launches){
  const launchesLength=launches.length;
  paginationObj.number_of_pages = Math.floor(launchesLength/maxDisplayedLaunches);
}

function pagination(page_number)
{
  paginationObj.offset = page_number*6;
  console.log(page_number);

  if(paginationObj.page_number===0){
    prevButton.classList.add("disabled")
  }else{
    prevButton.classList.remove("disabled")
  }

  if(paginationObj.page_number===paginationObj.number_of_pages){
    nextButton.classList.add("disabled")
  }else{
    nextButton.classList.remove("disabled")
  }

  fetch(`https://api.spacexdata.com/v3/launches?limit=${maxDisplayedLaunches}&offset=${paginationObj.offset}`)
  .then(response => response.json())
  .then(text => { 
      console.log(text);
      displayAllLaunches(text);
      }
  ) 
  .catch((error) => {
      console.error('Error:', error);
  });
}


fetch("https://api.spacexdata.com/v3/launches/")
  .then(response => response.json())
  .then(launches => { 
      console.log(launches);
      setNumberOfPages(launches);
      const firstDisplayedLaunches = [];
      for(let i=0; i<maxDisplayedLaunches; i++){
        firstDisplayedLaunches.push(launches[i])
      }
      displayAllLaunches(firstDisplayedLaunches);
      }
  ) 
  .catch((error) => {
      console.error('Error:', error);
  });