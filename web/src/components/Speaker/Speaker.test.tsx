import { render } from '@redwoodjs/testing/web'

import Speaker from './Speaker'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Speaker', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Speaker />)
    }).not.toThrow()
  })
})
