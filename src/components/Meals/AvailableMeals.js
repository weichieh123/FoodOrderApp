import { useEffect, useState } from 'react'

import classes from './AvailableMeals.module.css'
import Card from '../UI/Card'
import MealItem from './MealItem/MealItem'

const AvailableMeals = () => {
  const [meals, setMeals] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  /*
    如何在useEffect裡使用async await
    The function you pass to useEffect should not return a promise.
    Instead, the function you pass to useEffect may return a cleanup function which can be executed.
    That cleanup function should run synchronously though.
    It should not return a promise
  */
  useEffect(() => {
    const fetchMeals = async () =>{
      const res = await fetch('https://food-order-55733-default-rtdb.firebaseio.com/meals.json')
      const resData = await res.json()

      // change firebase data from obj to array
      const loadedMeals = []
      for (const key in resData) {
        loadedMeals.push({
          id: key,
          name: resData[key].name,
          description: resData[key].description,
          price: resData[key].price,
        })
      }
      setMeals(loadedMeals)
      setIsLoading(false)
    }
    fetchMeals()

  }, [])

  if (isLoading){
    return (
      <section className={classes.MealsLoading}>
        <p>Loading</p>
      </section>
    )
  }

  const mealsList = meals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ))

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  )
}

export default AvailableMeals
