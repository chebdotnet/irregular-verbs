import React, {Component} from 'react';

import verbs from '../fixtures/verbs'

export default class BaseForm extends Component {

  render(){    
    const verbsBaseFormElements = verbs.map((verb, index) =>
      <option key = {'base'+verb.id} className="article-list__li" value={verb.base}>
        {verb.base}
      </option>
    )

    return (
        <select className="form-control" value={this.props.verb.base} onChange={this.handleChange}>
          <option value="Select">Base form</option>
          {verbsBaseFormElements}
        </select>
      )
  };

  handleChange = (event) => {
    this.props.updateIrregularVerbData("base", event.target.value);
  };



}
