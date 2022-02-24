import { render } from '@redwoodjs/testing/web'

import Tire from './Tire'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Tire', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Tire />)
    }).not.toThrow()
  })
})
