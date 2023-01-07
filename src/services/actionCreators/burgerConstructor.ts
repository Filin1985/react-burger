import { v4 as uuid } from 'uuid'
import { CHOOSE_INGREDIENTS } from '../constants/burgerConstructor'

import { IIngredient } from '../../types'

export const actionCreators = {
  chooseIngredients: (item: IIngredient) => ({
    type: CHOOSE_INGREDIENTS,
    item: item,
    key: uuid(),
  }),
}
