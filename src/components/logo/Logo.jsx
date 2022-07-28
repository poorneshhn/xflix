import "./logo.css";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to={"/"} className="logo-link">
      <div className="logo-container">
        <span className="x-logo">X</span>
        <span className="flix-logo">Flix</span>
      </div>
    </Link>
  );
};

export default Logo;
