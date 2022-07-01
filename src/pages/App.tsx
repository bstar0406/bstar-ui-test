import { useState } from 'react'
import Button from '../components/Button'
import {apis} from '../shared/config'
import DisplayBoard from '../components/DisplayBoard'
function App() {
  const [data, setData] = useState(null)
  const fetchData = (val:any) =>{
    setData(val)
  }
  return (
    <div className="container">
      <div className="d-flex justify-content-around mt-5 mb-4">
        <Button name='API 1' url={apis.api1} fetchData={fetchData} />
        <Button name='API 2' url={apis.api2} fetchData={fetchData}  />
        <Button name='API 3' url={apis.api3} fetchData={fetchData} />
      </div>
      <div className="d-flex justify-content-around">
        <DisplayBoard data={data} />
      </div>
    </div>
  )
}

export default App
