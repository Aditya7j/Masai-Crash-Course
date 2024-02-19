// --- do not touch  ↓↓↓↓↓↓↓↓↓↓↓↓ ----------
const baseServerURL = `http://localhost:${
  import.meta.env.REACT_APP_JSON_SERVER_PORT
}`;
// --- do not touch  ↑↑↑↑↑↑↑↑↑↑↑↑ ----------

// ***** Constants / Variables ***** //
const stateURL = `${baseServerURL}/states`;
let mainSection = document.getElementById("data-list-wrapper");
let paginationWrapper = document.getElementById("pagination-wrapper");

// state
let stateNameInput = document.getElementById("state-Name");
let stateImageInput = document.getElementById("state-image");
let statecapitalInput = document.getElementById("state-capital");
let statepopulationInput = document.getElementById("state-population");
let statelanguageInput = document.getElementById("state-language");
let stateGDPRankingInput = document.getElementById("state-GDPRanking");
let stateRegionInput = document.getElementById("state-region");
let statetourismPlacesInput = document.getElementById("state-tourismPlaces");
let stateCreateBtn = document.getElementById("add-state");

// Function to create a state card with update and delete buttons
function createStateCard(state) {
  const card = document.createElement("div");
  const cardId = `card-wrapper-conatiner-${state.id}`;
  card.setAttribute("id", cardId);
  card.classList.add("card");
  card.innerHTML = `
    <div class="title-wrapper-container">
      <img src="${state.image}" alt="${state.stateName}" />
      <h4>${state.stateName}</h4>
    </div>
    <div class="data-store-wrapper-container">
      <p><strong>Population:</strong> ${state.population}</p> <br/>
      <p><strong>GDP Ranking:</strong> ${state.GDPRanking}</p>
      <p><strong>Language:</strong> ${state.language}</p>
      <p><strong>Capital:</strong> ${state.capital}</p>
      <p><strong>Region:</strong> ${state.region}</p>
      <p><strong>Tourism Places:</strong> ${state.tourismPlaces}</p>
    </div>
    <div class="button-wrapper-container">
      <button class="update-button" data-state-id="${state.id}">Update</button>
      <button class="delete-button" data-state-id="${state.id}">Delete</button>
    </div>
  `;

  const updateButton = card.querySelector(".update-button");
  const deleteButton = card.querySelector(".delete-button");

  // Add event listeners for update and delete buttons
  updateButton.addEventListener("click", () => handleUpdate(state.id));
  deleteButton.addEventListener("click", () => handleDelete(state.id));
  return card;
}

// Example function to handle the update button click
function handleUpdate(stateId) {
  console.log(`Update button clicked for state ID: ${stateId}`);
}

async function handleDelete(stateId) {
  console.log({stateId})
  const confirmDelete = confirm("Are you sure you want to delete this state?");
  
  if (confirmDelete) {
    try {
      const cardToRemove = document.getElementById(`card-wrapper-conatiner-${stateId}`);

      if (cardToRemove) {
        cardToRemove.remove();

        const response = await fetch(`${stateURL}/${stateId}`, {
          method: "DELETE",
        });

        if (!response.ok) {
          throw new Error(`Failed to delete state. Status: ${response.status}`);
        }

        fetchStates();
      } else {
        throw new Error(`State card with ID ${stateId} not found in the UI`);
      }
    } catch (error) {
      console.error(error);
      alert("Failed to delete state. Check the console for details.");
    }
  }
}




// Update state
let updateStateIdInput = document.getElementById("update-state-id");
let updatestateNameInput = document.getElementById("update-state-Name");
let updateStateImageInput = document.getElementById("update-state-image");
let updateStatecapitalInput = document.getElementById("update-state-capital");
let updateStatepopulationInput = document.getElementById(
  "update-state-population"
);
let updateStatelanguageInput = document.getElementById("update-state-language");
let updateStateGDPRankingInput = document.getElementById(
  "update-state-GDPRanking"
);
let updateStateRegionInput = document.getElementById("update-state-region");

let updateStatetourismPlacesInput = document.getElementById(
  "update-state-tourismPlaces"
);
let updateStateBtn = document.getElementById("update-state");

//Update GDPRanking
let updateGDPStateId = document.getElementById("update-GDP-state-id");
let updateGDPRankingStateGDPRanking = document.getElementById(
  "update-GDP-state-GDPRanking"
);
let updateGDPRankingStateBtn = document.getElementById("update-GDP-stateBtn");

//sort and filter
let sortAtoZBtn = document.getElementById("sort-low-to-high");
let sortZtoABtn = document.getElementById("sort-high-to-low");
let filterNortheast = document.getElementById("filter-North-East-India");
let filterWest = document.getElementById("filter-West-India");
let filterNorth = document.getElementById("filter-North-India");

//Search by name/language
let searchBySelect = document.getElementById("search-by-select");
let searchByInput = document.getElementById("search-by-input");
let searchByButton = document.getElementById("search-by-button");

//States Data
let statesData = [];
let queryParamString = null;
let pageNumber = 1;

// Function to render states based on the current data
function renderStates() {
  mainSection.innerHTML = "";
  const startIndex = (pageNumber - 1) * 5;
  const endIndex = pageNumber * 5;
  const statesToRender = statesData.slice(startIndex, endIndex);

  statesToRender.forEach((state) => {
    const card = createStateCard(state);
    mainSection.appendChild(card);
  });
}

// Function to handle pagination
function handlePagination() {
  paginationWrapper.innerHTML = "";
  const totalPages = Math.ceil(statesData.length / 5);

  for (let i = 1; i <= totalPages; i++) {
    const button = document.createElement("button");
    button.textContent = i;
    button.addEventListener("click", () => {
      pageNumber = i;
      renderStates();
    });
    paginationWrapper.appendChild(button);
  }

  // Update the current page when it exceeds the total pages
  if (pageNumber > totalPages) {
    pageNumber = totalPages;
    renderStates();
  }
}

// Function to fetch states data from the server
async function fetchStates() {
  try {
    const response = await fetch(stateURL);
    if (!response.ok) {
      throw new Error("Failed to fetch states data");
    }
    statesData = await response.json();
    renderStates();
    handlePagination();
  } catch (error) {
    console.error(error);
  }
}

// Function to filter states based on region
function filterStatesByRegion(region) {
  const filteredStates = statesData.filter((state) => state.region === region);
  statesData = filteredStates;
  renderStates();
  handlePagination();
}

// Function to sort states based on GDP Ranking
function sortStatesByGDP(order) {
  statesData.sort((a, b) => {
    return order === "asc" ? a.GDPRanking - b.GDPRanking : b.GDPRanking - a.GDPRanking;
  });
  renderStates();
  handlePagination();
}

// Function to search states by name or language
function searchStates(queryParam) {
  if (!queryParam) {
    fetchStates();
    return;
  }
  const filteredStates = statesData.filter(
    (state) =>
      state.stateName.toLowerCase().includes(queryParam) ||
      state.language.toLowerCase().includes(queryParam)
  );
  statesData = filteredStates;
  renderStates();
  handlePagination();
}

// ***** Event Listeners ***** //

stateCreateBtn.addEventListener("click", async () => {
  const newState = {
    stateName: stateNameInput.value,
    image: stateImageInput.value,
    capital: statecapitalInput.value,
    population: parseInt(statepopulationInput.value),
    language: statelanguageInput.value,
    GDPRanking: parseInt(stateGDPRankingInput.value),
    region: stateRegionInput.value,
    tourismPlaces: statetourismPlacesInput.value,
  };

  try {
    const response = await fetch(stateURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newState),
    });

    if (!response.ok) {
      throw new Error("Failed to add a new state");
    }

    fetchStates();
  } catch (error) {
    console.error(error);
  }
});

updateStateBtn.addEventListener("click", async () => {
  const stateId = updateStateIdInput.value;
  const updatedState = {
    stateName: updatestateNameInput.value,
    image: updateStateImageInput.value,
    capital: updateState
  }
})


// Function to update state
async function updateState(stateId, updatedState) {
  try {
    const response = await fetch(`${stateURL}/${stateId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedState),
    });

    if (!response.ok) {
      throw new Error("Failed to update state");
    }

    fetchStates();
  } catch (error) {
    console.error(error);
  }
}

// Event listener for update state button
updateStateBtn.addEventListener("click", () => {
  const stateId = updateStateIdInput.value;
  const updatedState = {
    stateName: updatestateNameInput.value,
    image: updateStateImageInput.value,
    capital: updateStatecapitalInput.value,
    population: parseInt(updateStatepopulationInput.value),
    language: updateStatelanguageInput.value,
    GDPRanking: parseInt(updateStateGDPRankingInput.value),
    region: updateStateRegionInput.value,
    tourismPlaces: updateStatetourismPlacesInput.value,
  };

  updateState(stateId, updatedState);
});

// Function to update GDP Ranking
async function updateGDP(stateId, updatedGDP) {
  try {
    const response = await fetch(`${stateURL}/${stateId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedGDP),
    });

    if (!response.ok) {
      throw new Error("Failed to update GDP Ranking");
    }

    fetchStates();
  } catch (error) {
    console.error(error);
  }
}

// Event listener for update GDP Ranking button
updateGDPRankingStateBtn.addEventListener("click", () => {
  const stateId = updateGDPStateId.value;
  const updatedGDP = {
    GDPRanking: parseInt(updateGDPRankingStateGDPRanking.value),
  };

  updateGDP(stateId, updatedGDP);
});

sortAtoZBtn.addEventListener("click", () => sortStatesByGDP("asc"));

sortZtoABtn.addEventListener("click", () => sortStatesByGDP("desc"));

filterNortheast.addEventListener("click", () => filterStatesByRegion("North East India"));

filterWest.addEventListener("click", () => filterStatesByRegion("West India"));

filterNorth.addEventListener("click", () => filterStatesByRegion("North India"));

searchByButton.addEventListener("click", () => {
  const queryParam = searchByInput.value.toLowerCase();
  searchStates(queryParam);
});

paginationWrapper.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    pageNumber = parseInt(event.target.textContent);
    renderStates();
  }
});

fetchStates();



    