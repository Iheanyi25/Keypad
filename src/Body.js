import React from "react";
import "./Body.css";

import Button from './Buttons';


class Body extends React.Component {
    
    render(){
        let numberOut = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'BS', 0, 'OK'];
        return (<div className="body">
                    <Button numberOut={numberOut} />
            </div>)
    }
}

export default Body;