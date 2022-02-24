import type { FindShadeQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query FindShadeQuery($id: Int!) {
    shade: shade(id: $id) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ shade }: CellSuccessProps<FindShadeQuery>) => {
  return <div>{JSON.stringify(shade)}</div>
}
