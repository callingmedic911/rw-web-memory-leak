import type { FindSpeakerQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query FindSpeakerQuery($id: Int!) {
    speaker: speaker(id: $id) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ speaker }: CellSuccessProps<FindSpeakerQuery>) => {
  return <div>{JSON.stringify(speaker)}</div>
}
