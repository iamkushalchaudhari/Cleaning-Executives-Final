export default function Example() {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <div className="overflow-y-auto border-4 border-black rounded-lg w-96">

        <nav class="bg-white px-2 sm:px-4 py-2.5 border-t rounded-lg">
          <div class=" flex flex-wrap justify-between items-center mx-auto">
            <a href="/" class="flex items-center">
              <img src="https://img.icons8.com/external-flatart-icons-solid-flatarticons/64/000000/external-dustbin-ux-and-ui-flatart-icons-solid-flatarticons.png" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
              <span class="self-center text-xl font-semibold whitespace-nowrap ">Cleaning Executives</span>
            </a>
            <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 " aria-controls="navbar-default" aria-expanded="false">
              <span class="sr-only">Open main menu</span>
              <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            </button>
            <div class="hidden w-full md:block md:w-auto" id="navbar-default">
              <ul class="flex flex-col p-4 mt-4 bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:bg-white lg:font-semibold lg:text-base tracking-wide ">
                <li>
                  <a href="/" class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Home</a>
                </li>
                <li>
                  <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ">Contact</a>
                </li>
                <li>
                  <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ">Services</a>
                </li>
                <li>
                  <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ">About</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div>
          <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1SuhYzEDPunVhVCimhDAjrvH_mPd9h38&ehbc=2E312F" width="100%" height="400"></iframe>
        </div>

        <ol class="relative border-l border-gray-200">
          <li class="mb-10 ml-4">
            <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
            <time class="mb-1 text-sm font-normal leading-none text-gray-400">February 2022</time>
            <h3 class="text-lg font-semibold text-gray-900">Application UI code in Tailwind CSS</h3>
            <p class="mb-4 text-base font-normal text-gray-500 ">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce &amp; Marketing pages.</p>
          </li>
          <li class="mb-10 ml-4">
            <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
            <time class="mb-1 text-sm font-normal leading-none text-gray-400">March 2022</time>
            <h3 class="text-lg font-semibold text-gray-900">Marketing UI design in Figma</h3>
            <p class="text-base font-normal text-gray-500 ">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p>
          </li>
          <li class="ml-4">
            <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
            <time class="mb-1 text-sm font-normal leading-none text-gray-400">April 2022</time>
            <h3 class="text-lg font-semibold text-gray-900">E-Commerce UI code in Tailwind CSS</h3>
            <p class="text-base font-normal text-gray-500">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
          </li>
        </ol>

      </div>
    </div>
  );
};