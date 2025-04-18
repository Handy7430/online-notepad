import { Navigation } from "@/components/navigation"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
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
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-yellow-900 dark:text-yellow-100">Contact Us</h2>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <p className="mb-6 text-yellow-900 dark:text-yellow-100">
                Have questions, feedback, or need assistance? We'd love to hear from you! Fill out the form below and
                we'll get back to you as soon as possible.
              </p>

              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-medium text-yellow-900 dark:text-yellow-100">
                      Name
                    </label>
                    <Input id="name" placeholder="Your name" className="w-full" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium text-yellow-900 dark:text-yellow-100">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="your.email@example.com" className="w-full" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="block text-sm font-medium text-yellow-900 dark:text-yellow-100">
                    Subject
                  </label>
                  <Input id="subject" placeholder="What is this regarding?" className="w-full" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium text-yellow-900 dark:text-yellow-100">
                    Message
                  </label>
                  <Textarea id="message" placeholder="Your message..." className="w-full min-h-[150px]" />
                </div>

                <Button
                  type="submit"
                  className="bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700"
                >
                  Send Message
                </Button>
              </form>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-yellow-900 dark:text-yellow-100">Email Us</h3>
                <p className="text-yellow-900 dark:text-yellow-100">
                  For general inquiries:
                  <br />
                  <a
                    href="mailto:info@onlinenotepad.com"
                    className="text-yellow-600 dark:text-yellow-400 hover:underline"
                  >
                    info@onlinenotepad.com
                  </a>
                </p>
                <p className="mt-2 text-yellow-900 dark:text-yellow-100">
                  For support:
                  <br />
                  <a
                    href="mailto:support@onlinenotepad.com"
                    className="text-yellow-600 dark:text-yellow-400 hover:underline"
                  >
                    support@onlinenotepad.com
                  </a>
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-yellow-900 dark:text-yellow-100">Follow Us</h3>
                <p className="text-yellow-900 dark:text-yellow-100 mb-3">
                  Stay updated with our latest features and announcements:
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-yellow-600 dark:text-yellow-400 hover:underline">
                    Twitter
                  </a>
                  <a href="#" className="text-yellow-600 dark:text-yellow-400 hover:underline">
                    Facebook
                  </a>
                  <a href="#" className="text-yellow-600 dark:text-yellow-400 hover:underline">
                    Instagram
                  </a>
                </div>
              </div>
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
