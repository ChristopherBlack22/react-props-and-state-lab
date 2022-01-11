import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    const petComponents = this.props.pets.map(pet => 
      <Pet 
        onAdoptPet={this.props.onAdoptPet} 
        pet={pet}
        key={pet.id}
      />
    );

    return (
      <div className="ui cards">
        {petComponents}
      </div>
    )
  }
}

export default PetBrowser
