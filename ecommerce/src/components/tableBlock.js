import PlusIcon from "./plus-icon"
function TableBlock(props) {

    if (props.isFirstTableRow) {

        return (
            <>
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">SKU</th>
                    <th scope="col">Item Name</th>
                    <th scope="col">Image</th>
                    <th scope="col">Price</th>
                    <th scope="col">QOH</th>
                    <th scope="col">Add to QOH</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">{props.sku}</th>
                        <td>{props.name}</td>
                        <td>{props.image}</td>
                        <td>{props.price}</td>
                        <td>
                            QOH
                        </td>
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
                    <th scope="row">{props.sku}</th>
                    <td>{props.name}</td>
                    <td>{props.image}</td>
                    <td>{props.price}</td>
                    <td>
                        QOH
                    </td>
                    <td><PlusIcon>
                        </PlusIcon>
                    </td>
                   
                </tr>
            </tbody>
        </table>
    )
}

export default TableBlock