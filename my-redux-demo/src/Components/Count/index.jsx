import React, {Component} from 'react';

class Index extends Component {
    state = {
        count: 0,
        value: 1,
    }
    saveValue = (event) => {
        let newValue = event.target.value;
        this.setState({
            value: newValue
        })
        event.preventDefault();
    }
    add = () => {
        let {count, value} = this.state;
        this.setState({
            count: count + value * 1
        })
    }
    sub = () => {
        let {count, value} = this.state;
        this.setState({
            count: count - value * 1
        })
    }
    addOdd = () => {
        let {count, value} = this.state;
        if (value*1 % 2 !== 0) {
            this.setState({
                count: count + value * 1
            })
        }
    }
    addAsync = () => {
        let {count, value} = this.state;
        setTimeout(() => {
            this.setState({
                count: count + value * 1
            })
        }, 1000)
    }

    render() {
        return (
            <div>
                <h1>当前求和值:{this.state.count} </h1>
                <select value={this.state.value} onChange={this.saveValue}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <button onClick={this.add}>+</button>
                <button onClick={this.sub}>-</button>
                <button onClick={this.addOdd}>加奇数</button>
                <button onClick={this.addAsync}>异步加</button>
            </div>
        );
    }
}

export default Index;