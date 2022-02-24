import type { FindFlagQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query FindFlagQuery($id: Int!) {
    flag: flag(id: $id) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ flag }: CellSuccessProps<FindFlagQuery>) => {
  return <div>{JSON.stringify(flag)}</div>
}
