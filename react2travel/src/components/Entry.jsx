/**
 * Challenge: Build out the Entry component and render 1 instance of it
 * to the App
 * 
 * For now, just hard-code in the data, which you can find in
 * japan.md so you don't have to type it all out manually :)
 * 
 * Notes:
 * – Only render 1 instance of this Entry component for now
 * – I've pulled in marker.png for the little map marker icon
 *   that goes next to the location name
 * – The main purpose of this challenge is to show you where our limitations
 *   currently are, so don't worry about the fact that you're hard-coding all
 *   this data into the component.
 */

import globeLogo from '../assets/logo.png';
import imgLocationMarker from '../assets/marker.png';
let imgurl = "https://scrimba.com/links/travel-journal-japan-image-url";

export default function Entry(props) {
    const entry = props.entry;
    
    return (
        <>
            <article className="EntryRoot">
                <div className="EntryContentGrid">
                    <div className="EntryLeftImageContainer">
                        <img 
                            src={entry.img.src} 
                            alt={entry.img.alt}
                        />
                    </div>
                    <div className="EntryRightColumn">
                        <div className="countryRow">
                            <div className="countryRow countryLocation">
                                <img src={imgLocationMarker}></img>
                                <span>{entry.country}</span>
                            </div>
                            <span><a href={entry.mapsUrl} target="_blank">View on Google maps</a></span>
                        </div>
                        <h1>{entry.title}</h1>
                        <span className="dateSpan">{entry.dates}</span>
                        <p className="entryBlurb">{entry.blurb}</p>
                    </div>
                </div>
            </article>
        </>
    )
}