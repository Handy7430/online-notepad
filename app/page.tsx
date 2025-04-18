import Notepad from "@/components/notepad"
import { ThemeToggle } from "@/components/theme-toggle"
import { Navigation } from "@/components/navigation"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-yellow-50 dark:bg-gray-900">
      <header className="bg-yellow-200 dark:bg-yellow-800 p-4 border-b border-yellow-400 dark:border-yellow-700">
        <div className="flex justify-between items-center mb-2">
          <h1 className="text-2xl font-bold text-yellow-900 dark:text-yellow-100">Online Notepad</h1>
          <ThemeToggle />
        </div>
        <Navigation />
      </header>

      <div className="flex-1 flex">
        {/* Left Ad Space */}
        <div className="hidden md:block w-48 bg-gray-100 dark:bg-gray-800 p-4 border-r border-gray-200 dark:border-gray-700">
          <div className="h-full flex items-center justify-center bg-gray-200 dark:bg-gray-700 rounded">
            <p className="text-gray-500 dark:text-gray-400 text-center">Advertisement Space</p>
          </div>
        </div>

        {/* Main Notepad Area */}
        <div className="flex-1 flex flex-col p-4">
          <Notepad />
        </div>

        {/* Right Ad Space */}
        <div className="hidden md:block w-48 bg-gray-100 dark:bg-gray-800 p-4 border-l border-gray-200 dark:border-gray-700">
          <div className="h-full flex items-center justify-center bg-gray-200 dark:bg-gray-700 rounded">
            <p className="text-gray-500 dark:text-gray-400 text-center">Advertisement Space</p>
          </div>
        </div>
      </div>

      {/* Bottom Ad Space */}
      <div className="h-24 bg-gray-100 dark:bg-gray-800 p-4 border-t border-gray-200 dark:border-gray-700">
        <div className="h-full flex items-center justify-center bg-gray-200 dark:bg-gray-700 rounded">
          <p className="text-gray-500 dark:text-gray-400 text-center">Advertisement Space</p>
        </div>
      </div>
    </main>
  )
}
