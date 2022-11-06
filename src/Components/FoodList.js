import React, { Component } from 'react'

class FoodList extends Component {
  state = {
    isEdit: false
  }

  renderFoods = () => {
        return(
          <li>
          <span>{this.props.infos.name}</span>
          <button onClick={ () => {this.toggelIsEdit()}} > Update Food</button>
          <button onClick={ () => {this.props.deleteFood(this.props.index)}} >Delete Food</button>
        </li>
        )
  }

  toggelIsEdit = () => {
    let {isEdit} = this.state
    this.setState({
      isEdit: !isEdit
    })
  }

  updateFormItem = (e) => {
    e.preventDefault()
    this.props.editFood(this.props.index , this.input.value)
    this.toggelIsEdit()
  }

  renderUpdateFoods = () => {
    return(
      <form onSubmit={this.updateFormItem}>
        <input ref={ (v) => { this.input = v } } defaultValue={this.props.infos.name} />
        <button>Update Food</button>
      </form>
    )
}

  render() {
    return (
      <React.Fragment>
        { this.state.isEdit ? this.renderUpdateFoods() : this.renderFoods() }
      </React.Fragment>
    )
  }
}

export default FoodList