import React, {Component} from "react";
import Count from "./Container/Count"
import Person from "./Components/Preson"
import store from "./Redux/store";

class App extends Component {
    render() {
        return (
            <div>
                <Count store={store}></Count>
                <hr/>
                <Person></Person>
            </div>
        )
    }
}

export default App;