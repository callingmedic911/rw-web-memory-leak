import type { FindFlowerQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query FindFlowerQuery($id: Int!) {
    flower: flower(id: $id) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ flower }: CellSuccessProps<FindFlowerQuery>) => {
  return <div>{JSON.stringify(flower)}</div>
}
