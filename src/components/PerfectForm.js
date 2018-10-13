import React, {Component} from 'react';

import verbs from '../fixtures/verbs'

export default class PerfectForm extends Component {

  render(){
    const verbsPerfectFormElements = verbs.map((verb, index) =>
      <option key = {'perfect'+verb.id} className="article-list__li" value={verb.perfect}>
        {verb.perfect}
      </option>
    )

    return (
        <select className="form-control" value={this.props.verb.perfect} onChange={this.handleChange}>
          <option>Perfect form</option>
          {verbsPerfectFormElements}
        </select>
      );
  }

  handleChange = (event) => {
    this.props.updateIrregularVerbData("perfect", event.target.value);
  }

}
