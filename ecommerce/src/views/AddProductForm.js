import { useMutation } from '@apollo/client';
import { ADD_PRODUCT } from '../utils/mutations';
import Footer from '../components/footer';
import { useState } from 'react';

// const name = document.getElementById("productName").value
// const image = document.getElementById("productImage").value
// const brand = document.getElementById("productBrand").value
// const size = document.getElementById("productSize").value
// const category = document.getElementById("productCategory").value
// const style = document.getElementById("productStyle").value
// const color = document.getElementById("productColor").value
// const price = document.getElementById("productPrice").value
// const description = document.getElementById("productDescription").value
// const stock = document.getElementById("productStock").value

function AddProductForm(props) {

    const [mutateFunction, { data, loading, error }] = useMutation(ADD_PRODUCT)
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [brand, setBrand] = useState("")
    const [size, setSize] = useState("")
    const [category, setCategory] = useState("")
    const [style, setStyle] = useState("")
    const [color, setColor] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const [stock, setStock] = useState("")

    return (
        <>
            <h2 className='container'>Add New Product</h2>
            <form className="container prodForm" id="addForm" onSubmit={(event) => {
                event.preventDefault()
                console.log(style, stock)
                mutateFunction({
                    variables: {
                        product: {
                            name: name,
                            image: image,
                            brand: brand,
                            sizes: [parseFloat(size)],
                            category: [category],
                            style: style,
                            color: [color],
                            price: parseFloat(price),
                            description: description,
                            quantityInStock: parseInt(stock)
                        }

                    }
                }
                )
                props.setView("home")
                console.log(style, stock)
                //props.setView("home")

                //const {name,image,brand,size,category,style,color,price,description,stock}

            }}>
                <div className="form-group">
                    <label htmlFor="productName">Name</label>
                    <input value={name} onChange={(event) => { setName(event.target.value) }} type="text" className="form-control" id="productName">
                    </input>
                </div>
                <div className="form-group">
                    <label htmlFor="productImage">Image Link</label>
                    <input required value={image} onChange={(event) => { setImage(event.target.value) }} type="text" className="form-control" id="productImage">
                    </input>
                </div>
                <div className="form-group">
                    <label htmlFor="productBrand">Brand</label>
                    <input type="text" onChange={(event) => { setBrand(event.target.value) }} className="form-control" id="productBrand">
                    </input>
                </div>
                <div className="form-group">
                    <label htmlFor="productSize">Sizes</label>
                    <input type="text" onChange={(event) => { setSize(event.target.value) }} className="form-control" id="productSizes">
                    </input>
                </div>
                <div className="form-group">
                    <label htmlFor="productCategory">Category</label>
                    <input type="text" onChange={(event) => { setCategory(event.target.value) }} className="form-control" id="productCategory">
                    </input>
                </div>
                <div className="form-group">
                    <label htmlFor="productStyle">Style</label>
                    <input type="text" onChange={(event) => { setStyle(event.target.value) }} className="form-control" id="productStyle">
                    </input>
                </div>
                <div className="form-group">
                    <label htmlFor="productColor">Color</label>
                    <input type="text" onChange={(event) => { setColor(event.target.value) }} className="form-control" id="productColor">
                    </input>
                </div>
                <div className="form-group">
                    <label htmlFor="productPrice">Price</label>
                    <input type="text" onChange={(event) => { setPrice(event.target.value) }} className="form-control" id="productPrice">
                    </input>
                </div>
                <div className="form-group">
                    <label htmlFor="productDescription">Description</label>
                    <textarea onChange={(event) => { setDescription(event.target.value) }} className="form-control" id="productDescription" rows="5"></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="productStock">Quantity in stock</label>
                    <input type="text" onChange={(event) => { setStock(event.target.value) }} className="form-control" id="productStock">
                    </input>
                </div>
                <button type="submit" className="btn btn-primary" >Submit</button>
            </form>

        </>
    )
}

export default AddProductForm