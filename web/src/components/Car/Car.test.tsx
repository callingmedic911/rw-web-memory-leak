import { render } from '@redwoodjs/testing/web'

import Car from './Car'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Car', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Car />)
    }).not.toThrow()
  })
})
