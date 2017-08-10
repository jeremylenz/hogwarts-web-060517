import React from 'react'

class HogDetail extends React.Component {

  flipHogCard = () => {
    this.props.toggleHogDetails(this.props.hog)
  }

  render () {
    return (
      <div className="column">
        <div className="ui fluid card four wide column">
          <div className="content" onClick={this.flipHogCard}>
            <a className="header">{this.props.hog.name}</a>
            <div className="meta">
              <span className="date">Highest medal achieved: {this.props.hog.highestMedal}</span>
            </div>
            <div className="description">
              <p>Specialty: {this.props.hog.specialty}</p>
              <p>{this.props.hog.greased ? 'Greased' : 'Ungreased'}</p>
              <p>Weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water: {this.props.hog.weight}</p>
            </div>
            <br />
          </div>
          <button className="ui button" onClick={this.hideThisHog}>Hide Hog</button>
        </div>
      </div>
    )
  }

  hideThisHog = () => {
    this.props.hideHog(this.props.hog)
    console.log(this.props.hog)
  }

}

export default HogDetail
