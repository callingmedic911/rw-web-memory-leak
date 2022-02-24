import type { FindCandleQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query FindCandleQuery($id: Int!) {
    candle: candle(id: $id) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ candle }: CellSuccessProps<FindCandleQuery>) => {
  return <div>{JSON.stringify(candle)}</div>
}
