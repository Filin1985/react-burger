import React, { useRef, FC } from 'react'
import PropTypes from 'prop-types'
import {
  ConstructorElement,
  DragIcon,
} from '@ya.praktikum/react-developer-burger-ui-components'
//@ts-ignore
import styles from './ingredient-item.module.css'
import { IIngredient } from '../../../types'
import { useDrag, useDrop } from 'react-dnd'
import { XYCoord, Identifier } from 'dnd-core'

interface IIngredientItem {
  ingredient: IIngredient
  handleDelete: () => void
  index: number
  moveIngredient: (firstIndex: number, lastIndex: number) => void
}

interface IDragItem {
  id: string
  index: number
}

interface CollectedProps {
  handlerId: Identifier | null
}

const IngredientItem: FC<IIngredientItem> = ({
  ingredient,
  handleDelete,
  index,
  moveIngredient,
}) => {
  const id = ingredient._id
  const itemRef = useRef<HTMLLIElement>(null)

  const [{ handlerId }, drop] = useDrop<IDragItem, undefined, CollectedProps>({
    accept: 'item',
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      }
    },
    hover(item: IDragItem, monitor) {
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
      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top

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

// IngredientItem.propTypes = {
//   ingredient: cardPropTypes.isRequired,
//   handleDelete: PropTypes.func.isRequired,
//   moveIngredient: PropTypes.func.isRequired,
//   index: PropTypes.number,
// }

export default IngredientItem
