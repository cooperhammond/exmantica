import { useDispatch, useSelector } from "react-redux";
import { createTable } from "../redux/tableSlice";
import { MARGINAL_TABLE, CONDITIONAL_TABLE, JOINT_TABLE } from "../redux/tableSlice";
import GenericButton from "./GenericButton";

const TableList = () => {

    const dispatch = useDispatch();
    const tables = useSelector(state => state.tables);

    const addConditionalTable = () => {
        dispatch(createTable(CONDITIONAL_TABLE));
    }

    return (
        <div className="VariableList">
            <GenericButton onClick = {addConditionalTable} text = "create new conditional table" />
            {/* <GenericButton onClick = {addVariable} text = "create variable" /> */}
            {/* <GenericButton onClick = {addVariable} text = "create variable" /> */}

            {/* {tables.map((table) => 
                <TableEditor id={table.id} key={table.id} />
            )} */}
        </div>
    );
}

export default TableList;