import { useDispatch, useSelector } from "react-redux";
import { createVariable } from "../redux/variableSlice";
import GenericButton from "./GenericButton";
import VariableEditor from "./VariableEditor";

const VariableList = () => {

    const dispatch = useDispatch();

    const variables = useSelector(state => state.variables);

    const addVariable = () => {
        dispatch(createVariable())
    }

    return (
        <div className="VariableList">
            <GenericButton onClick = {addVariable} text = "create variable" />
            {variables.map((variable) => 
                <VariableEditor id={variable.id} key={variable.id} />
            )}
        </div>
    );
}

export default VariableList;