import { Link, useMatch, useResolvedPath } from "react-router-dom"
import "./navbar.css"
import logo from "../img/whitelogo.svg"

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        <img src={logo} alt="hello" />
      </Link>
      <ul>
        <CustomLink to="/hospital">Hospital</CustomLink>
        <CustomLink to="/office">Office</CustomLink>
        <CustomLink to="/mall">Mall</CustomLink>
      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}