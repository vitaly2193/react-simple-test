import React, { useEffect } from 'react';
import TodoList from './TodoList';
import Context from './context';
import Loader from './Loader';
import Modal from './Modal';

const AddTodo = React.lazy(() => import('./TodoList/AddTodo'));

function App() {
  const [TodosList, SetTodosList] = React.useState([]);
  const [Loading, SetLoading] = React.useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=15')
      .then(response => response.json())
        .then((todos) => {
          SetTodosList(todos);
          SetLoading(false);
        });
  }, []);

  const OnClick = (id) => {
    SetTodosList(TodosList.map((todo) => {
      if (todo.id === id) {
        todo.completed = ! todo.completed;
      }
      return todo;
    }));
  };

  const removeTodo = (id) => {
    SetTodosList(TodosList.filter(todo => todo.id !== id))
  };

  const addTodo = (title) => {
    SetTodosList(
      TodosList.concat([{ id: Date.now(), completed: false, title }])
    )
  };

  return (
    <Context.Provider value={ { removeTodo } }>
      <div className='wrapper'>
        <h1>React Test</h1>
        {Loading && <Loader />}
        { ! TodosList.length ? Loading ? null : <h3>List is empty.</h3> : <TodoList todos={ TodosList } OnClick={ OnClick } /> }
        <hr />
        <React.Suspense fallback={<Loader />}>
          <AddTodo onCreate={ addTodo } />
        </React.Suspense>
        <Modal />
      </div>
    </Context.Provider>
  );
}

export default App;
