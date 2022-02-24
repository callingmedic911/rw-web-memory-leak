import { render } from '@redwoodjs/testing/web'

import Chair from './Chair'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Chair', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Chair />)
    }).not.toThrow()
  })
})
