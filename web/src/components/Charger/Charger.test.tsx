import { render } from '@redwoodjs/testing/web'

import Charger from './Charger'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Charger', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Charger />)
    }).not.toThrow()
  })
})
