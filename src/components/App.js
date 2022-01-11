import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  onChangeType = (event) => {
    let filterSelection = event.target.value;
    this.setState({
      filters: {...this.state.filters, type: filterSelection}
    })
  }

  onFindPetsClick = () => {
    let url = "/api/pets";
    if(this.state.filters.type !=="all") {
      url = `${url}?type=${this.state.filters.type}`
    }
    fetch(`${url}`)
    .then(resp => resp.json())
    .then(jsonPets => this.setState({pets: jsonPets}))   
  }

  onAdoptPet = (petId) => {
    let pet = this.state.pets.find(pet => pet.id === petId);
    pet.isAdopted = true;
    this.setState({
    ...this.state.pets, pet //add or update pet in spread pets array
    })
  }


  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
