import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Context from './../context';

const styles = {
    padding: '.5rem 0',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
};

const ListItem = ( { todo, OnClick, index } ) => {
    const { removeTodo } = useContext(Context);
    return(
        <li className={ todo.completed ? 'done' : '' } style={ styles }>
            <button onClick={() => OnClick(todo.id)}>&#10003;</button>
            &nbsp;
            <span>{`${index + 1}. ${todo.title}`}</span>
            &nbsp;
            <button onClick={() => removeTodo(todo.id)}>&times;</button>
        </li>
    );
};

ListItem.propTypes = {
    todo: PropTypes.object.isRequired
};

export default ListItem;
