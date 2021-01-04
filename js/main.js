import { setSearchFocus, showClearTestButton, clearSearchText, clearPushListener} from "./searchBar.js";
import {deleteSearchResults, buildSearchResults, clearStatsLine, setStatsLine} from "./searchResults.js";
import { getsearchTerm, retrieveSearchResults} from "./dataFunctions.js";
document.addEventListener("readystatechange", (event) => {
    if(event.target.readyState === "complete"){
        initApp();
    }
});

const initApp = () => {
    setSearchFocus();
    const search = document.getElementById("search");
    search.addEventListener("input", showClearTestButton);
    const clear = document.getElementById("clear");
    clear.addEventListener("click", clearSearchtText);
    clear.addEventListener("keydown", clearPushListener);
    const form = document.getElementById("searchBar");
    form.addEventListener("submit", submitTheSearch);
};

// procedural "workflow" function
const submitTheSearch = (event) =>{
    event.preventDefault();
    deleteSearchResults();
    processTheSearch();
    setSearchFocus();


};

// procedural 
const processTheSearch = async () => {
        clearStatsLine();
    const searchTerm = getsearchTerm();
    if(searchTerm === "")return;
    const resultArray = await retrieveSearchResults(searchTerm);
    if(resultArray.length) buildSearchResults(resultArray);
        setStatsLine(resultArray.length);
};