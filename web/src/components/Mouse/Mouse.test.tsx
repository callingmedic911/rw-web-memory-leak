import { render } from '@redwoodjs/testing/web'

import Mouse from './Mouse'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Mouse', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Mouse />)
    }).not.toThrow()
  })
})
