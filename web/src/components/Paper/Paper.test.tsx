import { render } from '@redwoodjs/testing/web'

import Paper from './Paper'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Paper', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Paper />)
    }).not.toThrow()
  })
})
