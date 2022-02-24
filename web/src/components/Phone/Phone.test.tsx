import { render } from '@redwoodjs/testing/web'

import Phone from './Phone'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Phone', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Phone />)
    }).not.toThrow()
  })
})
