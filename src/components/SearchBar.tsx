import { FormEvent, useEffect, useState } from 'react'

async function getQuotes(){
    const result = await fetch("https://api.quotable.io/search/quotes?query=George&fields=author");
    //console.log(await result.json());
    let quotes = await result.json();
    return quotes;

}


export const SearchBar = function() {
    const search = async function(event: FormEvent) {
        event.preventDefault()
        useEffect(() => {
            getQuotes().then(response => {
                console.log("Hi "+ Object.keys(response));
            });
        }, []);
    }
    
    return (
        <form onSubmit={search}>
            <input type="text" placeholder="Albert Einstein" />
        </form>
    );
}