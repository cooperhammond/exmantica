import '../styles/App.css';
import QueryBuilder from './QueryBuilder';
import TableList from './TableList';
import VariableList from './VariableList';

function App()  {

    return (
        <div className="App">
            <div className="app-column">
                <VariableList />
            </div>
            
            <div className="app-column">
                <TableList />
                <QueryBuilder />
            </div>
        </div>
    );
}

export default App;
