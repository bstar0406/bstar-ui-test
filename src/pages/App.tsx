import { apis } from '../shared/config'
import DisplayBoard from '../components/DisplayBoard'
import { getDataAsync } from '../shared/service'
import Button from '@mui/material/Button'
import React from 'react'
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function App() {
  const [data, setData] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const fetchData = async (url:any) => {
    const tempData:any = await getDataAsync(url)
    setData(tempData)
    setOpen(true);
  }
  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };
  return (
    <div className="container">
      <div className="d-flex justify-content-around mt-5 mb-4">
        <Button variant="contained" color="success" onClick={() => fetchData(apis.back_api1)}>
          APi1
        </Button>
        <Button variant="contained" color="success" onClick={() => fetchData(apis.back_api2)}>
          APi2
        </Button>
        <Button variant="contained" color="success" onClick={() => fetchData(apis.back_api3)}>
          APi3
        </Button>
      </div>
      <div className="d-flex justify-content-around">
        <DisplayBoard data={data} />
      </div>
      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose} >
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Fetched Successfully!
        </Alert>
      </Snackbar>
    </div>
  )
}

export default App
