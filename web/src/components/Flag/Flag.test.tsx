import { render } from '@redwoodjs/testing/web'

import Flag from './Flag'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Flag', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Flag />)
    }).not.toThrow()
  })
})
