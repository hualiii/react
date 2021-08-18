import React from "react";
import Hello from "./components/Hello/Hello";
import Welcome from "./components/Welcome/Welcome";
class App extends React.Component {
  render() {
    return (
      <div>
        <Hello />
        <Welcome />
      </div>
    )
  }
}
export default App