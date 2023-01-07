import React, { useMemo } from 'react'
import { Link, useLocation } from 'react-router-dom'
//@ts-ignore
import styles from './ingredients-category.module.css'
import { IIngredient } from '../../../types'
import BurgerItem from '../burger-item/burger-item'
import { useDispatch, useSelector } from 'react-redux'
import { SET_CURRENT_INGREDIENT } from '../../../services/constants/burgerConstructor'

interface ICategoryRef {
  name: string
  data: Array<IIngredient>
  id: string
}

const IngredientCategory = React.forwardRef<HTMLHeadingElement, ICategoryRef>(
  ({ name, data, id }, ref) => {
    const { bun, otherIngredients } = useSelector(
      (store: any) => store.burgerConstructor.ingredientsBurger
    )
    const dispatch = useDispatch()
    const handleClick = (item: IIngredient) => {
      dispatch({
        type: SET_CURRENT_INGREDIENT,
        item: item,
      })
    }

    const allIngredients = useMemo(() => {
      return [...otherIngredients, bun ? bun : 0]
    }, [otherIngredients, bun])

    let res = new Map()
    useMemo(() => {
      return allIngredients[0] !== null
        ? allIngredients.reduce(
            (acc, e) => acc.set(e._id, (acc.get(e._id) || 0) + 1),
            res
          )
        : 0
    }, [allIngredients, res])

    let location = useLocation()

    return (
      <li className={styles.ingredients__bun}>
        <h2 className={styles.ingredients__subheader} id={id} ref={ref}>
          {name}
        </h2>
        <ul className={styles.ingredients__items}>
          {data.map((item) => (
            <Link
              key={item._id}
              to={{
                pathname: `/ingredients/${item._id}`,
                state: { background: location },
              }}
            >
              <BurgerItem
                count={res.get(item._id)}
                item={item}
                handleClick={handleClick}
              />
            </Link>
          ))}
        </ul>
      </li>
    )
  }
)

export default IngredientCategory
