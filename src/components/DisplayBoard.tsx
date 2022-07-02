import { DataGrid, GridColDef } from '@mui/x-data-grid';
import React from 'react';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'No', width: 70},
  { field: 'poster', headerName: 'Poster', width: 130, flex:1, renderCell: (params) => {
    return (
      <>
        <img
          src={params.value.src!=="N/A"?params.value.src:'../assets/images/default.png'}
          width="50px"
          height="50px"
          alt="poster"
        />
      </>
    );
  } },
  { field: 'title', headerName: 'Title', width: 130, flex:1 },
  {
    field: 'type',
    headerName: 'Type',
    width: 90,
    flex:1
  },
  {
    field: 'year',
    headerName: 'Year',
    width: 90, 
    flex:1
  },
  {
    field: 'imdbID',
    headerName: 'imdbID',
    width: 90,
    flex:1
  },
];

interface IPropsDisplayBoard {
  data: any
}
const DisplayBoard = ({ data }: IPropsDisplayBoard) => {
  const [rows, setRows] = React.useState<Array<any>>([]);
  React.useEffect(()=>{
    let temp:Array<any> = [];
    if(data){
      data.map((item: any, index: number) => {
        temp.push({
          id:index+1,
          poster:{src:(item as any).Poster},
        title:item.Title,
        type:item.Type,
        year:item.Year,
        imdbID:item.imdbID
        })
        setRows(temp);
        return item;
      })
    }
    console.log(data)
  },[data])
  return (
    <div className="container" style={{ height: 500, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
      />
    </div>
  )
}

export default DisplayBoard;