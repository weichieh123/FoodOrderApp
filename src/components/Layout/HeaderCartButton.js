import React, { useContext, useEffect, useState } from 'react'
import CartContext from '../../store/cart-context'
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.css'

const HeaderCartButton = (props) => {
  const [btnIsHighlight, setBtnIsHighlight] = useState(false)

  const cartCtx = useContext(CartContext)
  const { items } = cartCtx

  const numOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount
  }, 0)

  const btnClasses = `${classes.button} ${btnIsHighlight ? classes.bump : ''}`

  useEffect(() => {
    if (items.length === 0) {
      return
    }
    setBtnIsHighlight(true)

    const timer = setTimeout(() => {
      setBtnIsHighlight(false)
    }, 300)

    return () => {
      clearTimeout(timer)
    }
  }, [items])

  return (
    <button className={btnClasses} onClick={props.onShowCart}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numOfCartItems}</span>
    </button>
  )
}

export default HeaderCartButton
