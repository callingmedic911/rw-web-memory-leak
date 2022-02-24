import type { FindPaperQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query FindPaperQuery($id: Int!) {
    paper: paper(id: $id) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ paper }: CellSuccessProps<FindPaperQuery>) => {
  return <div>{JSON.stringify(paper)}</div>
}
