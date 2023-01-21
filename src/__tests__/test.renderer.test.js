import React from 'react'
import { Provider } from 'react-redux'
import TestRenderer from 'react-test-renderer'
import FeedItem from '../components/feed/feed-item/feed-item'
import { store } from '../services/store'

describe('Check FeedItem component', () => {
  let mockOrder = {
    createdAt: '2021-10-24T19:41:51.239Z',
    ingredients: ['60666c42cc7b410027a1a9b1', '60666c42cc7b410027a1a9b5'],
    name: 'Super Big Order',
    number: '1000',
    status: 'Готов',
    updatedAt: '2021-10-24T19:41:51.239Z',
    _id: '1',
  }

  test('should be equal to snapshot', () => {
    const renderedValue = TestRenderer.create(
      <Provider store={store}>
        <FeedItem order={mockOrder} />
      </Provider>
    )
    expect(renderedValue).toMatchSnapshot()
  })
})
