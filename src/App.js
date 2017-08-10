import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav'
import Hogs from './porkers_data.js'
import HogBrowser from './components/HogBrowser.js'
import HogSortFilter from './components/HogSortFilter.js'

const Images = [
  '/hog-imgs/augustus_gloop.jpg',
  '/hog-imgs/bay_of_pigs.jpg',
  '/hog-imgs/cherub.jpg',
  '/hog-imgs/cherub.png',
  '/hog-imgs/galaxy_note.jpg',
  '/hog-imgs/leggo_my_eggo.jpg',
  '/hog-imgs/mudblood.jpg',
  '/hog-imgs/piggy_smalls.jpg',
  '/hog-imgs/porkchop.jpg',
  '/hog-imgs/rainbowdash.jpg',
  '/hog-imgs/sobriety.jpg',
  '/hog-imgs/the_prosciutto_concern.jpg',
  '/hog-imgs/trouble.jpg',
  '/hog-imgs/truffleshuffle.jpg'
]



class App extends Component {

  constructor () {

    super ()

    let id = 0
    let ourHogs = Hogs.map((hog) => {
      hog.id = ++id
      hog.displayDetails = false
      hog.imageUrl= Images[(Math.floor(Math.random() * Images.length))]
      hog.weight = hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']
      hog.highestMedal = hog['highest medal achieved']
      return hog
    })



    this.state = {
      allHogs: ourHogs,
      hogsToDisplay: [...ourHogs]
    }
  }

  filterHiddenHog = (hog) => {
    let hogIndex = this.state.hogsToDisplay.indexOf(hog)
    let updatedHogs = this.state.hogsToDisplay
    updatedHogs.splice(hogIndex, 1)
    this.setState({
      hogsToDisplay: updatedHogs
    })
  }

  componentDidMount() {
  }

  toggleHogDetails = (hog) => {
    let hogIndex = this.state.allHogs.indexOf(hog)
    let updatedHogs = this.state.allHogs
    updatedHogs[hogIndex].displayDetails = !updatedHogs[hogIndex].displayDetails
    this.setState({
      allHogs: updatedHogs
    })

  }

  displayAllCards = () => {

    let updatedHogs = this.state.hogsToDisplay.map((hog) => {
      hog.displayDetails = false
      return hog
    })

    console.log(updatedHogs)

    this.setState({
      hogsToDisplay: updatedHogs
    })

  }

  updateHogList = (hogs) => {
    this.setState({
      hogsToDisplay: hogs
    }, this.displayAllCards)
  }

  render() {
    return (
      <div className="App">
          < Nav />
        < HogSortFilter updateHogList={this.updateHogList} hogs={this.state.allHogs}/>
      < HogBrowser hogs={this.state.hogsToDisplay} toggleHogDetails={this.toggleHogDetails} hideHog={this.filterHiddenHog}/>

      </div>
    )
  }
}

export default App;
