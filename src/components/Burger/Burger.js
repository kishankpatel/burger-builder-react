import React from 'react';
import './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const burger = (props) => {
  let transformedIngredient = Object.keys(props.ingredients)
    .map(igKey => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurgerIngredient key={igKey + i} type={igKey}/>
      }) // [[{type: 'cheese', key='cheese0'}], [{type: 'cheese', key='cheese1'}]]
    }).reduce((arr, el) => { //
      return arr.concat(el)
    }, []); // [{type: 'cheese', key='cheese0'}, {type: 'cheese', key='cheese1'}]

    if (transformedIngredient.length === 0) {
      transformedIngredient = <p>Please start adding ingredients</p>
    }
  return (
    <div>
      <main className='burger'>
        <BurgerIngredient type="bread-top"/>
        {transformedIngredient}
        <BurgerIngredient type="bread-bottom"/>
      </main>
    </div>
  )
}

export default burger;
