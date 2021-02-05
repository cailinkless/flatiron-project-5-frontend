import React, { Component } from 'react';
import { connect } from 'react-redux';
import PlaybillTemplate from '../components/PlaybillTemplate';

class Quotes extends Component {

  render() {

    state = {
        title = 
    }

    const PlaybillInfo = this.props.playbill

    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {QuoteCardList}
              {/*
                TODO:

                Render Quotes With QuoteCard component and pass down callback props for removing, upvoting and downvoting quotes
               */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return ({
    quotes: state.playbills
  })
}
//add arguments to connect as needed
export default connect(mapStateToProps)(Quotes);
