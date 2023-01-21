import { ingredientsReducer, initialState } from './ingredients'

import {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_FAILED,
} from '../constants/ingredients'

describe('ingredients reducer', () => {
  test('should return the initial state', () => {
    expect(ingredientsReducer(undefined, {} as any)).toEqual(initialState)
  })

  it('should handle GET_INGREDIENTS_REQUEST', () => {
    const state = {
      ...initialState,
      ingredientsRequest: false,
      ingredientsFailed: false,
    }
    const action = { type: GET_INGREDIENTS_REQUEST }
    const result = ingredientsReducer(state, action)

    expect(result).toEqual({
      ...initialState,
      ingredientsRequest: true,
      ingredientsFailed: false,
    })
  })

  it('should handle GET_INGREDIENTS_SUCCESS', () => {
    const state = {
      ...initialState,
      ingredientsRequest: false,
      ingredientsFailed: false,
    }
    const action = {
      type: GET_INGREDIENTS_SUCCESS,
      ingredients: [
        {
          _id: '60666c42cc7b410027a1a9b1',
          name: 'Краторная булка N-200i',
          type: 'bun',
          proteins: 80,
          fat: 24,
          carbohydrates: 53,
          calories: 420,
          price: 1255,
          image: 'https://code.s3.yandex.net/react/code/bun-02.png',
          image_mobile:
            'https://code.s3.yandex.net/react/code/bun-02-mobile.png',
          image_large: 'https://code.s3.yandex.net/react/code/bun-02-large.png',
          __v: 0,
        },
        {
          _id: '60666c42cc7b410027a1a9b5',
          name: 'Говяжий метеорит (отбивная)',
          type: 'main',
          proteins: 800,
          fat: 800,
          carbohydrates: 300,
          calories: 2674,
          price: 3000,
          image: 'https://code.s3.yandex.net/react/code/meat-04.png',
          image_mobile:
            'https://code.s3.yandex.net/react/code/meat-04-mobile.png',
          image_large:
            'https://code.s3.yandex.net/react/code/meat-04-large.png',
          __v: 0,
        },
      ],
    }
    const result = ingredientsReducer(state, action)

    expect(result).toEqual({
      ingredients: [
        {
          _id: '60666c42cc7b410027a1a9b1',
          name: 'Краторная булка N-200i',
          type: 'bun',
          proteins: 80,
          fat: 24,
          carbohydrates: 53,
          calories: 420,
          price: 1255,
          image: 'https://code.s3.yandex.net/react/code/bun-02.png',
          image_mobile:
            'https://code.s3.yandex.net/react/code/bun-02-mobile.png',
          image_large: 'https://code.s3.yandex.net/react/code/bun-02-large.png',
          __v: 0,
        },
        {
          _id: '60666c42cc7b410027a1a9b5',
          name: 'Говяжий метеорит (отбивная)',
          type: 'main',
          proteins: 800,
          fat: 800,
          carbohydrates: 300,
          calories: 2674,
          price: 3000,
          image: 'https://code.s3.yandex.net/react/code/meat-04.png',
          image_mobile:
            'https://code.s3.yandex.net/react/code/meat-04-mobile.png',
          image_large:
            'https://code.s3.yandex.net/react/code/meat-04-large.png',
          __v: 0,
        },
      ],
      ingredientsRequest: false,
      ingredientsFailed: false,
    })
  })

  it('should handle GET_INGREDIENTS_FAILED', () => {
    const state = {
      ...initialState,
      ingredientsRequest: false,
      ingredientsFailed: false,
    }
    const action = { type: GET_INGREDIENTS_FAILED }
    const result = ingredientsReducer(state, action)

    expect(result).toEqual({
      ...initialState,
      ingredientsRequest: false,
      ingredientsFailed: true,
    })
  })
})
