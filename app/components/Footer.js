import React from 'react'

function Footer() {
  return (
    <div>
      <footer class="rounded-lg shadow ">
        <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <div class="sm:flex sm:items-center sm:justify-between">
                <a href="https://flowbite.com/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                </a>
                <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                    <li>
                        <a href="#" class="hover:underline me-4 md:me-6">Home</a>
                    </li>
                    <li>
                        <a href="#" class="hover:underline me-4 md:me-6">Resume</a>
                    </li>
                    <li>
                        <a href="#" class="hover:underline me-4 md:me-6">Lab</a>
                    </li>
                    <li>
                        <a href= "mailto: szhanerz@gmail.com" class="hover:underline">Send Email</a>
                    </li>
                </ul>
            </div>
            <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024  <a href="https://github.com/zhvner" class="hover:underline">Zhanerke Zhumash</a>. All Rights Reserved.</span>
        </div>
    </footer>
    </div>
  )
}

export default Footer
