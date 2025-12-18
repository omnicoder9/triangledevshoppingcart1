import { Link } from "react-router-dom";
import SearchBar from "./SearchBar.tsx";
import "../assets/styles/headerstyles.css";

export default function Header() {
  return (
    <header className="site-header">
      <Link to="/" className="site-header__logo">
        Store
      </Link>

      <SearchBar />

      <nav className="site-header__nav">
        <Link to="/cartPage">MyCart</Link>
      </nav>
    </header>
  );
}
