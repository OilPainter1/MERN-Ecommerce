import Auth from '../utils/auth'
import SearchBar from './searchBar'

const Header = () => {
    return (
        <nav className="navbar bg-body-tertiary" id="header">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">eCommerce</a>
            <SearchBar />
        </div>
      </nav>
    )

}

export default Header

