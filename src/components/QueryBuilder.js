import { useSelector } from "react-redux";
import Autosuggest from 'react-autosuggest';
import { useState } from "react";

const QueryBuilder = (props) => {
    // needs to account for complement, 'or', 'and', '|',
    const getSuggestions = (input, variables) => {
        let inputClean = input.trim();
        const thingsToSplitOn = ["|", "and", "or", "(", ")", ...variables.map(v => v.name)];
        const splitChar = "%$%";
        for (let i = 0; i < thingsToSplitOn.length; i++) {
            const splitMatch = thingsToSplitOn[i];
            inputClean = inputClean
                .split(splitMatch)
                .join(splitChar + splitMatch + splitChar);
        }
        inputClean = inputClean
            .split(splitChar)
            .map(e => e.trim())
            .filter(e => e);

        console.log(inputClean);

        const completeMe = inputClean[inputClean.length - 1];
        const restOfTheQuery = inputClean.slice(0, inputClean.length - 1);

        return variables.filter(variable => 
                variable.name.toLowerCase().startsWith(completeMe.toLowerCase())
            ).map(variable => {
                return {
                    ...variable,
                    newQuery: [...restOfTheQuery, variable.name].join(" ")
                };
            });
    };

    const variables = useSelector(state => state.variables);
    const [queryValue, updateQueryValue] = useState('');
    const [suggestions, updateSuggestions] = useState([]);

    const getSuggestionValue = suggestion => suggestion.newQuery;
    const renderSuggestion = suggestion => <div>{suggestion.name}</div>;
    const refreshSuggestions = ({ value }) => updateSuggestions(getSuggestions(value, variables));
    const clearSuggestions = () => updateSuggestions([]);
    const updateInput = (event, { newValue }) => updateQueryValue(newValue);

    return (
        <div className="QueryBuilder">
            <Autosuggest
                suggestions={suggestions || []}
                onSuggestionsFetchRequested={refreshSuggestions}
                onSuggestionsClearRequested={clearSuggestions}
                getSuggestionValue={getSuggestionValue}
                renderSuggestion={renderSuggestion}
                inputProps={{
                    value: queryValue, 
                    onChange: updateInput
                }}
            />
        </div>
    );
};

export default QueryBuilder;