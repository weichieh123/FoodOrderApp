import skyImage from '../../assets/R0043250.JPG'
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton'

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
          <h1>ReactMeals</h1>
          <HeaderCartButton onShowCart={props.onShowCart} />
      </header>
      <div className={classes['main-image']}>
          <img src={skyImage} alt="Beautiful sky!" />
      </div>
    </>
  )
}

export default Header
