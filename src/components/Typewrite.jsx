import { useState, useEffect } from "react"

const roles = ["Web Developer", "Frontend Developer", "Software Engineer"]

export default function Typewriter({ text }) {
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    if (subIndex === roles[index].length + 1 && !isDeleting) {
      setTimeout(() => setIsDeleting(true), 1000)
      return
    }

    if (subIndex === 0 && isDeleting) {
      setIsDeleting(false)
      setIndex((prev) => (prev + 1) % roles.length)
      return
    }

    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => prev + (isDeleting ? -1 : 1))
      },
      isDeleting ? 50 : 100
    )

    return () => clearTimeout(timeout)
  }, [subIndex, index, isDeleting])

  return (
    <h1 className="flex items-start md:text-4xl text-3xl section-title">
      {text}
      <span className="pl-2">
        <h3 className="font-bold text-color-softBlue">{`${roles[
          index
        ].substring(0, subIndex)}`}</h3>
      </span>
    </h1>
  )
}
