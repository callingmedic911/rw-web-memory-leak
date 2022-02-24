import type { FindChairQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query FindChairQuery($id: Int!) {
    chair: chair(id: $id) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ chair }: CellSuccessProps<FindChairQuery>) => {
  return <div>{JSON.stringify(chair)}</div>
}
