const setQuote = quote => {
    document.getElementById('theInspirationalQuote').innerText = quote;
}

const randomQuote = Math.floor(Math.random() * 1642); // 1643, the length of array of inspirational quotes given to us from each fetch from our API.

fetch("https://type.fit/api/quotes")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        setQuote(data[randomQuote].text);
    });
