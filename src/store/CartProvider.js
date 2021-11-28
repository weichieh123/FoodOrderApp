import { useReducer } from 'react'
import CartContext from './cart-context'

const defaultCartState = {
  items: [],
  totalAmount: 0,
}

const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    // unlike push, concat return a new array
    const updateTotalAmount =
      state.totalAmount + action.item.price * action.item.amount
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    )
    const existingCartItem = state.items[existingCartItemIndex]
    
    let updatedItems

    if (existingCartItem) {
      // 如果要購買購物車已經有的商品
      const updatedItem = {
        ...existingCartItem, //原商品名稱
        amount: existingCartItem.amount + action.item.amount, //原數量+新增數量
      }
      updatedItems = [...state.items] //copy原購物車
      updatedItems[existingCartItemIndex] = updatedItem //只更新重複的商品項目
    } else {
      updatedItems = state.items.concat(action.item)
    }
    return {
      items: updatedItems,
      totalAmount: updateTotalAmount,
    }
  }
  if (action.type === 'REMOVE') {
  }
  return defaultCartState
}

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  )

  const addItemToCartHandler = (item) => {
    dispatchCartAction({
      type: 'ADD',
      item: item,
    })
  }

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({
      type: 'REMOVE',
      id: id,
    })
  }

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  }

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider
