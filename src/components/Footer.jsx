import { SocialLinks } from "./SocialLinks"

export function Footer() {
  return (
    <div className="pr-10 flex sm:justify-between justify-center border-t py-4 border-gray-800 items-center gap-10 max-sm:flex-col bg-black">
      <p className="caption text-n-4 lg:block">
        © {new Date().getFullYear()}. All rights reserved.
      </p>
      <SocialLinks />
    </div>
  )
}
