import { setSearchFocus} from "./searchBar.js";
import {buildSearchResults} from "./searchResults.js";
import { getsearchTerm} from "./dataFunctions.js";
document.addEventListener("readystatechange", (event) => {
    if(event.target.readyState === "complete"){
        initApp();
    }
});

const initApp = () => {
    setSearchFocus();

    // 3 listeners clear text

    const form = document.getElementById("searchBar");
    form.addEventListener("submit", submitTheSearch);
}

// procedural "workflow" function
const submitTheSearch = (event) =>{
    event.preventDefault();
    // delete search results
    processTheSearch();
    setSearchFocus();


};

// procedural 
const processTheSearch = async () => {
    // clear the stats line
    const searchTerm = getsearchTerm();
    if(searchTerm === "")return;
    const resultArray = await retrieveSearchResults(searchTerm);
    if(resultArray.length) buildSearchResults(resultArray);
    // set stats line
}