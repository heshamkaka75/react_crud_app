import React from 'react'

function FoodForm(props) {
  return (
    <div>
        <form onSubmit={props.addFood}>
            <input type='text' onChange={props.updateFood} value={props.init} />
            <button type='submit'>Add Food</button>
        </form>
    </div>
  )
}

export default FoodForm