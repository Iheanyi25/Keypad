import React from "react";
// import "./Body.css";

class Screen extends React.Component {
    render(){
        return (<div className="screen">{this.props.output}
            </div>)
    }

}

export default Screen;