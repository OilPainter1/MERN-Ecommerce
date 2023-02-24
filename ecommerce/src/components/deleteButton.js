function DeleteButton(props) {
    return (
    <div className="d-flex flex-row-reverse">
        <div className="p2">
            <button
             onClick={()=>console.log(props)}
             ><i className="bi bi-trash"></i></button>
        </div>
    </div>)
}

export default DeleteButton