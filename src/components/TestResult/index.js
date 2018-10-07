import React, {PureComponent} from 'react';
import './style.css'

export default class TestResult extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      showIrregularVerb: true,
      showTestResult: false,
      answers: []
    }
  }

  isCorrect(answer){
    return answer.base === answer.verb.base
      && answer.past === answer.verb.past
      && answer.perfect === answer.verb.perfect
  }

  render(){
    var self = this;
    const answers = this.props.answers.map((answer, index) =>
      <div
        className={self.isCorrect(answer) ? 'row text-success' : 'row text-danger'}
        key={answer.verb.id} >
          <div className="col-md-4">{answer.base}</div>
          <div className="col-md-4">{answer.past}</div>
          <div className="col-md-4">{answer.perfect}</div>
      </div>
    )

    return (
          <div className="container">
            <p className="lead"></p>
            <h4>Test results</h4>
            <p>Please review test results with correct and incorrect answers.</p>
            {answers}
          </div>
        );

  }
}
