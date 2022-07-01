// import { apis } from '../shared/config'

interface IPropsDisplayBoard {
  data: any
}
const DisplayBoard = ({ data }: IPropsDisplayBoard) => {
  return (
    <div className="container">
      <table className="table table-dark">
        <thead>
          <tr>
            <td>Title</td>
            <td>Type</td>
            <td>Year</td>
            <td>imdbID</td>
            <td>Poster</td>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((item: any, index: number) => {
              return (
                <tr key={index}>
                  
                  <td>{(item as any).Title}</td>
                  <td>{(item as any).Type}</td>
                  <td>{(item as any).Year}</td>
                  <td>{(item as any).imdbID}</td>
                  <td>
                    {/* <img
                      src={apis.server+(item as any).Poster}
                      width="50px"
                      height="50px"
                      alt="poster"
                    /> */}
                    <img
                      src={(item as any).Poster}
                      width="50px"
                      height="50px"
                      alt="poster"
                    />
                  </td>
                </tr>
              )
            })}
        </tbody>
      </table>
    </div>
  )
}

export default DisplayBoard
