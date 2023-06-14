const paginationObj={
  page_number:0, 
  offset:0,
  number_of_pages:null
};

const maxDisplayedLaunches = 6;
const paginationElement = document.getElementById("pagination");

function displayLaunches(launches) 
{
  const container = document.getElementById('con');
  const launchesLength=launches.length;
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
  paginationObj.number_of_pages = Math.ceil(launchesLength/maxDisplayedLaunches);
}

function pagination(page_number) {
  paginationObj.page_number = page_number;

  paginationObj.offset = paginationObj.page_number * maxDisplayedLaunches;

  const isPreviewButtonDisabled = paginationObj.page_number === 0 ? true : false;

  const isNextButtonDisabled = (paginationObj.page_number + 1) >= paginationObj.number_of_pages ? true : false;

  fetch(`https://api.spacexdata.com/v3/launches?limit=${maxDisplayedLaunches}&offset=${paginationObj.offset}`)
  .then(response => response.json())
  .then(text => { 
        console.log(text);
        displayLaunches(text);
        drawNumberOfPages(paginationObj.page_number, isPreviewButtonDisabled,  paginationObj.page_number, isNextButtonDisabled)
      }
  ) 
  .catch((error) => {
      console.error('Error:', error);
  });
}

function drawPrevButton(indexElement, disabled) {
  let disabledClassName = disabled === true ? "disabled" : "";
  return `<li id="prev" class="page-item ${disabledClassName}">
            <a class="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true" onclick="pagination(${indexElement - 1})">&laquo;</span>
            </a>
          </li>`;
}

function drawNextButton(indexElement, disabled) {
  let disabledClassName = disabled === true ? "disabled" : "";
  return  `<li id="next" class="page-item ${disabledClassName}">
              <a class="page-link" href="#" aria-label="Next">
                <span aria-hidden="true" onclick="pagination(${indexElement + 1})">&raquo;</span>
              </a>
            </li>`;
}

function drawNumberOfPages(previewNumber = 1, isPreviewButtonDisabled = true, nextNumber = 1, isNextButtonDisabled = false){
  let liElement = drawPrevButton(previewNumber, isPreviewButtonDisabled)
  for(let i=0; i < paginationObj.number_of_pages; i++)
  {
    liElement += `
    <li class="page-item">
      <a class="page-link" href="#" onclick="pagination(${i})">
        ${(i+1)}
      </a>
    </li>`;
  }
  liElement += drawNextButton(nextNumber, isNextButtonDisabled)
  paginationElement.innerHTML=liElement;
}

fetch("https://api.spacexdata.com/v3/launches/")
  .then(response => response.json())
  .then(launches => { 
      setNumberOfPages(launches);
      drawNumberOfPages();
      const firstDisplayedLaunches = [];
      for(let i=0; i<maxDisplayedLaunches; i++){
        firstDisplayedLaunches.push(launches[i])
      }
      displayLaunches(firstDisplayedLaunches);
      }
  ) 
  .catch((error) => {
      console.error('Error:', error);
  });