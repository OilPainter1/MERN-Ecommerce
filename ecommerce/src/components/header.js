import Auth from '../utils/auth'
import SearchBar from './searchBar'

const Header = () => {
    return (
        <nav class="navbar bg-body-tertiary">
            <div class="container-fluid">
          <a class="navbar-brand" href="#">eCommerce</a>
          <SearchBar />
        </div>
      </nav>
    )

}

export default Header