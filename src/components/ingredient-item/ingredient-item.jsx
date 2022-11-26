import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import {
  ConstructorElement,
  DragIcon,
} from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './ingredient-item.module.css'
import { cardPropTypes } from '../../prop-types.js'
import { useDrag, useDrop } from 'react-dnd'

const IngredientItem = ({
  ingredient,
  handleDelete,
  index,
  moveIngredient,
}) => {
  const id = ingredient._id
  const itemRef = useRef(null)

  const [{ handlerId }, drop] = useDrop({
    accept: 'item',
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      }
    },
    hover(item, monitor) {
      if (!itemRef.current) {
        return
      }

      const firstIndex = item.index
      const lastIndex = index

      if (firstIndex === lastIndex) {
        return
      }

      const hoverBoundingRect = itemRef.current?.getBoundingClientRect()
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
      const clientOffset = monitor.getClientOffset()
      const hoverClientY = clientOffset.y - hoverBoundingRect.top

      if (firstIndex < lastIndex && hoverClientY < hoverMiddleY) {
        return
      }

      if (firstIndex > lastIndex && hoverClientY > hoverMiddleY) {
        return
      }

      moveIngredient(firstIndex, lastIndex)

      item.index = lastIndex
    },
  })
  const [{ isDrag }, drag] = useDrag({
    type: 'item',
    item: () => {
      return { id, index }
    },
    collect: (monitor) => ({
      isDrag: monitor.isDragging(),
    }),
  })
  const opacity = isDrag ? 0 : 1
  drag(drop(itemRef))

  return (
    <li
      key={ingredient._id}
      className={styles.constructor__item}
      ref={itemRef}
      style={{ opacity }}
      data-handler-id={handlerId}
    >
      <DragIcon type='primary' />
      <ConstructorElement
        text={ingredient.name}
        price={ingredient.price}
        thumbnail={ingredient.image}
        handleClose={handleDelete}
      />
    </li>
  )
}

IngredientItem.propTypes = {
  ingredient: cardPropTypes.isRequired,
  handleDelete: PropTypes.func.isRequired,
  moveIngredient: PropTypes.func.isRequired,
  index: PropTypes.number,
}

export default IngredientItem
