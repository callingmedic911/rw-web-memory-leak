import type { FindSpoonQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query FindSpoonQuery($id: Int!) {
    spoon: spoon(id: $id) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ spoon }: CellSuccessProps<FindSpoonQuery>) => {
  return <div>{JSON.stringify(spoon)}</div>
}
