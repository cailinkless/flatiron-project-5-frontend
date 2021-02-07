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

  const titleLine = this.props.playbill.title !== "" ? <h2>{this.props.playbill.title}</h2> : <h2>Untitled Play</h2>
  const playwrightLine = this.state.playwright ? <h3>Written by {this.state.playwright.name}</h3> : null
  const directorLine = this.state.director ? <h3>Directed by {this.state.director.name}</h3> : null
  const aboutSection = this.props.playbill.about !== "" ? <div className="about-wrapper"><h3>About the Show</h3><p>{this.props.playbill.about}</p></div> : null
  const crewSection = this.state.crewmembers.length >= 1 ? <div className="crew-wrapper"><h3>Production Team</h3><ul>{this.state.crewmembers.map(cred => <li key={cred.id}>{cred.role}: {cred.name}</li>)}</ul></div> : null
  const castSection = this.state.castmembers.length >= 1 ? <div className="cast-wrapper"><h3>Cast</h3><ul>{this.state.castmembers.map(cred => <li key={cred.id}>{cred.name} as {cred.role}</li>)}</ul></div> : null
  const bioSection = this.state.allbios !== [] ? <div className="bios-wrapper"><h3>Bios:</h3>{this.state.allbios}</div> : null 

  return (
    <div>

      <div className="info-wrapper">
        
        {titleLine}
        {playwrightLine}
        {directorLine}

        <hr/>   

      </div>

      {aboutSection}

      <hr/>

      <div className="credits-wrapper">

        {crewSection}
        {castSection}

      </div>

      <hr/>

      {bioSection}

    </div>
  )}

}

export default PlaybillTemplate;
