import React, {Component} from 'react';

import verbs from '../fixtures/verbs'

export default class PastForm extends Component {

  render(){
    const verbsPastFormElements = verbs.map((verb, index) =>
      <option key={'past'+verb.id} className="article-list__li" value={verb.past}>
          {verb.past}
      </option>
    )

    return (
        <select className="form-control" value={this.props.verb.past} onChange={this.handleChange}>
          <option>Past form</option>
          {verbsPastFormElements}
        </select>
      );
  }

  handleChange = (event) => {
    this.props.updateIrregularVerbData("past", event.target.value);
  };

}
