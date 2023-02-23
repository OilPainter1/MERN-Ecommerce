import Auth from '../utils/auth'
import SearchBar from './searchBar'
import { Modal, Nav } from 'react-bootstrap'
import { useState } from 'react'
import LoginForm from './login'
import SignUpForm from './signup'


const Header = ({searchTerm, setSearchTerm}) => {

  const [showModal, setShowModal] = useState(false);

    return (
        <nav className="navbar bg-body-tertiary" id="header">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">Shoe-In</a>
            
            {Auth.loggedIn() ? (
                <>
                  <Nav.Link onClick={Auth.logout}>Logout</Nav.Link>
                </>
              ) : (
                <Nav.Link onClick={() => setShowModal(true)}
                >Login/Sign Up</Nav.Link>)
                }

            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>

            <Modal
              size='lg'
              show={showModal}
              onHide={() => setShowModal(false)}
              aria-labelledby='signup-modal'>
                <Modal.Header closeButton id="modalHeader">
                  <Modal.Title id='signup-modal'>
                    
                  </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <LoginForm/>
                    <SignUpForm/>
                  </Modal.Body>
            </Modal>
          </div>
        </nav>
    )
}

export default Header