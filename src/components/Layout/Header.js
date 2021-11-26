import skyImage from '../../assets/R0043250.JPG'
import classes from './Header.module.css'

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
          <h1>ReactMeals</h1>
          <button>Cart</button>
      </header>
      <div className={classes['main-image']}>
          <img src={skyImage} alt="Beautiful sky!" />
      </div>
    </>
  )
}

export default Header
