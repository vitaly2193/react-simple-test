import React, { useState } from 'react';

const useInputValue = (defaultValue = '') => {
    const [value, SetValue] = useState(defaultValue);
    return {
        bind: {
            value,
            onChange: (e) => SetValue(e.target.value),
        },
        clear: () => SetValue(''),
        value: () => value,
    };
};

const AddTodoItem = ( { onCreate } ) => {
    const input = useInputValue('');
    const submitHandler = (e) => {
        e.preventDefault();

        if (input.value().trim()) {
            onCreate(input.value());
            input.clear();
        }
    };
    return(
        <form onSubmit={ submitHandler }>
            <input {...input.bind}></input>&nbsp;&nbsp;
            <button type="submit">Add todo</button>
        </form>
    );
};

export default AddTodoItem;
