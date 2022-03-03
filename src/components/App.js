import GenericButton from './GenericButton';
import '../styles/App.css';
import MutableTable from './MutableTable';
import VariableEditor from './VariableEditor'
import { useDispatch, useSelector } from 'react-redux';
import { create } from '../redux/variableSlice';

function App()  {

    const dispatch = useDispatch();

    const variables = useSelector(state => state.variables);

    const addVariable = () => {
        dispatch(create())
    }

    return (
        <div className="App">
            <GenericButton onClick = {addVariable} text = "create variable" />
            {/* TODO: Change this into its own component VariableList or something */}
            {variables.map((variable) => 
                <VariableEditor id={variable.id} key={variable.id} />
            )}
            {/* <MutableTable numVars={1} /> */}
        </div>
    );
}

export default App;
