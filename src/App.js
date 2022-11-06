import React, { Component } from 'react'
import FoodForm from './Components/FoodForm'
import FoodList from './Components/FoodList'

export class App extends Component {
  state = {
    foods: [
      {name: 'Salads'},
      {name: 'Fish'},
      {name: 'Meat'},
      {name: 'Eggs'}
    ],
    init: ''
  }

  // update food
  updateFood = e => {
    this.setState({
      init: e.target.value
    })

  }

  //add food
  addFood = e => {
    e.preventDefault()
    let theValue = this.state.init
    let oldFood = this.state.foods
    oldFood.push({name: theValue})
    this.setState({
      foods: oldFood,
      init: ''
    })
  }

  //delete food
  deleteFood = (index) => {
    let allFoods = this.state.foods
    allFoods.splice(index,1)
    this.setState({
      foods: allFoods
    })
  }

  editFood = (index , value) => {
    let allFoods = this.state.foods
    let theFood = allFoods[index]
    theFood['name'] = value
    this.setState({
      foods: allFoods
    })
  }

  render() {
    const {foods} = this.state
    const allFoodes = foods.map( (food , index) => {
      return <FoodList infos={food} key={index} deleteFood={this.deleteFood} index={index} editFood={this.editFood} />
    })

    return (
      <div className='holeApp'>

          <h2>Add Foods</h2>
          <FoodForm init={this.state.init} updateFood={this.updateFood} addFood={this.addFood} />
          <ul>{allFoodes}</ul>

      </div>
    )
  }
}

export default App
