import React, {Component} from 'react';

import perfectFormVerbs from '../perfect-forms'

export default class PerfectForm extends Component {

  render(){
    const verbsPerfectFormElements = perfectFormVerbs.map((verb, index) =>
      <option key = {verb.id} className="article-list__li" value={verb.perfect}>
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
    this.props.updateData("perfect", event.target.value);
  }

}
