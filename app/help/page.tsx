import { Navigation } from "@/components/navigation"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Help() {
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
            <h2 className="text-3xl font-bold mb-6 text-yellow-900 dark:text-yellow-100">Help & FAQ</h2>

            <div className="space-y-6 text-yellow-900 dark:text-yellow-100">
              <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">Frequently Asked Questions</h3>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-1">Are my notes saved automatically?</h4>
                    <p>Yes, all your notes are automatically saved to your browser's local storage as you type.</p>
                  </div>

                  <div>
                    <h4 className="font-medium mb-1">Can I access my notes from another device?</h4>
                    <p>
                      No, since notes are stored in your browser's local storage, they are only available on the device
                      and browser where you created them.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-medium mb-1">Is there a limit to how many notes I can create?</h4>
                    <p>
                      There's no hard limit, but browser storage is limited. For best performance, we recommend keeping
                      under 100 notes.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-medium mb-1">What happens if I clear my browser data?</h4>
                    <p>
                      If you clear your browser data or local storage, your notes will be deleted. Consider exporting
                      important notes regularly.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-medium mb-1">Can I format my text with different colors or fonts?</h4>
                    <p>
                      Currently, we support basic formatting like bold, italic, underline, and lists. We're working on
                      adding more formatting options in the future.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-medium mb-1">How do I search within my notes?</h4>
                    <p>
                      Use the search bar in the formatting toolbar. Type your search term and press Enter to find
                      matches within the current note.
                    </p>
                  </div>
                </div>
              </section>

              <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">Troubleshooting</h3>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-1">My notes disappeared</h4>
                    <p>
                      This usually happens if you've cleared your browser data or are using a different browser/device.
                      Unfortunately, notes can't be recovered if local storage was cleared.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-medium mb-1">The editor isn't working properly</h4>
                    <p>
                      Try refreshing the page. If problems persist, try using a different browser or clearing your
                      browser cache (note: this will delete your saved notes).
                    </p>
                  </div>

                  <div>
                    <h4 className="font-medium mb-1">Text formatting isn't working</h4>
                    <p>
                      Make sure you have text selected when applying formatting. Some browsers may have restrictions on
                      the execCommand API we use for formatting.
                    </p>
                  </div>
                </div>
              </section>

              <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">Keyboard Shortcuts</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="flex justify-between">
                    <span>Bold</span>
                    <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">Ctrl+B</code>
                  </div>
                  <div className="flex justify-between">
                    <span>Italic</span>
                    <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">Ctrl+I</code>
                  </div>
                  <div className="flex justify-between">
                    <span>Underline</span>
                    <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">Ctrl+U</code>
                  </div>
                  <div className="flex justify-between">
                    <span>Search</span>
                    <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">Ctrl+F</code>
                  </div>
                </div>
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
