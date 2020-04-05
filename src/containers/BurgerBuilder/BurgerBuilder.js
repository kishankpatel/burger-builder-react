import React, { Component } from 'react';
import Aux from '../../hoc/Aux.js';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'

const INGREDIENT_PRICES = {
  salad: 10,
  bacon: 25,
  cheese: 20,
  meat: 40
}

const MAX_INGREDIENT = 5

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 40,
    purchasable: false,
    purchasing: false
  }

  updatePurchaseState (ingredients) {
    const ingredientCounts = Object.values(ingredients)
    const totalIngredients = ingredientCounts.reduce((sum, eachCount) => sum + eachCount, 0)
    this.setState({
      purchasable: totalIngredients > 0
    })
  }

  purchaseHandler = () => {
    this.setState({
      purchasing: true
    })
  }

  hideModal = () => {
    this.setState({
      purchasing: false
    })
  }

  purchaseContinueHandler = () => {
    alert('You continue!');
  }

  addIngredient = (type) => {
    let ingCount = this.state.ingredients[type]
    if (ingCount === MAX_INGREDIENT) {
      return
    }
    ingCount+=1
    let updatedIngrediant = {...this.state.ingredients}
    updatedIngrediant[type] = ingCount
    this.setState({
      ingredients: updatedIngrediant,
      totalPrice: this.state.totalPrice + INGREDIENT_PRICES[type]
    })
    this.updatePurchaseState(updatedIngrediant)
  }
  removeIngredient = (type) => {
    let ingCount = this.state.ingredients[type]
    if (ingCount <= 0) {
      return
    }
    ingCount-=1
    let updatedIngrediant = {...this.state.ingredients}
    updatedIngrediant[type] = ingCount
    this.setState({
      ingredients: updatedIngrediant,
      totalPrice: this.state.totalPrice - INGREDIENT_PRICES[type]
    })
    this.updatePurchaseState(updatedIngrediant)
  }
  render () {
    const disabledLess = {...this.state.ingredients}
    for (let key in disabledLess) {
      disabledLess[key] = disabledLess[key] <= 0
    }  // {salad: true, cheese: false, ..}
    const disabledMore = {...this.state.ingredients}
    for (let key in disabledMore) {
      disabledMore[key] = disabledMore[key] >= MAX_INGREDIENT
    }
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          addIngredient={this.addIngredient}
          removeIngredient={this.removeIngredient}
          disabledLess={disabledLess}
          disabledMore={disabledMore}
          ingredientPrices={INGREDIENT_PRICES}
          purchasable={this.state.purchasable}
          purchaseHandler={this.purchaseHandler}
          totalPrice={this.state.totalPrice}/>
        <Modal show={this.state.purchasing} hideModal={this.hideModal}>
          <OrderSummary
            ingredients={this.state.ingredients}
            hideModal={this.hideModal}
            continue={this.purchaseContinueHandler}
            totalPrice={this.state.totalPrice}/>
        </Modal>
      </Aux>
    );
  }
}

export default BurgerBuilder;
