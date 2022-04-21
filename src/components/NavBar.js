//import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
export default function NavBar() {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      {"-"}
      <NavLink to="/about">About this website</NavLink>
      {"-"}
      <NavLink to="/discover">Discover more!</NavLink>
    </div>
  );
}
