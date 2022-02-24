import { render } from '@redwoodjs/testing/web'

import Candle from './Candle'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Candle', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Candle />)
    }).not.toThrow()
  })
})
