const setQuote = quote => {
    document.getElementById('theInspirationalQuote').innerText = quote;
}

const randomQuote = Math.floor(Math.random() * 1642);

fetch("https://type.fit/api/quotes")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        setQuote(data[randomQuote].text);
    });





