import { render } from '@redwoodjs/testing/web'

import Cup from './Cup'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Cup', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Cup />)
    }).not.toThrow()
  })
})
