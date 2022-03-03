import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove, update } from '../redux/variableSlice';

import GenericButton from "./GenericButton";

const VariableEditor = (props) => {

    const dispatch = useDispatch();

    const variable = useSelector(state => state.variables.find(variable => variable.id === props.id));

    const [varName, setVarName] = useState(variable.name);
    const [varDesc, setVarDesc] = useState(variable.description);

    let alerts = [];
    const saveVariable = () => {
        if (varName) {
            dispatch(update({ name: varName, description: varDesc, id: props.id }));
        } else {
            alerts.push(
                <div className="alert">
                    You need to name the variable before you can save it.
                </div>
            )
        }
    }

    const deleteVariable = () => {
        dispatch(remove({ id: props.id }));
    }

    let saveButton;
    if ((varName != variable.name || varDesc != variable.description) || !varName) {
        saveButton = <GenericButton onClick={saveVariable} text="Save Variable" />
    }

    return (
        <section>
            {alerts}
            <form className="variableEditor">
                <label>ID: {variable.id}</label><br/>
                <label>Variable name: </label><br/>
                <input 
                    type="text" 
                    value={varName}
                    placeholder={variable.name == "" ? "Y" : ""}
                    onChange={e => setVarName(e.target.value)} />
                <br/>
                <label>Description: </label><br/>
                <textarea 
                    type="text" 
                    value={varDesc}
                    placeholder={variable.name == "" ? "Russia invades Ukraine by ..." : ""}
                    onChange={e => setVarDesc(e.target.value)} />
            </form>
            <GenericButton onClick={deleteVariable} text="Delete Variable" />{saveButton}
        </section>
    );
}

export default VariableEditor;