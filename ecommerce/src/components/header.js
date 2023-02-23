import Auth from '../utils/auth'
import SearchBar from './searchBar'
import { Modal, Nav, Tab } from 'react-bootstrap'
import { useState } from 'react'
import LoginForm from './login'
import SignUpForm from './signup'


const Header = ({searchTerm, setSearchTerm}) => {

  const [showModal, setShowModal] = useState(false);

    return (
        <nav className="navbar bg-body-tertiary" id="header">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">eCommerce</a>
            
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
        {/* tab container to do either signup or login component */}
        <Tab.Container defaultActiveKey='login'>
          <Modal.Header closeButton>
            <Modal.Title id='signup-modal'>
              {/* <Nav variant='pills'>
                <Nav.Item>
                  <Nav.Link eventKey='login'>Login</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='signup'>Sign Up</Nav.Link>
                </Nav.Item>
              </Nav> */}
              
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>

          <LoginForm/>
              <SignUpForm/>

            {/* <Tab.Content> */}

            {/* <Tab.Pane eventKey='login'>
                <Login handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
              <Tab.Pane eventKey='signup'>
                <SignUp handleModalClose={() => setShowModal(false)} />
              </Tab.Pane> */}

            {/* </Tab.Content> */}
          </Modal.Body>
        </Tab.Container>
      </Modal>
        </div>
      </nav>
    )

}

export default Header