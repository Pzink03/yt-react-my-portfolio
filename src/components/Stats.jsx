import { useEffect, useState } from "react"
import CountUp from "react-countup"
import { useInView } from "react-intersection-observer"

function StatItem({ num, text }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div
      ref={ref}
      className="flex-1 flex gap-4 items-center justify-start xl:justify-start"
    >
      {inView ? (
        <CountUp
          end={num}
          duration={5}
          delay={0.5}
          className="text-4xl xl:text-6xl font-extrabold"
        />
      ) : (
        <span className="text-4xl xl:text-6xl font-extrabold">0</span>
      )}
      <p
        className={`${
          text.length < 19 ? "max-w-[100px]" : "max-w-[150px]"
        } leading-snug text-white/80`}
      >
        {text}
      </p>
    </div>
  )
}

export function Stats() {
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [commitCount, setCommitCount] = useState(0)

  useEffect(() => {
    setIsError(false)
    setIsLoading(true)

    const controller = new AbortController()
    const username = "Pzink03"
    const reposUrl = `https://api.github.com/users/${username}/repos`

    fetch(reposUrl, { signal: controller.signal })
      .then((res) => {
        if (res.status === 200) {
          return res.json()
        }
        return Promise.reject(res)
      })
      .then((repos) => {
        // Get commit counts for each repository
        const commitPromises = repos.map((repo) => {
          const commitsUrl = `https://api.github.com/repos/${username}/${repo.name}/commits`
          return fetch(commitsUrl, { signal: controller.signal })
            .then((res) => (res.ok ? res.json() : []))
            .then((data) => data.length)
            .catch(() => 0)
        })

        return Promise.all(commitPromises)
      })
      .then((commitCounts) => {
        // Sum up all commits across repos
        setCommitCount(commitCounts.reduce((acc, count) => acc + count, 0))
      })
      .catch((e) => {
        if (e.name === "AbortError") return
        setIsError(true)
      })
      .finally(() => {
        if (controller.signal.aborted) return
        setIsLoading(false)
      })

    return () => controller.abort()
  }, [])

  return (
    <section>
      <div className="mx-auto font-jetbrains">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none justify-center">
          <StatItem num={2} text="Years of Experience" />
          <StatItem num={12} text="Projects Completed" />

          {isLoading && <p>Loading...</p>}
          {isError && <p>Error loading commits.</p>}
          {!isLoading && !isError && (
            <StatItem num={commitCount} text="Code Commits" />
          )}
        </div>
      </div>
    </section>
  )
}
