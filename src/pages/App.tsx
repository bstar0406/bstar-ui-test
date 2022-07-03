import { apis } from '../shared/config'
import DisplayBoard from '../components/DisplayBoard'
import { getDataAsync } from '../shared/service'
import Button from '@mui/material/Button'
import React, { CSSProperties } from 'react'
import Snackbar from '@mui/material/Snackbar'
import MuiAlert, { AlertProps } from '@mui/material/Alert'
import PulseLoader from 'react-spinners/PulseLoader'

const override: CSSProperties = {
  display: 'block',
  margin: '0 auto',
  borderColor: 'yellow',
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

function App() {
  const [data, setData] = React.useState([])
  const [open, setOpen] = React.useState(false)
  const [success, setSuccess] =  React.useState(false)

  const [color, setColor] = React.useState('#36D7B7')
  const [loading, setLoading] = React.useState(false)
  React.useEffect(()=>{
    setColor('#36D7B7')
  },[])
  const fetchData = async (url: any) => {
    setLoading(true)
    const tempData: any = await getDataAsync(url)
    setLoading(false)
    setData(tempData)
    setSuccess(true)
    setOpen(true)
  }
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string,
  ) => {
    if (reason === 'clickaway') {
      return
    }
    setOpen(false)
  }
  return (
    <div className='app'>
      {loading && <div className="spinner d-flex justify-content-center align-items-center">
        <PulseLoader
          color={color}
          cssOverride={override}
          size={35}
          speedMultiplier={1.2}
        />
      </div>}
      <div className="container pt-5">
        <div className="d-flex justify-content-around mb-4">
          <Button
            variant="contained"
            color="success"
            onClick={() => fetchData(apis.api1)}
          >
            APi1
          </Button>
          <Button
            variant="contained"
            color="success"
            onClick={() => fetchData(apis.api2)}
          >
            APi2
          </Button>
          <Button
            variant="contained"
            color="success"
            onClick={() => fetchData(apis.api3)}
          >
            APi3
          </Button>
        </div>
        <div className="d-flex justify-content-around">
          <DisplayBoard data={data} />
        </div>
        <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity={success?'success':'warning'}
            sx={{ width: '100%' }}
          >
            {success?'Fetched Successfully!':'Failed'}
          </Alert>
        </Snackbar>
      </div>
      
    </div>
  )
}

export default App
