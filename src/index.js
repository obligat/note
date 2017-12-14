import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

import TodoList from './components/TodoList';


ReactDom.render(<div>
    <TodoList/>
</div>, document.getElementById("container"));