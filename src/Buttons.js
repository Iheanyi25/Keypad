import React from "react";
import Screen from './Screen';
import "./Body.css";


class Buttons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: []
        };
    }

    handleClick(e){
        let currentstate = this.state.value;
        if(typeof e === "number"){
            currentstate.push(e)
            this.setState({
                value: currentstate
            })
        }else if(e === "BS"){
            currentstate.pop();
            this.setState({
                value: currentstate
            })
        }else if(e === 'OK'){
            alert(currentstate)
        }
    }

    render(){
        return (
            <div>
                <Screen output={this.state.value} />
                <div className="button-main">
                    <div className = "button-col">
                        {this.props.numberOut.map((current)=>{
                            return <div key={current} onClick={this.handleClick.bind(this, current)}>{current}</div>
                        })}
                    </div>
                </div>
            </div>
           
            
        )
    }

}

export default Buttons;