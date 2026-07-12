import "./Navbar.css";
function Navbar() {
  return (
    <nav className="navbar">
        <ul className="nav-links">
        <li>Pro</li>
        <li>Enterprise</li>
        <li>API</li>
        <li>Blog</li>
        <li>Careers</li>
        <li>Store</li>
      </ul>

      <button className="signin-btn">Sign In</button>
    </nav>
  );
}

export default Navbar;