import React,{Component} from "react";
import welcome from "./welcome.module.css"

class Welcome extends Component{
  render(){
    return(
      <div>
        <h1 className={welcome.title}>hello react</h1>
      </div>
    )
  }
}
export default Welcome;