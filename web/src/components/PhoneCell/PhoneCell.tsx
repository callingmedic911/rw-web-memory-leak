import type { FindPhoneQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query FindPhoneQuery($id: Int!) {
    phone: phone(id: $id) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ phone }: CellSuccessProps<FindPhoneQuery>) => {
  return <div>{JSON.stringify(phone)}</div>
}
