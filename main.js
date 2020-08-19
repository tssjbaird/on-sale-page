
    
const data = {
    'shows': [
        "Avatar: The Last Air Bender",
        "Doug",
        "CatDog",
        "Star Wars: The Clone Wars"
    ]
}

function rednerList(items){
    import {html, render} from 'https://unpkg.com/lit-html?module';
    // Define a template function
    const myTemplate = html`<ul>${items.map((day) => html`<li>${day}</li>`)}</ul>`;
    console.log(data)
    // Render the template with some data
    render(myTemplate, document.body);
}

rednerList(data.shows);