const searchForm = document.querySelector('form');
const searchResultDiv = document.querySelector('.search-result');
const container = document.querySelector('containter');
let searchQuery = '';
const APP_ID = 'a37abdf0';
const APP_key = 'a823875fe99ca9bbb6ef1ba03668e48e';


searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    searchQuery = e.target.querySelector('input').value;
    console.log(searchQuery);

})