import PlusIcon from "./plus-icon"
import { Button } from 'react-bootstrap';

function TableBlock(props) {

    if (props.isFirstTableRow) {

        return (
            <>
            
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col"></th>
                    <th scope="col">SKU</th>
                    <th scope="col">Brand</th>
                    <th scope="col">Item Name</th>
                    <th scope="col">Color</th>
                    <th scope="col">Price</th>
                    <th scope="col">QOH</th>
                    <th scope="col">Add to QOH</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">{props.image}</th>
                        <td>{props.sku}</td>
                        <td>{props.brand}</td>
                        <td>{props.name}</td>
                        <td>{props.color}</td>
                        <td>{props.price}</td>
                        <td>{props.quantityInStock}</td>
                        <td><PlusIcon>
                            </PlusIcon>
                        </td>

                    </tr>
                </tbody>
            </table>
           </> 
        )
    }else
    return (
        
        <table className="table">
            <tbody>
                <tr>
                    <th scope="row">{props.image}</th>
                    <td>{props.sku}</td>
                    <td>{props.brand}</td>
                    <td>{props.name}</td>
                    <td>{props.color}</td>
                    <td>{props.price}</td>
                    <td>{props.quantityInStock}</td>
                    <td><PlusIcon>
                        </PlusIcon>
                    </td>
                   
                </tr>
            </tbody>
        </table>
    )
}

export default TableBlock