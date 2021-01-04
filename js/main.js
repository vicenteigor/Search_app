import { setSearchFocus} from "./searchBar.js";
import {deleteSearchResults, buildSearchResults, clearStatsLine, setStatsLine} from "./searchResults.js";
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
}