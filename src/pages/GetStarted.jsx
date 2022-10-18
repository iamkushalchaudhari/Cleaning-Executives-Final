export default function Example() {
    return(
        <section class="bg-gray-50 ">
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="/" class="flex items-center mb-2 text-2xl font-semibold text-gray-900 ">
          <img class="w-12 h-12 mr-2" src="https://img.icons8.com/external-flatart-icons-solid-flatarticons/64/000000/external-dustbin-ux-and-ui-flatart-icons-solid-flatarticons.png" alt="logo"/>
          Cleaning Executives    
      </a>
      <div class="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 ">
          <div class="p-6 space-y-2 md:space-y-4 sm:p-8">
              <h1 class="text-xl font-bold text-center leading-tight tracking-normal text-gray-900 md:text-2xl ">
                  Create an account
              </h1>
              <form class="space-y-4 md:space-y-6" action="#">
                 
                  {/* Your Email */}
                  <div>
                      <label for="email" class="block mb-2 text-base font-medium text-gray-900 ">Your email</label>
                      <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-base rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="name@company.com or @gmail.com" required=""/>
                  </div>
                
                  {/* Password */}
                  <div>
                      <label for="password" class="block mb-2 text-base font-medium text-gray-900 ">Password</label>
                      <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-base rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " required=""/>
                  </div>
                
                  {/* Confirm Password */}
                  <div>
                      <label for="confirm-password" class="block mb-2 text-base font-medium text-gray-900 ">Confirm password</label>
                      <input type="confirm-password" name="confirm-password" id="confirm-password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-base rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " required=""/>
                  </div>
                
                  {/* Checkbox */}
                  <div class="flex items-start">
                      <div class="flex items-center h-5">
                        <input id="terms" aria-describedby="terms" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 " required=""/>
                      </div>
                      <div class="ml-3 text-base">
                        <label for="terms" class="font-light text-gray-500 ">I accept the <a class="font-medium text-primary-600 hover:underline hover:text-indigo-600 " href="#">Terms and Conditions</a></label>
                      </div>
                  </div>
                 
                  <button type="submit" class="w-full text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-base px-5 py-2.5 text-center ">Create an account</button>
                  <p class="text-base font-light text-gray-500 ">
                      Already have an account? <a href="#" class="font-medium text-primary-600 hover:underline text-indigo-600">Login here</a>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
    );


};