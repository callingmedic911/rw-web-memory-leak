import { render } from '@redwoodjs/testing/web'

import Spoon from './Spoon'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Spoon', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Spoon />)
    }).not.toThrow()
  })
})
