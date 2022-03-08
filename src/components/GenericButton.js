const GenericButton = (props) => {

    return (
        <button 
            onClick={props.onClick}
            className={`GenericButton ${props.className ? props.className : ''}`}
        >
            {props.text}
        </button>
    );
}

export default GenericButton;