import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
    { name: 'Sell or Buy', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Policy', href: '#' },
    { name: 'About Us', href: '#' },
]

export default function Example() {
    return (
        <div className="relative overflow-hidden bg-white">
            <div className="mx-auto max-w-7xl">
                <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
                    <svg
                        className="absolute inset-y-0 right-0 hidden w-48 h-full text-white transform translate-x-1/2 lg:block"
                        fill="currentColor"
                        viewBox="0 0 100 100"
                        preserveAspectRatio="none"
                        aria-hidden="true"
                    >
                        <polygon points="50,0 100,0 50,100 0,100" />
                    </svg>

                    <Popover>
                        <div className="relative px-4 pt-6 sm:px-6 lg:px-8">
                            <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
                                <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                                    <div className="flex items-center justify-between w-full md:w-auto">
                                        <a href="#">
                                            <span className="sr-only">Your Company</span>
                                            <img
                                                alt="Your Company"
                                                className="w-auto h-14 sm:h-14"
                                                src="https://img.icons8.com/external-flatart-icons-solid-flatarticons/64/000000/external-dustbin-ux-and-ui-flatart-icons-solid-flatarticons.png"
                                            />
                                        </a>
                                        <div className="flex items-center -mr-2 md:hidden">
                                            <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                                <span className="sr-only">Open main menu</span>
                                                <Bars3Icon className="w-6 h-6" aria-hidden="true" />
                                            </Popover.Button>
                                        </div>
                                    </div>
                                </div>
                                <div className="hidden md:ml-10 md:block md:space-x-8 md:pr-4">
                                    {navigation.map((item) => (
                                        <a key={item.name} href={item.href} className="font-semibold text-gray-500 hover:text-gray-900">
                                            {item.name}
                                        </a>
                                    ))}
                                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                        Log in
                                    </a>
                                </div>
                            </nav>
                        </div>

                        <Transition
                            as={Fragment}
                            enter="duration-150 ease-out"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="duration-100 ease-in"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Popover.Panel
                                focus
                                className="absolute inset-x-0 top-0 z-10 p-2 transition origin-top-right transform md:hidden"
                            >
                                <div className="overflow-hidden bg-white rounded-lg shadow-md ring-1 ring-black ring-opacity-5">
                                    <div className="flex items-center justify-between px-5 pt-4">
                                        <div>
                                            <img
                                                className="w-auto h-14"
                                                src="https://img.icons8.com/external-flatart-icons-solid-flatarticons/64/000000/external-dustbin-ux-and-ui-flatart-icons-solid-flatarticons.png"
                                                alt=""
                                            />
                                        </div>
                                        <div className="-mr-2">
                                            <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                                <span className="sr-only">Close main menu</span>
                                                <XMarkIcon className="w-6 h-6" aria-hidden="true" />
                                            </Popover.Button>
                                        </div>
                                    </div>
                                    <div className="px-2 pt-2 pb-3 space-y-1">
                                        {navigation.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:bg-gray-50 hover:text-gray-900"
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                    <a
                                        href="#"
                                        className="block w-full px-5 py-3 font-medium text-center text-indigo-600 bg-gray-50 hover:bg-gray-100"
                                    >
                                        Log in
                                    </a>
                                </div>
                            </Popover.Panel>
                        </Transition>
                    </Popover>

                    <main className="px-4 mx-auto mt-10 tracking-wide max-w-7xl sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                        <div className="sm:text-center lg:text-left">
                            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
                                <span className="block xl:inline">Way to enrich your</span>{' '}
                                <span className="block text-indigo-600 xl:inline">life and surroundings.</span>
                            </h1>
                            <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                            Refuse what you do not need; reduce what you do need; reuse what you consume, recycle what you cannot refuse, reduce, or reuse, and rot the rest."
                            </p>
                            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                <div className="rounded-md shadow">
                                    <a
                                        href="#"
                                        className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg"
                                    >
                                        Get started
                                    </a>
                                </div>
                                <div className="mt-3 sm:mt-0 sm:ml-3">
                                    <a
                                        href="#"
                                        className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-indigo-700 bg-indigo-100 border border-transparent rounded-md shadow hover:bg-indigo-200 md:py-4 md:px-10 md:text-lg"
                                    >
                                        Add Bin
                                    </a>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
            <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                <img
                    className="object-cover w-full h-56 sm:h-72 md:h-96 lg:h-full lg:w-full"
                    src="https://drive.google.com/uc?export=view&id=1aNoMKWJTJzHUUwmgLfMP4J-js3KhS3dP"
                    alt=""
                />
            </div>
        </div>
    )
}
