import { render } from '@redwoodjs/testing/web'

import Plate from './Plate'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Plate', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Plate />)
    }).not.toThrow()
  })
})
