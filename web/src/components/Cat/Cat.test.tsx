import { render } from '@redwoodjs/testing/web'

import Cat from './Cat'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Cat', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Cat />)
    }).not.toThrow()
  })
})
