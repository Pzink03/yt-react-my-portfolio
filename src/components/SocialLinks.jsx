import { links } from "../constants"

export function SocialLinks() {
  return (
    <ul className="gap-4 pb-2 rounded-2xl flex">
      {links.map((icon) => (
        <li key={icon.id}>
          <a
            className="flex items-center p-1.5 justify-center md:w-12 md:h-12 w-8 h-8 rounded-full social-icons border-2 border-color-softBlue hover:bg-color-softBlue hover:shadow-[0_0_15px_5px] hover:shadow-color-softBlue transition-all duration-300 ease-in-out text-color-softBlue hover:text-white"
            href={icon.href}
            {...(icon.download ? { download: true } : {})}
            {...(!icon.href.startsWith("mailto:") && !icon.download
              ? { target: "_blank", rel: "noreferrer" }
              : {})}
          >
            {icon.child}
          </a>
        </li>
      ))}
    </ul>
  )
}
