import type { FindMouseQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query FindMouseQuery($id: Int!) {
    mouse: mouse(id: $id) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ mouse }: CellSuccessProps<FindMouseQuery>) => {
  return <div>{JSON.stringify(mouse)}</div>
}
