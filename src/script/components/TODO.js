import React from 'react';

const list = [];

class TODO extends React.Component {
    constructor(props) {
        super(props);
        this.state = {todo: ''};
    }

    handleChange(value) {
        this.setState({todo: value});
        console.log(value);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({todo: ''})
    }

    listItems(item) {
        list.push(item);
    }

    render() {
        return(
            <div>
                <h1>
                    This is NOT TODO list
                </h1>
                <form onSubmit={(e) => {
                    this.listItems(this.state.todo)
                    this.handleSubmit(e)
                }}>
                    <input
                        value={this.state.todo} 
                        onChange={(e) => {
                            this.handleChange(e.target.value)
                            
                        }}
                    >
                    </input>
                    <button type>add task</button>
                    <ul>
                        {list.map((listItem) => {
                            return <li key={listItem}>{listItem}</li>;
                        })}
                    </ul>
                </form>
            </div>
        );
    }
}

export default TODO;