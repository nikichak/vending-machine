export const fetchGet = async (url: string) => {
    const response = await fetch(url)
    const responseData = await response.json()
  
    if (!response.ok) {
      throw new Error(responseData.error)
    }
    return responseData
  }
  
  export const fetchPost = async (url: string, data: any) => {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
  
    if (!response.ok) {
      const responseData = await response.json()
      throw new Error(responseData.error)
    }
    return response
  }
  
  export const fetchDelete = async (url: string) =>
    await fetch(url, {
      method: 'DELETE'
    })