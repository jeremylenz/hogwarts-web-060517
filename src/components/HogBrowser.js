import React from 'react'
import HogCard from './HogCard.js'
import HogDetail from './HogDetail.js'


class HogBrowser extends React.Component {

  displayHogs = () => {
    return this.props.hogs.map((hog) => {
      return hog.displayDetails ? <HogDetail hog={hog} toggleHogDetails={this.props.toggleHogDetails} hideHog={this.props.hideHog} /> : <HogCard hog={hog} toggleHogDetails={this.props.toggleHogDetails}/>
    })
  }

  componentDidMount () {
  }

  render () {
    return (
      <div className="ui four column grid container">
        <div className="row">
        {this.displayHogs()}
        </div>
      </div>


    )
  }

}

export default HogBrowser
