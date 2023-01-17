import { FormEvent, useState } from 'react'

const search = async function(event: FormEvent) {
    event.preventDefault()
    const result = await fetch("https://api.quotable.io/random");
    console.log(await result.json());
}

export const SearchBar = function() {
    return (
        <form onSubmit={search}>
            <input type="text" placeholder="Albert Einstein" />
        </form>
    );
}