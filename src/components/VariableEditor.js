import { nanoid } from "@reduxjs/toolkit";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeVariable, updateVariable } from '../redux/variableSlice';

import GenericButton from "./GenericButton";

const VariableEditor = (props) => {

    const dispatch = useDispatch();

    const variable = useSelector(state => state.variables.find(variable => variable.id === props.id));

    const [varName, setVarName] = useState(variable.name);
    const [varDesc, setVarDesc] = useState(variable.description);
    const [alerts, setAlerts] = useState({}); // the alerts object is not an array so as to prevent duplicates

    const saveVariable = () => {
        if (varName) {
            dispatch(updateVariable({ name: varName, description: varDesc, id: props.id }));
            setAlerts([]);
        } else {
            setAlerts({...alerts, 
                nameTheVar: (<div className="alert" key={nanoid()}>
                                You need to name the variable before you can save it.
                            </div>)
            });
        }
    }

    const deleteVariable = () => {
        dispatch(removeVariable({ id: props.id }));
    }

    let saveButton;
    if ((varName !== variable.name || varDesc !== variable.description) || !varName) {
        saveButton = <GenericButton onClick={saveVariable} text="Save Variable" />
    }

    return (
        <section className="VariableEditor">
            {/* TODO: convert alerts to its own function */}
            {Object.values(alerts)}
            <form className="VariableEditor-form">
                <label>ID: {variable.id}</label><br/>
                <label>Variable name: </label><br/>
                <input 
                    type="text" 
                    value={varName}
                    placeholder={variable.name === "" ? "Y" : ""}
                    onChange={e => setVarName(e.target.value)} />
                <br/>
                <label>Description: </label><br/>
                <textarea 
                    type="text" 
                    value={varDesc}
                    placeholder={variable.name === "" ? "Russia invades Ukraine by ..." : ""}
                    onChange={e => setVarDesc(e.target.value)} />
            </form>
            <GenericButton onClick={deleteVariable} text="Delete Variable" />
            {saveButton}
        </section>
    );
}

export default VariableEditor;