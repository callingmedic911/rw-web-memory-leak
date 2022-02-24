import type { FindCameraQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query FindCameraQuery($id: Int!) {
    camera: camera(id: $id) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ camera }: CellSuccessProps<FindCameraQuery>) => {
  return <div>{JSON.stringify(camera)}</div>
}
