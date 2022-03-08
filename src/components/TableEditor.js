import { useDispatch } from "react-redux";
import { MARGINAL_TABLE, CONDITIONAL_TABLE, JOINT_TABLE } from '../redux/tableSlice';


const TableEditor = (props) => {

    const dispatch = useDispatch();
    const table = useSelector(state => state.tables.find(table => table.id === props.id));


    let header;
    let numCols;
    let numRows;
    if (table.type === CONDITIONAL_TABLE) {
        numCols = length(table.variable_ids) + 1;
        header = (
            <tr>
                
            </tr>
        );
    }

    return (
        <div className="TableEditor">
            <table className="TableEditor-table">
                <tbody>

                </tbody>
            </table>
        </div>
    );
}

export default TableEditor;