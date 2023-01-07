export interface IIngredient {
  readonly _id: string
  readonly name: string
  readonly type: string
  readonly proteins: number
  readonly fat: number
  readonly carbohydrates: number
  readonly calories: number
  readonly price: number
  readonly image: string
  readonly image_mobile: string
  readonly image_large: string
  readonly __v: number
}

export interface IOrder {
  readonly createdAt: string
  readonly ingredients: Array<string>
  readonly name: string
  readonly number: number
  readonly status: string
  readonly updatedAt: string
  readonly _id: string
}

export interface IOrdersResponse {
  readonly success: boolean
  readonly orders: IOrder
  readonly total: number
  readonly totalToday: number
}
