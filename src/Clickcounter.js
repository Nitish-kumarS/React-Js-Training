/* eslint-disable no-useless-constructor */
import { Component } from "react";
import withCounter from './UpdatedComponent';
class Clickcounter extends Component{
    constructor(props){
        super(props);
    }
    render() {
        const {count,Incrementcount}=this.props;
        return (
             <div>
                 <button onClick={Incrementcount}>Clicked {count} Times</button>
              </div>
        );
    }
}

export default withCounter(Clickcounter);