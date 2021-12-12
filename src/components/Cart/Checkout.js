import useInput from '../../hooks/use-input'
import classes from './Checkout.module.css'

const isNotEmpty = value => value.trim() !== ''
const isFiveChars = value => value.trim().length === 5

const Checkout = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput
  } = useInput(isNotEmpty)

  const {
    value: enteredStreet,
    isValid: enteredStreetIsValid,
    hasError: streetHasError,
    valueChangeHandler: streetChangeHandler,
    inputBlurHandler: streetBlurHandler,
    reset: resetStreetInput
  } = useInput(isNotEmpty)

  const {
    value: enteredPostal,
    isValid: enteredPostalIsValid,
    hasError: postalHasError,
    valueChangeHandler: postalChangeHandler,
    inputBlurHandler: postalBlurHandler,
    reset: resetPostalInput
  } = useInput(isFiveChars)

  const {
    value: enteredCity,
    isValid: enteredCityIsValid,
    hasError: cityHasError,
    valueChangeHandler: cityChangeHandler,
    inputBlurHandler: cityBlurHandler,
    reset: resetCityInput
  } = useInput(isNotEmpty)

  const confirmHandler = (e) => {
    e.preventDefault()

    const formIsValid = enteredNameIsValid && enteredStreetIsValid && enteredCityIsValid && enteredPostalIsValid

    if (!formIsValid) {
      return
    }
    props.onConfirm({
      name: enteredName,
      street: enteredStreet,
      postal: enteredPostal,
      city: enteredCity,
    })
    resetNameInput()
    resetStreetInput()
    resetPostalInput()
    resetCityInput()
    
  }

  const nameControlClasses = `${classes.control} ${!nameHasError ? '' : classes.invalid}`
  const streetControlClasses = `${classes.control} ${!streetHasError ? '' : classes.invalid}`
  const postalControlClasses = `${classes.control} ${!postalHasError ? '' : classes.invalid}`
  const cityControlClasses = `${classes.control} ${!cityHasError ? '' : classes.invalid}`

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" value={enteredName} onChange={nameChangeHandler} onBlur={nameBlurHandler} />
        { nameHasError && <p>Please enter a valid name.</p> }
      </div>
      <div className={streetControlClasses}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" value={enteredStreet} onChange={streetChangeHandler} onBlur={streetBlurHandler} />
        { streetHasError && <p>Please enter a valid street.</p> }
      </div>
      <div className={postalControlClasses}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" value={enteredPostal} onChange={postalChangeHandler} onBlur={postalBlurHandler} />
        { postalHasError && <p>Please enter a valid postal(5 numbers).</p> }
      </div>
      <div className={cityControlClasses}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" value={enteredCity} onChange={cityChangeHandler} onBlur={cityBlurHandler} />
        { cityHasError && <p>Please enter a valid city.</p> }
      </div>
      <div className={classes.actions}>
        <button type='button' onClick={props.onHideCart}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  )
}

export default Checkout
