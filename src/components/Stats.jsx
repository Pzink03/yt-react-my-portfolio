import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
  {
    num: 2,
    text: "Years of experience",
  },
  {
    num: 12,
    text: "Projects Completed",
  },
  {
    num: 321,
    text: "Code Commits",
  },
];


function StatItem({ num, text }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: .1,
  });

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
  );
}

export function Stats() {
  return (
    <section>
      <div className="mx-auto font-jetbrains">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none justify-center">
          {stats.map((item, index) => (
            <StatItem key={index} num={item.num} text={item.text} />
          ))}
        </div>
      </div>
    </section>
  );
}
