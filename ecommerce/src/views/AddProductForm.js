function AddProductForm(props) {
    return (
    <>
        <h2>Add New Product</h2>
        <form>
            <div className="form-group">
                <label htmlFor="productName">Name</label>
                <input type="text" className="form-control" id="productName" placeholder="blue shirt">
                </input>
            </div>
            <div className="form-group">
                <label htmlFor="productImage">Image Link</label>
                <input type="text" className="form-control" id="productImage">
                </input>
            </div>
            <div className="form-group">
                <label htmlFor="productBrand">Brand</label>
                <input type="text" className="form-control" id="productBrand" placeholder="Adidas">
                </input>
            </div>
            <h5>Available Sizes:</h5>
            <div className="fom-group">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="Small"></input>
                    <label className="form-check-label" htmlFor="defaultCheck1">
                    Small
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="Medium"></input>
                    <label className="form-check-label" htmlFor="defaultCheck1">
                    Medium
                    </label>
                </div>
                <div>
                    <input className="form-check-input" type="checkbox" value="" id="Large"></input>
                    <label className="form-check-label" htmlFor="defaultCheck1">
                     Large
                    </label>
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="productCategory">Category</label>
                <input type="text" className="form-control" id="productCategory">
                </input>
            </div>
            <div className="form-group">
                <label htmlFor="productStyle">Style</label>
                <input type="text" className="form-control" id="productStyle">
                </input>
            </div>
            <div className="form-group">
                <label htmlFor="productColor">Color</label>
                <input type="text" className="form-control" id="productColor">
                </input>
            </div>
            <div className="form-group">
                <label htmlFor="productPrice">Price</label>
                <input type="text" className="form-control" id="productPrice">
                </input>
            </div>
            <div className="form-group">
                <label htmlFor="productDescription">Description</label>
                <textarea className="form-control" id="productDescription" rows="5"></textarea>
            </div>
            <div className="form-group">
                <label htmlFor="productStock">Quantity in stock</label>
                <input type="text" className="form-control" id="productStock">
                </input>
            </div>
            <button type="submit" className="btn btn-primary" onSubmit={() =>props.setView("home")}>Submit</button>
        </form>

    </>
    )
}

export default AddProductForm