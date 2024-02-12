import { FC, ReactNode } from "react"
import Logo from "@/components/atoms/Logo"
import ThemeSwitcher from "@/components/molecules/ThemeSwitcher"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ThemeProvider } from "@/components/theme-provider"

type Prop = {
  children: ReactNode
}

const Component: FC<Prop> = ({ children }) => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex flex-col min-h-screen min-w-full bg-background max-h-screen">
        <nav className="flex justify-between items-center border-b border-border h-[60px] px-4 py-2">
          <Logo />
          <div className="flex gap-4 items-center">
            <ThemeSwitcher />
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>USER</AvatarFallback>
            </Avatar>
          </div>
        </nav>
        <main className="flex w-full flex-grow">{children}</main>
      </div>
    </ThemeProvider>
  )
}

export default Component