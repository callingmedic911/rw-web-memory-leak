import { render } from '@redwoodjs/testing/web'

import Food from './Food'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Food', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Food />)
    }).not.toThrow()
  })
})
