import { FormEvent, useEffect, useState } from 'react'

async function getQuotes(searchTerm: string){
    const result = await fetch(`https://usu-quotes-mimic.vercel.app/api/search?query=${searchTerm}`);
    let quotes = await result.json();
    return quotes;

}

interface Quote {
    author: string;
    content: string;
}

export const SearchBar = function() {
    const [searchTerm, setSearchTerm] = useState("");
    const [quoteList, setQuoteList] = useState<Quote[]>([]);
    const search = async function(event: FormEvent) {
        event.preventDefault()
        setQuoteList([]);
        getQuotes(searchTerm).then(response => {
            let tempQuoteList: Quote[] = [];
            setQuoteList(response.results);
            for (const item of response.results)
            {
                let tempQuote: Quote = {author:"", content:""};
                tempQuoteList.push(tempQuote)
                console.log(item.content);
            }
        });
    }
    
    return (
        <div>
            <form onSubmit={search}>
                <input
                    type="text"
                    placeholder="Albert Einstein"
                    onChange={e => setSearchTerm(e.target.value)}
                />
            </form>
            {quoteList.map((quote, index) => (
                //index value should be fine here because I'm clearing the list after each edit
                <p
                    key={index}
                    className="quote-list-item">
                        {quote.content} - {quote.author}
                </p>
            ))}
        </div>
    );
}