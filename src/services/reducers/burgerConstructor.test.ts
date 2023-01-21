import { constructorReducer } from './burgerConstructor'
import { initialState } from './burgerConstructor'

import {
  CHOOSE_INGREDIENTS,
  REMOVE_INGREDIENT,
  GET_ORDER_DETAILS_REQUEST,
  GET_ORDER_DETAILS_SUCCESS,
  GET_ORDER_DETAILS_FAILED,
  INCREASE_INGREDIENT_ITEM,
  DECREASE_INGREDIENT_ITEM,
  UPDATE_LIST,
  CLEAN_ORDER,
  SET_CURRENT_ORDER,
} from '../constants/burgerConstructor'

describe('constructor reducer', () => {
  test('should return the initial state', () => {
    expect(constructorReducer(undefined, {} as any)).toEqual(initialState)
  })

  it('should handle GET_ORDER_DETAILS_REQUEST', () => {
    const state = {
      ...initialState,
      burgerOrderRequest: false,
      burgerOrderFailed: false,
    }

    const action = { type: GET_ORDER_DETAILS_REQUEST }
    const result = constructorReducer(state, action)

    expect(result).toEqual({
      ...initialState,
      burgerOrderRequest: true,
      burgerOrderFailed: false,
    })
  })

  it('should handle GET_ORDER_DETAILS_SUCCESS', () => {
    const state = {
      ...initialState,
      burgerOrderRequest: false,
      burgerOrderFailed: false,
      burgerOrder: {
        number: 0,
      },
    }

    const action = {
      type: GET_ORDER_DETAILS_SUCCESS,
      order: {
        number: 1,
      },
    }
    const result = constructorReducer(state, action)

    expect(result).toEqual({
      ...initialState,
      burgerOrderRequest: false,
      burgerOrderFailed: false,
      burgerOrder: {
        number: 1,
      },
    })
  })

  it('should handle GET_ORDER_DETAILS_FAILED', () => {
    const state = {
      ...initialState,
      burgerOrderRequest: false,
      burgerOrderFailed: false,
    }

    const action = { type: GET_ORDER_DETAILS_FAILED }
    const result = constructorReducer(state, action)

    expect(result).toEqual({
      ...initialState,
      burgerOrderRequest: false,
      burgerOrderFailed: true,
    })
  })

  it('should handle CHOOSE_INGREDIENTS', () => {
    const stateBun = {
      ingredientsBurger: {
        bun: null,
        otherIngredients: [],
        counts: {},
        orderSum: 0,
        prevBunPrice: 0,
      },
      currentIngredient: null,
      currentOrder: null,
      burgerOrder: {
        number: 0,
      },
      burgerOrderRequest: false,
      burgerOrderFailed: false,
    }

    const stateOtherIngredients = {
      ingredientsBurger: {
        bun: {
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
        otherIngredients: [],
        counts: {},
        orderSum: 2510,
        prevBunPrice: 1255,
      },
      currentIngredient: null,
      currentOrder: null,
      burgerOrder: {
        number: 0,
      },
      burgerOrderRequest: false,
      burgerOrderFailed: false,
    }

    const actionBun = {
      type: CHOOSE_INGREDIENTS,
      item: {
        _id: '60666c42cc7b410027a1a9b1',
        name: 'Краторная булка N-200i',
        type: 'bun',
        proteins: 80,
        fat: 24,
        carbohydrates: 53,
        calories: 420,
        price: 1255,
        image: 'https://code.s3.yandex.net/react/code/bun-02.png',
        image_mobile: 'https://code.s3.yandex.net/react/code/bun-02-mobile.png',
        image_large: 'https://code.s3.yandex.net/react/code/bun-02-large.png',
        __v: 0,
      },
      key: '',
    }
    const resultBun = constructorReducer(stateBun, actionBun)

    expect(resultBun).toEqual({
      ...initialState,
      ingredientsBurger: {
        ...initialState.ingredientsBurger,
        bun: {
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
        otherIngredients: [],
        counts: {},
        orderSum: 2510,
        prevBunPrice: 1255,
      },
    })

    const actionOtherIngredients = {
      type: CHOOSE_INGREDIENTS,
      item: {
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
        image_large: 'https://code.s3.yandex.net/react/code/meat-04-large.png',
        __v: 0,
      },
      key: '123',
    }
    const resultOtherIngredients = constructorReducer(
      stateOtherIngredients,
      actionOtherIngredients
    )

    expect(resultOtherIngredients).toEqual({
      ...initialState,
      ingredientsBurger: {
        ...initialState.ingredientsBurger,
        bun: {
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
        otherIngredients: [
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
            key: '123',
          },
        ],
        counts: {},
        orderSum: 5510,
        prevBunPrice: 1255,
      },
    })
  })

  it('should handle REMOVE_INGREDIENT', () => {
    const stateOtherIngredients = {
      ingredientsBurger: {
        bun: {
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
        otherIngredients: [
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
            key: '123',
          },
        ],
        counts: {},
        orderSum: 5510,
        prevBunPrice: 1255,
      },
      currentIngredient: null,
      currentOrder: null,
      burgerOrder: {
        number: 0,
      },
      burgerOrderRequest: false,
      burgerOrderFailed: false,
    }
    const actionOtherIngredients = {
      type: REMOVE_INGREDIENT,
      item: {
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
        image_large: 'https://code.s3.yandex.net/react/code/meat-04-large.png',
        __v: 0,
      },
      key: '123',
    }
    const resultOtherIngredients = constructorReducer(
      stateOtherIngredients,
      actionOtherIngredients
    )

    expect(resultOtherIngredients).toEqual({
      ...initialState,
      ingredientsBurger: {
        ...initialState.ingredientsBurger,
        bun: {
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
        otherIngredients: [],
        counts: {},
        orderSum: 2510,
        prevBunPrice: 1255,
      },
    })
  })

  it('should handle INCREASE_INGREDIENT_ITEM', () => {
    const action = {
      type: INCREASE_INGREDIENT_ITEM,
      item: {
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
        image_large: 'https://code.s3.yandex.net/react/code/meat-04-large.png',
        __v: 0,
      },
      _id: '60666c42cc7b410027a1a9b5',
    }
    const resultOtherIngredients = constructorReducer(initialState, action)

    expect(resultOtherIngredients).toEqual({
      ...initialState,
      ingredientsBurger: {
        ...initialState.ingredientsBurger,
        counts: { '60666c42cc7b410027a1a9b5': 1 },
      },
    })
  })

  it('should handle DECREASE_INGREDIENT_ITEM', () => {
    const stateOtherIngredients = {
      ingredientsBurger: {
        bun: {
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
        otherIngredients: [
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
            key: '123',
          },
        ],
        counts: { '60666c42cc7b410027a1a9b5': 2 },
        orderSum: 8510,
        prevBunPrice: 1255,
      },
      currentIngredient: null,
      currentOrder: null,
      burgerOrder: {
        number: 0,
      },
      burgerOrderRequest: false,
      burgerOrderFailed: false,
    }
    const action = {
      type: DECREASE_INGREDIENT_ITEM,
      ingredient: {
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
        image_large: 'https://code.s3.yandex.net/react/code/meat-04-large.png',
        __v: 0,
        key: '123',
      },
      _id: '60666c42cc7b410027a1a9b5',
    }
    const result = constructorReducer(stateOtherIngredients, action)

    expect(result).toEqual({
      ...initialState,
      ingredientsBurger: {
        ...initialState.ingredientsBurger,
        bun: {
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
        otherIngredients: [
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
            key: '123',
          },
        ],
        counts: { '60666c42cc7b410027a1a9b5': 1 },
        orderSum: 8510,
        prevBunPrice: 1255,
      },
    })
  })

  it('should handle UPDATE_LIST', () => {
    const stateOtherIngredients = {
      ingredientsBurger: {
        bun: {
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
        otherIngredients: [
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
            key: '123',
          },
          {
            _id: '60666c42cc7b410027a1a9b6',
            name: 'Биокотлета из марсианской Магнолии',
            type: 'main',
            proteins: 420,
            fat: 142,
            carbohydrates: 242,
            calories: 4242,
            price: 424,
            image: 'https://code.s3.yandex.net/react/code/meat-01.png',
            image_mobile:
              'https://code.s3.yandex.net/react/code/meat-01-mobile.png',
            image_large:
              'https://code.s3.yandex.net/react/code/meat-01-large.png',
            __v: 0,
            key: '1234',
          },
        ],
        counts: {
          '60666c42cc7b410027a1a9b5': 1,
          '60666c42cc7b410027a1a9b6': 1,
        },
        orderSum: 6358,
        prevBunPrice: 1255,
      },
      currentIngredient: null,
      currentOrder: null,
      burgerOrder: {
        number: 0,
      },
      burgerOrderRequest: false,
      burgerOrderFailed: false,
    }
    const action = {
      type: UPDATE_LIST,
      fromIndex: 1,
      toIndex: 0,
    }

    const resultOtherIngredients = constructorReducer(
      stateOtherIngredients,
      action
    )

    expect(resultOtherIngredients).toEqual({
      ...initialState,
      ingredientsBurger: {
        ...initialState.ingredientsBurger,
        bun: {
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
        otherIngredients: [
          {
            _id: '60666c42cc7b410027a1a9b6',
            name: 'Биокотлета из марсианской Магнолии',
            type: 'main',
            proteins: 420,
            fat: 142,
            carbohydrates: 242,
            calories: 4242,
            price: 424,
            image: 'https://code.s3.yandex.net/react/code/meat-01.png',
            image_mobile:
              'https://code.s3.yandex.net/react/code/meat-01-mobile.png',
            image_large:
              'https://code.s3.yandex.net/react/code/meat-01-large.png',
            __v: 0,
            key: '1234',
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
            key: '123',
          },
        ],
        counts: {
          '60666c42cc7b410027a1a9b5': 1,
          '60666c42cc7b410027a1a9b6': 1,
        },
        orderSum: 6358,
        prevBunPrice: 1255,
      },
    })
  })

  it('should handle SET_CURRENT_ORDER', () => {
    const stateOtherIngredients = {
      ingredientsBurger: {
        bun: {
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
        otherIngredients: [
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
            key: '123',
          },
        ],
        counts: {
          '60666c42cc7b410027a1a9b5': 1,
        },
        orderSum: 5510,
        prevBunPrice: 1255,
      },
      currentIngredient: null,
      currentOrder: null,
      burgerOrder: {
        number: 0,
      },
      burgerOrderRequest: false,
      burgerOrderFailed: false,
    }
    const action = {
      type: SET_CURRENT_ORDER,
      item: {
        createdAt: '10102023',
        ingredients: ['60666c42cc7b410027a1a9b5', '60666c42cc7b410027a1a9b1'],
        name: 'string',
        number: 1,
        status: 'string',
        updatedAt: 'string',
        _id: 'string',
      },
    }

    const resultOtherIngredients = constructorReducer(
      stateOtherIngredients,
      action
    )

    expect(resultOtherIngredients).toEqual({
      ...initialState,
      ingredientsBurger: {
        ...initialState.ingredientsBurger,
        bun: {
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
        otherIngredients: [
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
            key: '123',
          },
        ],
        counts: {
          '60666c42cc7b410027a1a9b5': 1,
        },
        orderSum: 5510,
        prevBunPrice: 1255,
      },
      currentOrder: {
        createdAt: '10102023',
        ingredients: ['60666c42cc7b410027a1a9b5', '60666c42cc7b410027a1a9b1'],
        name: 'string',
        number: 1,
        status: 'string',
        updatedAt: 'string',
        _id: 'string',
      },
    })
  })

  it('should handle CLEAN_ORDER', () => {
    const stateOtherIngredients = {
      ingredientsBurger: {
        bun: {
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
        otherIngredients: [
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
            key: '123',
          },
        ],
        counts: {
          '60666c42cc7b410027a1a9b5': 1,
        },
        orderSum: 5510,
        prevBunPrice: 1255,
      },
      currentIngredient: null,
      currentOrder: null,
      burgerOrder: {
        number: 0,
      },
      burgerOrderRequest: false,
      burgerOrderFailed: false,
    }
    const action = {
      type: CLEAN_ORDER,
    }

    const resultOtherIngredients = constructorReducer(
      stateOtherIngredients,
      action
    )

    expect(resultOtherIngredients).toEqual({
      ...initialState,
      ingredientsBurger: {
        ...initialState.ingredientsBurger,
        bun: null,
        otherIngredients: [],
        counts: {
          '60666c42cc7b410027a1a9b5': 1,
        },
        orderSum: 0,
        prevBunPrice: 0,
      },
    })
  })
})
