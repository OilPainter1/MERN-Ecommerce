function SearchBar({ searchTerm, setSearchTerm }) {
    return (
        <div className="container">
            <div className="container">
                <h4>Search</h4>
            </div>
            <div className="input-group input-group-sm mb-3">
                <input type="text" className="form-control" placeholder="air max" value={searchTerm} onChange={e => setSearchTerm(e.target.value)}></input>
                <button type="button" className="bg bg-primary">

                    <i className="bi bi-search"></i>

                </button>
            </div>
        </div>
    )

}

export default SearchBar