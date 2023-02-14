const Container = props => {
    <div className={`container ${props.className || ''}`}>
        {props.children}
    </div>
}

export default Container