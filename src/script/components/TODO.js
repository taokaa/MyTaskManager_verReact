import React from 'react';

const list = [];
let ID = 0;

class TODO extends React.Component {
    constructor(props) {
        super(props);
        this.state = {id: '', value: ''};
    }

    handleChange(Value) {
        this.setState({id: ID, value: Value});
        console.log('handleChange'+ID+Value);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({id: '', value: ''});
        ID++;
    }

    listItems(object) {
        list.push(object);
        console.log(list);
    }

    render() {
        return(
            <div>
                <h1>
                    This is ONLY ADD TODO list
                </h1>
                <form onSubmit={(e) => {
                    this.listItems(this.state)
                    console.log(this.state)
                    this.handleSubmit(e)
                }}>
                    <input
                        value={this.state.value} 
                        onChange={(e) => {
                            this.handleChange(e.target.value)
                        }}
                    >
                    </input>
                    <button type>add task</button>
                    <ul>
                        {list.map((listItem) => {
                            return <li key={listItem.id}>{listItem.value}</li>;
                        })}
                    </ul>
                </form>
            </div>
        );
    }
}

export default TODO;