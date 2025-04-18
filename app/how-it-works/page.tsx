import { Navigation } from "@/components/navigation"
import { ThemeToggle } from "@/components/theme-toggle"

export default function HowItWorks() {
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

        {/* Main Content Area */}
        <div className="flex-1 p-6 md:p-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-yellow-900 dark:text-yellow-100">How It Works</h2>

            <div className="space-y-6 text-yellow-900 dark:text-yellow-100">
              <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">Creating and Managing Notes</h3>
                <p className="mb-3">
                  Our online notepad allows you to create multiple notes that are automatically saved to your browser's
                  local storage.
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Create new notes by clicking the + button in the tab bar</li>
                  <li>Switch between notes by clicking on the tabs</li>
                  <li>Delete notes by hovering over a tab and clicking the X button</li>
                  <li>All your notes are automatically saved as you type</li>
                </ul>
              </section>

              <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">Formatting Your Text</h3>
                <p className="mb-3">Use the formatting toolbar to style your notes:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Bold, italic, and underline formatting</li>
                  <li>Bullet points and numbered lists</li>
                  <li>Text alignment options</li>
                </ul>
              </section>

              <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">Additional Features</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Search within your notes to find specific content</li>
                  <li>Export your notes as text files</li>
                  <li>Toggle between light and dark mode</li>
                  <li>Character counter to track note length</li>
                </ul>
              </section>

              <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">Privacy and Data</h3>
                <p>
                  All your notes are stored locally in your browser. We don't store any of your data on our servers,
                  ensuring complete privacy. However, this means your notes won't be accessible from other devices or
                  browsers.
                </p>
              </section>
            </div>
          </div>
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
