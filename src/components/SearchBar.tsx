import { FormEvent, useEffect, useState } from 'react'

async function getQuotes(){
    //const result = await fetch("https://api.quotable.io/search/quotes?query=George&fields=author");
    const result = await fetch("https://quotable.io/quotes?author=albert-einstein");
    //console.log(await result.json());
    let quotes = await result.json();
    return quotes;

}

interface Quote {
    author: string;
    quote: string;
}


export const SearchBar = function() {
    const [quoteList, setQuoteList] = useState<Quote[]>([]);
    const search = async function(event: FormEvent) {
        event.preventDefault()
        getQuotes().then(response => {
            console.log("Hi "+ Object.keys(response));
            for (const item of response.results)
            {
                console.log("Hi "+ item.content);
            }
        });
    }
    
    return (
        <form onSubmit={search}>
            <input type="text" placeholder="Albert Einstein" />
        </form>
    );
}