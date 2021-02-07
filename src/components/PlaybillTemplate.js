import React, { Component } from 'react';

class PlaybillTemplate extends Component {



state = {
  playwright: this.props.playbill.credits.find(c => c.role === "Playwright"),
  director: this.props.playbill.credits.find(c => c.role === "Director"),
  castmembers: this.props.playbill.credits.filter(c => c.cast === true),
  crewmembers: this.props.playbill.credits.filter(c => (c.cast === false) && (c.role !== "Playwright") && (c.role !== "Director")),
  allbios: [this.props.playbill.credits.map( c =>
    <div className="bio">
      <p><strong>{c.name}</strong> <i>({c.role})</i> {c.bio}</p>
    </div>)]
}


render() {

  return (
    <div>

      <div className="info-wrapper">
        
        <h2>{this.props.playbill.title}</h2>
        <h3>Written by {this.state.playwright.name}</h3>
        <h3>Directed by {this.state.director.name}</h3>

        <hr/>

        <h3>About the Show:</h3>
        <p>{this.props.playbill.about}</p>

      </div>

      <hr/>

      <div className="credits-wrapper">

        <h3>Production Team:</h3>
          <ul>
            {this.state.crewmembers.map(cred => <li key={cred.id}>{cred.role}: {cred.name}</li>)}
          </ul>

        <h3>Cast:</h3>
          <ul>
              {this.state.castmembers.map(cred => <li key={cred.id}>{cred.name} as {cred.role}</li>)}
          </ul>

      </div>

      <hr/>

      <div className="bios-wrapper">

        <h3>Bios:</h3>

        {this.state.allbios}
        

      </div>

    </div>
  )}

}

export default PlaybillTemplate;
