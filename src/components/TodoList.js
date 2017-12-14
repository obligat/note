import React from 'react';
import TodoItems from './TodoItems';

export default class TodoList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: JSON.parse(localStorage.getItem("note-items")) || [],
        };
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    addItem(e) {
        let items = this.state.items;
        let input = this.refs.input.value;
        if (input) {
            items.unshift({
                text: input,
                key: Date.now(),
            });

            this.setState({items});
            this.refs.input.value = '';
        }

        localStorage.setItem("note-items", JSON.stringify(this.state.items));

        e.preventDefault();
    }

    deleteItem(key) {
        let filtedItems = this.state.items.filter(item => item.key !== key);

        this.setState({
            items: filtedItems,
        });

        localStorage.setItem("note-items", JSON.stringify(this.state.items));
    }

    render() {
        return (
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.addItem}>
                        <input type="text" ref="input" placeholder="input task"/>
                        <button type="submit">add</button>
                    </form>
                    <TodoItems items={this.state.items}
                               delete={this.deleteItem}/>
                </div>
            </div>
        );
    }
}