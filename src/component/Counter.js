import React, { Component } from 'react'

export default class Counter extends Component {

    constructor(props){
        super(props)
       this.state ={
           value:0
       }
    }

    inc=()=>{
        this.setState({
            value:this.state.value+1
        })
    }

    res=()=>{
        let k=0;
        this.setState({
         value:k
        })
    }

    dec=()=>{
        this.setState({
            value:this.state.value-1
        })
    }

    render() {

        const styles = {
            fontSize:"100px",
            color:"red",
            fontFamily:"chiller"
        }

        const incbt = {
            height:"50px",
            width:"100px",
            fontSize:"40px",
            backgroundColor:"orange",
            borderRadius:"5px"
        }

        const resbt = {
            height:"50px",
            width:"100px",
            fontSize:"40px",
            backgroundColor:"yellow",
            borderRadius:"5px"
        }

        const decbt = {
            height:"50px",
            width:"100px",
            fontSize:"40px",
            backgroundColor:"purple",
            borderRadius:"5px"
        }

        const b={
                    backgroundColor:"grey",
                    width:"600px",
                    marginLeft:"450px",
                    marginTop:"200px"
        }


        return (
            <div className="container" style={b} >
                 <h1 style={styles}> Your count is : <br/> {this.state.value}</h1>
                 <button style={incbt} onClick={this.inc}>+</button>
                 <button style={resbt} onClick={this.res}>reset</button>
                 <button style={decbt} onClick={this.dec}>-</button>
            </div>
        )
    }
}
