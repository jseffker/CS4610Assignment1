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

interface SearchBarProps {
    listDisplayed: boolean;
    setListDisplayed: any;
}

export const SearchBar = function({listDisplayed, setListDisplayed}: SearchBarProps) {
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

    if (quoteList.length > 0){
        setListDisplayed(true);
    }
    
    return (
        <div>
            <form className={listDisplayed ? "search-bar-list-displayed" : ""} onSubmit={search}>
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
                        {quote.content}<br/><i>- {quote.author}</i>
                </p>
            ))}
        </div>
    );
}