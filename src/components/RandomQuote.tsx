import { useState } from 'react'

async function doThis() {
    const result = await fetch("https://api.quotable.io/random");
    //console.log(await result.json());
    let quote = await result.json();
    return quote;
}

export const RandomQuote = function() {
    const [randomQuote, setRandomQuote] = useState("");
    doThis().then(response => {
        console.log("Hi "+ Object.keys(response));
        setRandomQuote(response.content);
    });

    return (
        //<p>Random quote placeholder</p>
        <p>{randomQuote}</p>
    );
}