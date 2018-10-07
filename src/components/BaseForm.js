import React, {Component} from 'react';

import baseFormVerbs from '../base-forms'

export default class BaseForm extends Component {

  render(){
    const verbsBaseFormElements = baseFormVerbs.map((verb, index) =>
      <option key = {verb.id} className="article-list__li" value={verb.base}>
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
    this.props.updateData("base", event.target.value);
  };



}
