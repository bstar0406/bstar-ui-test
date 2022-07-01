import { useFetch } from '../hooks/useFetch'
import Button from '@mui/material/Button'
interface IPropsButton {
  name: string
  url: string
  fetchData: Function
}
const ButtonComponent = ({ name, url, fetchData }: IPropsButton) => {
  const data = useFetch(url)
  const clickHandler = (e:any) => {
    e.preventDefault();
    fetchData(data)
    // localStorage.setItem( name, JSON.stringify(data));
  }
  return (
    <Button variant="contained" color="success" onClick={(e)=>clickHandler(e)}>
      {name}
    </Button>
  )
}

export default ButtonComponent
