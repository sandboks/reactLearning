
import './App.css'
import Header from './components/Header.jsx'
import Entry from './components/Entry.jsx'
import data from './data';

export default function App() {
  const entryElements = data.map((entry) => {
        return (
            <Entry
                img={entry.img}
                title={entry.title}
                country={entry.country}
                mapsUrl={entry.mapsUrl}
                dates={entry.dates}
                blurb={entry.blurb}
            />
        )
    })  
  
  return (
        <>
          <Header />
          {entryElements}
        </>
        
    )
}