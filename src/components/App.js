import React, {PureComponent} from 'react';

import IrregularVerb from './IrregularVerb'
import VerbTest from './VerbTest'
import StartTest from './StartTest'
import FinishTest from './FinishTest'

import 'bootstrap/dist/css/bootstrap.min.css'

class App extends PureComponent {

  constructor(props) {
    super(props)
    this.state = {
      showIrregularVerb: true
    }
  }

  render () {
    return (
      <main role="main" className="container">
        <div className="jumbotron">
          <h1>Irregular verbs</h1>
          <p className="lead">This example is a quick exercise to check out skills for irregular verbs in English.</p>
          {this.state.showIrregularVerb ? <IrregularVerb /> : null}
          {this.state.showIrregularVerb ? null: <VerbTest/>}

          {this.state.showIrregularVerb ? <StartTest updateData={this.updateData}/> : null}
          {this.state.showIrregularVerb ? null: <FinishTest updateData={this.updateData}/>}
        </div>
      </main>
    );
  }

  updateData = (value) => {
    this.setState({
      showIrregularVerb: value
    })
  }

}

export default App
