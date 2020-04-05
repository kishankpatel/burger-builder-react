import React from 'react';
import './BuildControls.css';
import BuildControl from '../BuildControl/BuildControl'

const controls = [
  {label: 'Salad', type: 'salad'},
  {label: 'Bacon', type: 'bacon'},
  {label: 'Cheese', type: 'cheese'},
  {label: 'Meat', type: 'meat'}
]

const buildControls = (props) => {
  return (
    <div className='build-controls'>
      <p>Total Price: <b>Rs.{props.totalPrice.toFixed(2)}</b></p>
      {controls.map((ctrl, i) => {
        return <BuildControl
            label={ctrl.label}
            price={props.ingredientPrices[ctrl.type]}
            key={ctrl.label + i}
            add={() => props.addIngredient(ctrl.type)}
            remove={() => props.removeIngredient(ctrl.type)}
            disabledLess={props.disabledLess[ctrl.type]}
            disabledMore={props.disabledMore[ctrl.type]}
          />
      })}
      <button
        className="order-button"
        disabled={!props.purchasable}
        onClick={props.purchaseHandler}
      > ORDER NOW </button>
    </div>
  )
}

export default buildControls;
