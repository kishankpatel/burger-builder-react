import React from 'react';
import Button from '../../UI/Button/Button';


const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients)
      .map((igKey, i) => {
      return (<li key={'list' + i}>
          <span style={{textTransform: 'capitalize'}}>{igKey}</span>:
          <strong> {props.ingredients[igKey]} </strong>
        </li>)
      })
  return (
    <div>
      <h3>Your Order</h3>
      <p>A dilicious burger with following ingrediance: </p>
      <ul>
        {ingredientSummary}
      </ul>
      <p>Total Price: <b>Rs.{props.totalPrice.toFixed(2)}</b></p>
      <p>Continue to checkout?</p>
      <Button type='danger' clicked={props.hideModal}>Cancel</Button>
      <Button type='success' clicked={props.continue}>Continue</Button>
    </div>
  )
}

export default orderSummary;
