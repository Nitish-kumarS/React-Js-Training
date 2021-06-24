import { Component } from 'react';
import { connect } from 'react-redux';
import {ADDOne,MUL,DIV,SUBOne} from './Calculator/Calculatoraction';
 class Calculator extends Component{
    constructor(props){
        super(props);
    }
    render() {
        return (
             <div className="Calculator">
                 <label>Value:{this.props.value}</label><br/>
                 <input type="button" onClick={this.props.ADDOne} value="Add"/>
                 <input type="button"onClick={this.props.SUBOne} value="sub"/>
                 <input type="button"onClick={this.props.MUL} value="Mul"/>
                 <input type="button" onClick={this.props.DIV} value="div"/>
             </div>
        );
    }
}
const mapStateToProps= state =>{
    return {
        value: state.value
    }
}
const mapDispatchtoProps =dispatch =>{
    return {
        ADDOne: ()=>dispatch(ADDOne()),
        SUBOne: ()=>dispatch(SUBOne()),
        MUL: ()=>dispatch(MUL()),
        DIV : ()=>dispatch(DIV())   
    }
}
export default connect(
    mapStateToProps,
    mapDispatchtoProps   
)(Calculator);