import React from "react";
import "../styles/GenericTable.css";

class MutableTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            variableNames: Array(props.numVars).fill(null)
        }

        this.varNameChange = this.varNameChange.bind(this);
    }

    varNameChange(event, index) {
        let newVarNames = [...this.state.variableNames];
        newVarNames[index] = event.target.value;
        
        this.setState({variableNames: newVarNames})
    }

    render() {
        return (
            <table>
                <tbody>
                    <tr>
                        {Array(this.props.numVars).fill(null).map((item, index) =>
                            <th key={index}>
                                <input 
                                    type="text"
                                    index={index}
                                    value={this.state.variableNames[index] || ''}
                                    onChange={event => this.varNameChange(event, index)} />
                            </th>
                        )}
                        <th>P(X)</th>
                    </tr>
                    {Array(this.props.numVars).fill(null).map((item, index) => [
                        <tr key={index}>
                            <td>
                                +{this.state.variableNames[index] || ''}
                            </td>
                            <td>
                                <input 
                                    type="number"
                                    min={0}
                                    max={1}
                                    step={.001}/>
                            </td>
                        </tr>,
                        <tr key={this.props.numVars + index}>
                            <td>
                                -{this.state.variableNames[index] || ''}
                            </td>
                            <td>
                                <input 
                                    type="number"
                                    min={0}
                                    max={1}
                                    step={.001}/>
                            </td>
                        </tr>
                    ])}
                </tbody>
            </table>
        )
    }
}

export default MutableTable;