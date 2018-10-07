import React, {PureComponent} from 'react';
import verbs from '../verbs'

var _ = require('underscore');

export default class VerbTest extends PureComponent {


  constructor(props) {
    super(props)

    this.snuffledVerbs = _.shuffle(verbs)

    this.state = {
     verb: this.snuffledVerbs.pop(),
     base: "",
     past: "",
     perfect: "",
     answers: []
    }
  }

  render(){
    return (
          <div>
            <p className="lead mx-auto w100">{this.state.verb.description}</p>
            <form>
              <div className="form-row">
                <div className="col">
                  <input type="text" className="form-control" placeholder="Base form" value= {this.state.base} onChange={this.updateBaseFormInputValue} />
                </div>
                <div className="col">
                  <input type="text" className="form-control" placeholder="Past form" value= {this.state.past} onChange={this.updatePastFormInputValue} />
                </div>
                <div className="col">
                  <input type="text" className="form-control" placeholder="Perfect form" value= {this.state.perfect} onChange={this.updatePerfectFormInputValue} />
                </div>
              </div>
              <div className="mt-3">
                <a className="btn btn-primary" role="button" onClick={this.nextStep} >
                  {this.state.finish ? "Finish test" : "Next step"} &raquo;
                </a>
              </div>
            </form>
          </div>

    )
  }

  updateBaseFormInputValue = (e) => {
    this.setState({
      base: e.target.value
    });
  }

  updatePastFormInputValue = (e) => {
    this.setState({
      past: e.target.value
    });
  }

  updatePerfectFormInputValue = (e) => {
    this.setState({
      perfect: e.target.value
    });
  }

  nextStep = () => {
    const answer = {
      verb: this.state.verb,
      base: _.isEmpty(this.state.base) ? 'N/A' : this.state.base,
      past: _.isEmpty(this.state.past) ? 'N/A' : this.state.past,
      perfect: _.isEmpty(this.state.perfect) ? 'N/A' : this.state.perfect
    }

    this.state.answers.push(answer);

    const verb = this.snuffledVerbs.pop()
    if (this.snuffledVerbs.length > 0){
      this.setState({
          verb: verb,
          base: "",
          past: "",
          perfect: "",
          answers: this.state.answers,
          finish: this.snuffledVerbs.length === 1 ? true : false
      });
    } else {
      this.props.updateData(true, this.state.answers);
    }

  }


}
