import { useEffect, useState } from "react"

export default function FetchCommits({ number, title }) {
  const [data, setData] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    setData(undefined)
    setIsError(false)
    setIsLoading(true)

    const controller = new AbortController()
    const url = "https://api.github.com/repos/Pzink03/GabHub/commits"

    fetch(url, { signal: controller.signal })
      .then((res) => {
        if (res.status === 200) {
          return res.json()
        }
        return Promise.reject(res)
      })
      .then(setData)
      .catch((e) => {
        if (e.name === "AbortError") return
        setIsError(true)
      })
      .finally(() => {
        if (controller.signal.aborted) return
        setIsLoading(false)
      })
    return () => {
      controller.abort()
    }
  }, [])

  return { data, isLoading, isError }
}
