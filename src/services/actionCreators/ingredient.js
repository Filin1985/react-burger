import { v4 as uuid } from 'uuid'
import { CHOOSE_INGREDIENTS } from '../action/ingredient.js'

export const actionCreators = {
  chooseIngredients: (item) => ({
    type: CHOOSE_INGREDIENTS,
    item: item,
    key: uuid(),
  }),
}
