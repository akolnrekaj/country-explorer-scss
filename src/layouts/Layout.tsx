import { Outlet, NavLink as RouterNavLink } from "react-router-dom";
import "../styles/Layout.scss";

const Layout = () => {
  return (
    <div className="layout-container">
      {/* Header */}
      <header className="navbar">
        <RouterNavLink to="/" className="nav-link">
          Country List
        </RouterNavLink>
        <RouterNavLink to="/contact" className="nav-link">
          Contact
        </RouterNavLink>
      </header>

      {/* Main content */}
      <main className="main-content">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p className="footer-title">Contact us</p>
          <p>Email: info@countryexplorer.com</p>
          <p>Phone: +385 123 456</p>
          <div className="social-links">
            <a href="#" className="social-link">
              Facebook
            </a>
            <a href="#" className="social-link">
              Twitter
            </a>
            <a href="#" className="social-link">
              Instagram
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
