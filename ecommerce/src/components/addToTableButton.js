function AddToTableButton(props) {
    return (
    <div className="d-flex flex-row-reverse">
        <div className="p2">
            <button onClick={()=>props.setView("AddTableRow")}>
                <i className="bi bi-plus-circle-fill"></i>
            </button>
        </div>
    </div>)
}

export default AddToTableButton