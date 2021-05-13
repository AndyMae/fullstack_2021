import axios from 'axios'
const baseUrl = '/api/blogs'

let token = null

const setToken = newToken => {
  token = `bearer ${newToken}`
}

const getAll = () => {

  const config = {
    headers: { Authorization: token },
  }

  const request = axios.get(baseUrl, config)
  return request.then(response => response.data)
}

const create = async newBlog => {
  const config = {
    headers: { Authorization: token },
  }

  const response = await axios.post(baseUrl, newBlog, config)
  console.log('response in axios')
  console.log(response)
  console.log(response.data)
  return response.data
}

const change = async (newBlog) => {
  const config = {
    headers: { Authorization: token },
  }

  console.log(newBlog)

  const response = await axios.put(`${baseUrl}/${newBlog.id}`, newBlog, config)
  console.log('response in axios')
  console.log(response)
  console.log(response.data)
  return response.data
}

const addComment = async (commentString, id) => {
  const config = {
    headers: { Authorization: token },
  }
  console.log('COMMENT IN AXIOS')
  const comment = {
    comment: commentString
  }

  const response = await axios.post(`${baseUrl}/${id}/comments`, comment, config)
  return response.data
}

const remove = async (id) => {
  const config = {
    headers: { Authorization: token },
  }

  const response = await axios.delete(`${baseUrl}/${id}`, config)
  console.log('response in axios')
  console.log(response)
}

export default { getAll, create, setToken, change, addComment, remove }