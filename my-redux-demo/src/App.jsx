import React, {Component} from "react";
import Count from "./Container/Count";
import Person from "./Container/Person";

class App extends Component {
    render() {
        return (
            <div>
                <Count></Count>
                <hr/>
                <Person></Person>
            </div>
        )
    }
}

export default App;