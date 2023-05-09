const searchForm = document.querySelector('form');
const searchResultDiv = document.querySelector('.search-result');
const container= document.querySelector('containter');
let searchQuery = '';
const APP_ID = 'a37abdf0';
const APP_key = 'a823875fe99ca9bbb6ef1ba03668e48e';
const baseURL = 'https://test-es.edamam.com/search';


searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    searchQuery = e.target.querySelector('input').value;
    fetchApi();
})

async function fetchApi() {
    const baseURL = 'https://test-es.edamam.com/search';
    const response = await fetch(baseURL);
    const data = await response.json();
    generateHtml(data.hits);
    console.log(data);
}
function generateHtml(results){
    let generateHTML = '';
    results.map(result => {
        generateHTML +=
        `
            < div class = "item" >
            < img src ="${result.recipe.image}" alt = "" >
            < div class = "flex-container" >
            < h1 class = "title" > ${resul.recipe.label}< /h1>
        <a class = "view-button" href="${result.recipe.url}" target="_blank">View Recipe</a>
    </div>
        <p class = "item-data">Calories: ${result.recipe.calories.toFixed(2)}</p>
        <p class = "item-data">Diet label: ${result.recipe.dietLabel}</p>
        <p class = "item-data">Health Label: ${result.recipe.healthLabel}</p>
    </div>
        `
    })
    searchResultDiv.innerHTML = generateHTML;
}