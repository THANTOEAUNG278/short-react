const API_BASE = import.meta.env.VITE_API_BASE;

const fetchData = async(url, body, method = 'GET') => {
  const endPoint = API_BASE + url
  try {
    const response = await fetch(endPoint,{
      method: method,
      body:JSON.stringify(body),
      headers: {"Content-Type": "application/json", "Accept-Type": "" }
    })
    const result = response.json();
    return result;
  } catch (error) {
    console.log("error",error)
    throw new Error("Network response was not OK")
  }
}
export default fetchData;