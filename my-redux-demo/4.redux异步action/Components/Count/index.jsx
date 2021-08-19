import React, {Component} from 'react';
import store from "../../Redux/store";
import {createAdd,createSub,createAsyncAdd} from "../../Redux/count_action";
class Index extends Component {
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
        store.dispatch(createAdd(value*1))
    }
    sub = () => {
        let {value} = this.state;
        store.dispatch(createSub(value*1))
    }
    addOdd = () => {
        let {value} = this.state;
        if (value * 1 % 2 !== 0) {
            store.dispatch(createAdd(value*1))
        }
    }
    addAsync = () => {
        let {value} = this.state;
        store.dispatch(createAsyncAdd(value*1,500))
    }
    componentDidMount(){
        store.subscribe(()=>{
            this.setState({})
        })
    }
    render() {
        return (
            <div>
                <h1>当前求和值:{store.getState()} </h1>
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