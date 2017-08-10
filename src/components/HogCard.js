import React from 'react'

class HogCard extends React.Component {



  componentDidMount () {
  }


  flipHogCard = () => {
    this.props.toggleHogDetails(this.props.hog)
  }

  render () {
    return (
      <div className="column">
      <div className="ui fluid card four wide column" onClick={this.flipHogCard}>
        <div className="image">
        <img src={this.props.hog.imageUrl} alt="" />
      </div>
      <div className="content">
        <a className="header">{this.props.hog.name}</a>
        <div className="meta">
          <span className="date"></span>
        </div>
        <div className="description">
          {this.props.hog.name} is a HOG.
        </div>
      </div>
      <div className="extra content">
          <i className="user icon"></i>
          {(Math.floor(Math.random() * 700))} Friends
      </div>
    </div>
  </div>
    )
  }


}

export default HogCard
