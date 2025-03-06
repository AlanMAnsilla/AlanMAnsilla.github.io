function updateContent(title, match, year, rating, seasons, quality, audio, headline, description, imageUrl) {
    document.getElementById('title').innerText = title;
    document.getElementById('match-percentage').innerText = match;

    document.getElementById('details').innerHTML = `
        <span>${year}</span>
        <span>${rating}</span>
        <span>${seasons}</span>
        <span>${quality}</span>
        <span>${audio}</span>
    `;

    document.getElementById('description').innerHTML = `
        <span class="bold">${headline}</span><br/>
        ${description}
    `;

    document.getElementById('main-image').src = imageUrl;
}