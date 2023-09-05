import "../styles/Header.css";
import imgUrl1 from "../assets/square-cv-svgrepo-com.svg";
import imgUrl2 from "../assets/github-svgrepo-com.svg";

function Header() {
  return (
    <header>
      <img src={imgUrl1} className="title-logo" />
      <h1>CV Builder</h1>
      <a href="https://github.com/zakrnem/" title="Zakrnem's Github">
        <img src={imgUrl2} className="gh-logo" />
      </a>
    </header>
  );
}

export default Header;
