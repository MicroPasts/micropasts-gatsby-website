import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const NavBar = ({ siteTitle, menuLinks }) => (
  <header style={{
      background: "#192036",
      marginBottom: "3rem",
  }}
  >
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{
          background: "#192036",
          marginBottom: "1.45rem",
      }}>
          <div className="container-fluid">
              <Link to="/" className="navbar-brand text-white">
                  {siteTitle}
              </Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                      data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                      aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                      {/* Hardcoded links for Team and Partners */}
                      <li className="nav-item">
                          <Link style={{ color: `white` }} className="nav-link" to="/team/">
                              Our Team
                          </Link>
                      </li>
                      <li className="nav-item">
                          <Link style={{ color: `white` }} className="nav-link" to="/partners/">
                              Our Partners
                          </Link>
                      </li>

                      {/* Existing dynamic menu links */}
                      {menuLinks.map(link => (
                        <li className="nav-item" key={link.id}>
                            <Link style={{ color: `white` }} className="nav-link" to={link.link}>
                                {link.name}
                            </Link>
                        </li>
                      ))}
                  </ul>
              </div>
          </div>
      </nav>
  </header>
)

NavBar.propTypes = {
    siteTitle: PropTypes.string,
    menuLinks: PropTypes.arrayOf(
      PropTypes.shape({
          name: PropTypes.string.isRequired,
          link: PropTypes.string.isRequired,
          id: PropTypes.string.isRequired,
      })
    ),
};

NavBar.defaultProps = {
    siteTitle: ``,
    menuLinks: [], // Set default to an empty array
};

export default NavBar;