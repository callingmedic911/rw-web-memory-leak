import { render } from '@redwoodjs/testing/web'

import Flower from './Flower'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Flower', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Flower />)
    }).not.toThrow()
  })
})
