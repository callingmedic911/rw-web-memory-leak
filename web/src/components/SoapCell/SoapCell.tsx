import type { FindSoapQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query FindSoapQuery($id: Int!) {
    soap: soap(id: $id) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ soap }: CellSuccessProps<FindSoapQuery>) => {
  return <div>{JSON.stringify(soap)}</div>
}
