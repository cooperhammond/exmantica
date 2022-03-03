const GenericButton = (props) => {

    return (
        <button 
            onClick={props.onClick}
            className={`generic-button ${props.className ? props.className : ''}`}
        >
            {props.text}
        </button>
    );
}

export default GenericButton;