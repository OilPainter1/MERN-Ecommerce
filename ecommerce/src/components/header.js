import Auth from '../utils/auth'
import SearchBar from './searchBar'
import { Modal } from 'react-bootstrap'
import { useState } from 'react'


const Header = ({searchTerm, setSearchTerm}) => {

  const [showModal, setShowModal] = useState(false);

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

            <Modal
        size='lg'
        show={showModal}
        onHide={() => setShowModal(false)}
        aria-labelledby='signup-modal'></Modal>
        </div>
      </nav>
    )

}

export default Header

