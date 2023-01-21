import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { RandomQuote } from './components/RandomQuote'
import { SearchBar } from './components/SearchBar';
import { TitleBanner } from './components/TitleBanner';

function App() {
  const [listDisplayed, setListDisplayed] = useState(false);

  return (
    <div>
      < TitleBanner />
      < SearchBar />
      < RandomQuote />
    </div>
  );
}

export default App;
