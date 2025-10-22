import reactLogo from '../assets/react.svg'

export default function Navbar() {
    return (
        <>
            <header id="navbar">
                <nav>
                    <img src={reactLogo} className="logo react" alt="React logo" />
                    <span id="logoText">ReactFacts</span>
                </nav>
            </header>
        </>
    )
}

/**
 * Challenge: complete the Navbar to match the Figma design
 * 
 * Hints:
 * - for semantic HTML purposes, the Navbar should render
 *   a <header> with a <nav> nested inside. The image and "ReactFacts"
 *   text elements can both be rendered as children inside the <nav>
 * - reference the Figma design for the most accurate info about
 *   colors, sizes, font information, etc.
 */