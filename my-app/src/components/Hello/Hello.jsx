import React,{Component} from "react";
import hello from "./hello.module.css"

class Hello extends Component{
  render(){
    console.log(hello)
    return(
      <div>
        <h1 className={hello.title}>hello react</h1>
      </div>
    )
  }
}
export default Hello;