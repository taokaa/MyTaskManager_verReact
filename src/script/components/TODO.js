import React from 'react';

let list = [];
let currentList = [];
let finishedList = [];
let Index = 0;

class TODO extends React.Component {
    constructor(props) {
        super(props);
        this.state = {index: '', value: ''};
    }

    handleChange(value) {
        this.setState({index: Index, value: value});
        console.log('handleChange'+Index+value);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({ndex: '', value: ''});
        Index++;
    }

    listItems(object) {
        list.push(object);
        currentList.push(object);
    }

    FinishedButton(index, value) {
        this.setState({index: Index, value: this.state.value});
        finishedList.push({index: index, value: value})
        currentList = currentList.filter((item) => {
            return item.index !== index;
        });
        console.log('list: '+list);
        console.log('currentList: ' + currentList);
        console.log('finishedList: ' + finishedList);
    }

    render() {
        return(
            <div>
                <h1>
                    This is TODO list
                </h1>
                <form onSubmit={(e) => {
                    e.preventDefault()
                    if (this.state.value) {
                        this.listItems(this.state)
                        console.log(this.state)
                        this.handleSubmit(e)    
                    }
                }}>
                    <input
                        value={this.state.value} 
                        onChange={(e) => {
                            this.handleChange(e.target.value)
                        }}
                    >
                    </input>
                    <button type='submit'>add task</button>
                </form>
                <h2>Current Tasks</h2>
                <ul>
                    {currentList.map((listItem) => {
                        return (
                            <React.Fragment>
                                <li key={listItem.index}>{listItem.value}</li>
                                <button onClick={() => {
                                    console.log('button: ' + listItem.index)
                                    this.FinishedButton(listItem.index, listItem.value)
                                }
                                }>
                                    finish!!
                                </button>
                            </React.Fragment>
                        )
                    })} 
                </ul>
                <h2>Finised Tasks</h2>
                <ul>
                    {finishedList.map((listItem) => {
                        return (<li key={listItem.index}>{listItem.value}</li>)
                    })}  
                </ul>
                
            </div>
        );
    }
}

export default TODO;