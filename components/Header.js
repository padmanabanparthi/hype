import Link from 'next/link'
import { withRouter } from 'next/router'


const Header = ({ router: { pathname } }) => (
  <header>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">

      <Link href="/"><a className="navbar-brand"><img src="/static/logo.png" alt="my image" /></a></Link>
      
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav category-header-section">
          <li className="nav-item active header-category-li">
            <Link href="/categories">
              <a className="nav-link header-category-link">
                <img src="/static/categoryicon.svg" />
                Categories
              </a>
            </Link>
          </li> 
          <li className="headersearch">
            <form>
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Search your favourite" aria-label="Search your favourite1" />
                <div className="input-group-append">
                  <button className="header-search-btn" type="button"><img src="/static/searchicon.svg" /></button>
                </div>
              </div>
            </form>
          </li>
        </ul>
        <div className="rightside-nav">
          <ul className="nav navbar-nav justify-content-end">
            <li className="nav-item">
              <a className="nav-link active" href="#">Inspirations</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Sponsorships</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">How it Works?</a>
            </li>
            <li className="nav-item navbar-button-links">
            <button className="btn btn-sm btn-outline-secondary button-links signin" type="button">Sign in</button>
            <button className="btn btn-sm btn-outline-secondary button-links download-btn" type="button">Download App</button>
            </li>
          </ul>
          
        </div>
        
      </div>

    </nav>
  </header>
)

export default withRouter(Header)