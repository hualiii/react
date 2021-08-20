import React, {Component} from 'react';
import {connect} from "react-redux";
import {createAddPersonAction} from "../../Redux/actions/persons";

class Person extends Component {
    addPerson = () => {
        let name = this.name.value;
        let age = this.age.value;
        this.props.add({name, age})
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
                        this.props.person.map((item, index) => {
                            return (<li key={index}>name:{item.name};age:{item.age}</li>)
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default connect(state => ({person: state.person}), {add: createAddPersonAction})(Person);