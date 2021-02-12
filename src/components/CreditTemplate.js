import React, { Component } from 'react'; // grab ability to use react & component class

class CreditTemplate extends Component {

// parse out credit types
state = {
  name: this.props.credit.name,
  role: this.props.credit.role,
  bio: this.props.credit.bio,
  cast: this.props.credit.cast
}


render() {

    const castStatus = this.props.credit.cast === true? <i>(Cast Member)</i> : <i>(Crew / Production Team)</i>

  return (
    <div>

        <h3>{this.props.credit.name}</h3>
        <p><strong>Role: {this.props.credit.role}</strong> {castStatus}</p>
        <p><strong>Bio:</strong> {this.props.credit.bio}</p>

    </div>
  )}

}

export default CreditTemplate;