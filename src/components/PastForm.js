import React, {Component} from 'react';

import pastFormVerbs from '../past-forms'

export default class PastForm extends Component {

  render(){
    const verbsPastFormElements = pastFormVerbs.map((verb, index) =>
      <option key={verb.id} className="article-list__li" value={verb.past}>
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
    this.props.updateData("past", event.target.value);
  };

}
