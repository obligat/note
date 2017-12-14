import React from 'react';
import FlipMove from 'react-flip-move';

function Item(props, deleteItem) {
    return (<li key={props.key} onClick={() => deleteItem(props.key)}>
        {props.text}
    </li>);
}

export default class TodoItems extends React.Component {
    render() {
        let items = this.props.items.map(item => Item(item, this.props.delete));
        return (<ul className="theList">
            <FlipMove duration={250} easing="ease-out">
                {items}
            </FlipMove>
        </ul>)
    }
}