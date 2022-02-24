import { render } from '@redwoodjs/testing/web'

import Shade from './Shade'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Shade', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Shade />)
    }).not.toThrow()
  })
})
