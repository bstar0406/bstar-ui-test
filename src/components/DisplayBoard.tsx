import React from 'react'
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { makeStyles, withStyles } from '@mui/styles';
import {apis}  from '../shared/config'
const useStyles = makeStyles({
  root: {
      '&.MuiDataGrid-root .MuiDataGrid-cell:focus': {
          outline: 'none',
      },
  }
});

const StyledDataGrid = withStyles({
  root: {
      '& .MuiDataGrid-renderingZone': {
          maxHeight: 'none !important',
      },
      '& .MuiDataGrid-cell': {
          lineHeight: 'unset !important',
          maxHeight: 'none !important',
          whiteSpace: 'normal',
      },
      '& .MuiDataGrid-row': {
          maxHeight: 'none !important',
      },
  },
})(DataGrid);

const columns: GridColDef[] = [
  { field: 'id', headerName: 'No', width: 70},
  { field: 'poster', headerName: 'Poster', width: 130, flex:1, renderCell: (params) => {
    return (
      <div className='py-3'>
        <img
          src={apis.server+params.value.src}
          width="100px"
          height="100px"
          alt="poster"
        />
      </div>
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
  const classes = useStyles();
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
  },[data])
  return (
    <div className="container" style={{ height: 500, width: '100%' }}>
      <StyledDataGrid
        className={classes.root}
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
      />
    </div>
  )
}

export default DisplayBoard;