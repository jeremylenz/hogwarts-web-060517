import React from 'react'

class HogSortFilter extends React.Component {

  constructor () {
    super ()
    this.state = {
      sort: "",
      filter: "0"
    }
  }


  sortAndFilterHogs = () => {
    let hogs = this.props.hogs
    let desiredFilter = parseInt(this.state.filter)
    //filter
    hogs = hogs.filter((hog) => {
      if(desiredFilter === 0){
        return hog
      } else if(desiredFilter === 1){
        return hog.greased === true
      } else {
        return hog.greased === false
      }
    })

    //sort

    let desiredSort = parseInt(this.state.sort)
    if(desiredSort === 1){
    hogs = hogs.sort((hog1, hog2) => {
      if(hog1.name < hog2.name){
        return -1;
      } else {
        return 1;
      }
    })
    }

    if(desiredSort === 0){
      hogs = hogs.sort((hog1, hog2) => {
        return hog2.weight - hog1.weight
      })
    }


    this.props.updateHogList(hogs)
  }

  updateFilter = (event) => {
    this.setState({
      filter: event.target.value
    },this.sortAndFilterHogs)

  }

  updateSort = (event) => {
    this.setState({
      sort: event.target.value
    },this.sortAndFilterHogs)

  }

  render() {
    return (

    <div className="ui grid container">
      <div className="ui form eight wide column">
        <div className="field">
          <select onInput={this.updateFilter}>
            <option value="0">All Hogs</option>
            <option value="1">Greased Hogs</option>
            <option value="2">Ungreased Hogs</option>
          </select>
        </div>
      </div>
    <div className="ui form eight wide column">
      <div className="field">
        <select onInput={this.updateSort}>
          <option value="">Sort by:</option>
          <option value="0">Weight</option>
          <option value="1">Name</option>
        </select>
      </div>
    </div>
    </div>
    )
  }
}

export default HogSortFilter
