import PlusIcon from "./plus-icon"
function TableBlock(props) {
    return (
        <table className="table">
            <tbody>
                <tr>
                    <th scope="row">{props.sku}</th>
                    <td>{props.name}</td>
                    <td>{props.image}</td>
                    <td><PlusIcon>
                        </PlusIcon>
                    </td>
                    <td>
                        QOH
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default TableBlock