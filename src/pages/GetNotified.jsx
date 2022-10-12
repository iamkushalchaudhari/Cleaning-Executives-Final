export default function Example (){
   return (
        <div className="bg-gray-50">
            <div className="px-4 py-12 mx-auto tracking-wide max-w-7xl sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lgpx-8">
                <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                    <span className="block">Ready to Dive In?</span>
                    <span className="block text-indigo-600">Get Notified and Start Cleaning your City Now.</span>
                </h2>
                <div className="flex mt-8 lg:mt-0 lg:flex-shrink-0">
                    <div className="inline-flex space-x-2 rounded-md">
                        <div>
                            <label htmlFor="email-address" className="sr-only">
                                Enter your Email Address
                            </label>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                className="py-3 pl-4 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md shadow w-80 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-base"
                                placeholder="Email address"
                                />
                        </div>
                        <a href="#"
                        className="inline-flex items-center justify-center px-8 py-1 text-base font-medium text-white bg-indigo-600 border-transparent rounded-md shadow hover:bg-indigo-700 ">Get Notified</a>
                    </div>
                </div>
            </div>
        </div>
    );
};