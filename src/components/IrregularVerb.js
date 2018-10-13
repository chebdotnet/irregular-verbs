import React, {PureComponent} from 'react';
import BaseForm from './BaseForm'
import PastForm from './PastForm'
import PerfectForm from './PerfectForm'
import StartTest from './StartTest'
import verbs from '../fixtures/verbs'

var _ = require('underscore');

export default class IrregularVerb extends PureComponent {

  constructor(props) {
    super(props)
    this.state = {
      verb:{
        base: "",
        past: "",
        perfect: ""
      }
    }
  }

  findElement(type, value){
    let el = null
    verbs.forEach(function(element) {
      if(element[type] === value){
        el = element;
      }
    });
    return el;
  }

  updateIrregularVerbData = (type, value) => {
     const element = this.findElement(type, value);
     if (!_.isNull(element)){
       this.setState({
         verb:{
           base: element.base,
           past: element.past,
           perfect: element.perfect
         }
       });
     }
  }

  render(){
    return (
      <div className="container">
        <div className="form-row">
          <div className="col">
            <BaseForm verb={this.state.verb} updateIrregularVerbData={this.updateIrregularVerbData} />
          </div>
          <div className="col">
            <PastForm verb={this.state.verb} updateIrregularVerbData={this.updateIrregularVerbData} />
          </div>
          <div className="col">
            <PerfectForm verb={this.state.verb} updateIrregularVerbData={this.updateIrregularVerbData} />
          </div>
          <p className="lead" />
        </div>
        <StartTest startTest={this.props.startTest} />
      </div>
    )
  }


}
