import {connect} from "react-redux";
import React, {Component} from 'react';
import {createAdd, createSub, createAsyncAdd} from "../../Redux/actions/count"

class CountUI extends Component {
    state = {
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
        let {value} = this.state;
        this.props.add(value)
    }
    sub = () => {
        let {value} = this.state;
        this.props.sub(value)
    }
    addOdd = () => {
        let {value} = this.state;
        if (value * 1 % 2 !== 0) {
            this.props.add(value)
        }
    }
    addAsync = () => {
        let {value} = this.state;
        this.props.addAsync(value, 500)
    }

    render() {
        return (
            <div>
                <h1>当前求和值: {this.props.count} </h1>
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

const countContainer = connect(state => ({count: state.count}), {
    add: createAdd,
    sub: createSub,
    addAsync: createAsyncAdd
})(CountUI);

export default countContainer;