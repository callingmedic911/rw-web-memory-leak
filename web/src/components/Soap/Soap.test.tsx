import { render } from '@redwoodjs/testing/web'

import Soap from './Soap'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Soap', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Soap />)
    }).not.toThrow()
  })
})
