import React, {PureComponent} from 'react';
import IrregularVerb from './IrregularVerb'
import VerbTest from './VerbTest'
import TestResult from './TestResult'


import 'bootstrap/dist/css/bootstrap.min.css'

var _ = require('underscore');

class App extends PureComponent {

  constructor(props) {
    super(props)
    this.state = {
      showIrregularVerb: true,
      showTestResult: false,
      answers: []
    }
  }

  render () {
    return (
      <main role="main" className="container">
        <div className="jumbotron">          
          <h1>Irregular verbs</h1>
          <p className="lead">This example is a quick exercise to check out skills for irregular verbs in English.</p>
          {this.state.showIrregularVerb ? <IrregularVerb updateData={this.updateData} /> : <VerbTest updateData={this.updateData} /> }
          {this.state.showTestResult ? <TestResult answers={this.state.answers} /> : null}
        </div>
      </main>
    );
  }

  updateData = (value, answers) => {
    this.setState({
      showIrregularVerb: value,
      showTestResult: !_.isUndefined(answers),
      answers: answers
    })
  }

}

export default App
