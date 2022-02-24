import { render } from '@redwoodjs/testing/web'

import Key from './Key'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Key', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Key />)
    }).not.toThrow()
  })
})
