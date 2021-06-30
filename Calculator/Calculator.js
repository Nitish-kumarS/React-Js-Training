import { Component } from 'react';
import { connect } from 'react-redux';
import {ADDOne,MUL,DIV,SUBOne, ALL} from './Calculatoraction';
import {PersistGate} from 'redux-persist/es/integration/react'

class Calculator extends Component{
  
   render() {
        return (
             <div className="Calculator">
                 <label>Value:{this.props.value}</label><br/>
                 <input type="button" onClick={this.props.ADDOne} value="Add"/>
                 <input type="button"onClick={this.props.SUBOne} value="sub"/>
                 <input type="button"onClick={this.props.MUL} value="Mul"/>
                 <input type="button" onClick={this.props.DIV} value="div"/>
                 <input type="button" onClick={this.props.ALL} value="All"/> 
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
        DIV : ()=>dispatch(DIV()) ,
        ALL :   ()=>dispatch(ALL())
    }
}
export default connect(
    mapStateToProps,
    mapDispatchtoProps   
)(Calculator);