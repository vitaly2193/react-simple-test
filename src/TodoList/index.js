import React from 'react';
import ListItem from './ListItem.js';
import PropTypes from 'prop-types';

const styles = {
    listStyle: 'none',
    paddingLeft: '0',
};

const TodoList = ( props ) => {
    const { todos, OnClick } = props;

    return(
        <ul className="todo-list" style={ styles }>
            { todos.map((todo, index) => {
                return(<ListItem todo={ todo } index={ index } key={ todo.id } OnClick={ OnClick } />);
            }) }
        </ul>
    );
};

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default TodoList;
