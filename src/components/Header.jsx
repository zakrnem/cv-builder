import '../styles/Header.css'

function Header() {
    return (
    <header>
        <img src="./src/assets/square-cv-svgrepo-com.svg" className='title-logo'/>
        <h1>CV Builder</h1>
        <a href='https://github.com/zakrnem/' title="Zakrnem's Github">
            <img src="./src/assets/github-svgrepo-com.svg" className="gh-logo" />
        </a>  
    </header>
    )
}

export default Header