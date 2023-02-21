import Auth from '../utils/auth'
import SearchBar from './searchBar'

const Header = ({searchTerm, setSearchTerm}) => {
    return (
        <nav className="navbar bg-body-tertiary" id="header">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">eCommerce</a>
            
            {/* {Auth.loggedIn() ? (
                <>
                  <Nav.Link onClick={Auth.logout}>Logout</Nav.Link>
                </>
              ) : (
                <Nav.Link onClick={() => setShowModal(true)}
                >Login/Sign Up</Nav.Link>)} */}

            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
        </div>
      </nav>
    )

}

export default Header

