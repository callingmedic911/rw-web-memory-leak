import { render } from '@redwoodjs/testing/web'

import Apple from './Apple'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Apple', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Apple />)
    }).not.toThrow()
  })
})
