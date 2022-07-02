import axios from 'axios'
export const getDataAsync = async (url: string) => {
  const response = await axios.get(url)
  return response.data
}
