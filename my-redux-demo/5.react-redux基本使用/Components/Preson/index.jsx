import React, {Component} from 'react';
import store from "../../Redux/store";
import {createAddPerson} from "../../Redux/actions/persons";

class Index extends Component {
    addPerson = () => {
        let name = this.name.value;
        let age = this.age.value;
        store.dispatch(createAddPerson({name, age}))
    }

    render() {
        return (
            <div>
                姓名:<input ref={c => this.name = c} type="text"/>
                <br/>
                年龄:<input ref={c => this.age = c} type="text"/>
                <br/>
                <button onClick={this.addPerson}>提交</button>
                <br/>
                <ul>
                    {
                        store.getState().person.map((item, index) => {
                            return (
                                <li key={index}>
                                    name:{item.name};age:{item.age}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default Index;