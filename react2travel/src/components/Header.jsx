import globeLogo from '../assets/logo.png'

export default function Header() {
    return (
        <>
            <header id="topHeader">
                <div>
                    <img src={globeLogo} className="logo react" alt="React logo" />
                    <span id="logoText">My Travel Journal</span>
                </div>
            </header>
        </>
    )
}