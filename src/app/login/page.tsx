import {cookies} from "next/headers";

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'
export const fetchCache = 'force-no-store'

export default async function Login() {

  let hascookie = cookies().get('authorized');
  console.log(hascookie);
  let authenticated = hascookie?.value == '1';

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className="h-screen rounded-lg border dark:border-neutral-600" style={{
        backgroundColor: "#fff"
      }}>
        <div className="container h-full px-6 py-24">
          <div
            className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">

            <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
              <img
                src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                className="w-full"
                alt="Phone image"/>
            </div>


            <div className="md:w-8/12 lg:ml-6 lg:w-5/12">
              {authenticated &&
                <div className="text-center relative mb-6" data-te-input-wrapper-init>
                  <h2 className=" h-2">Logged In Successfully.</h2>
                  <svg xmlns="http://www.w3.org/2000/svg" width="15%" viewBox="0 0 468.465 468.465" fill="currentColor">
                    <path d="M389.716,155.819c-70.967-79.56-157.81-118.248-193.969-86.381c-36.144,31.861-7.939,122.22,63.008,201.797
		c70.961,79.573,157.798,118.255,193.96,86.381C488.868,325.752,460.672,235.404,389.716,155.819z M396.135,199.794
		c2.194-1.962,7.009-0.161,10.769,4.03c3.762,4.188,5.023,9.172,2.846,11.138c-2.198,1.973-7.021,0.161-10.774-4.02
		C395.21,206.747,393.945,201.767,396.135,199.794z M323.526,139.436c1.177,0.536,2.276,5.256,2.474,10.528
		c0.196,5.272-0.603,9.105-1.761,8.586c-1.167-0.556-2.283-5.257-2.483-10.542C321.564,142.741,322.361,138.891,323.526,139.436z
		 M247.422,223.305c-2.194,1.967-7.013,0.17-10.762-4.016c-3.767-4.181-5.044-9.179-2.85-11.141
		c2.191-1.97,7.019-0.172,10.777,4.019C248.347,216.358,249.607,221.335,247.422,223.305z M270.642,197.928
		c-5.551-2.303-10.142-5.094-10.229-6.218c-0.107-1.133,4.318-0.198,9.861,2.111c5.554,2.293,10.146,5.082,10.254,6.214
		C280.61,201.151,276.194,200.216,270.642,197.928z M280.851,163.614c-5.002,4.49-17.216-0.985-27.293-12.211
		c-10.086-11.228-14.202-23.975-9.216-28.457c5.001-4.484,17.232,0.969,27.31,12.208
		C281.742,146.385,285.863,159.143,280.851,163.614z M296.188,112.886c-2.182,1.961-7.01,0.164-10.769-4.017
		c-3.754-4.186-5.029-9.176-2.834-11.132c2.185-1.967,7.004-0.17,10.758,4.016C297.107,105.938,298.372,110.921,296.188,112.886z
		 M327.517,256.779c-3.706,3.319-11.831,0.261-18.172-6.788c-6.344-7.069-8.488-15.491-4.795-18.801
		c3.707-3.316,11.836-0.285,18.178,6.792C329.071,245.045,331.215,253.45,327.517,256.779z M358.503,310.185
		c-2.205,1.98-7.015,0.174-10.777-4.016c-3.754-4.183-5.028-9.161-2.834-11.131c2.181-1.971,7.013-0.164,10.767,4.016
		C359.412,303.246,360.673,308.235,358.503,310.185z M353.819,210.071c-6.342-7.078-8.055-15.88-3.801-19.686
		c4.239-3.797,12.815-1.171,19.157,5.907c6.335,7.062,8.044,15.874,3.814,19.68C368.741,219.776,360.164,217.127,353.819,210.071z
		 M381.19,290.042c-5.213-4.422-9.078-8.669-8.657-9.473c0.405-0.81,4.98,2.114,10.164,6.533c5.202,4.421,9.087,8.679,8.671,9.478
		S386.372,294.458,381.19,290.042z M421.236,293.483c-2.293,2.058-10.721-3.639-18.854-12.685
		c-8.13-9.061-12.873-18.062-10.582-20.12c2.266-2.041,10.708,3.633,18.846,12.7C418.785,282.431,423.511,291.438,421.236,293.483z
		 M243.822,288.296c-8.072-9.062-15.625-18.299-22.717-27.64c-2.652,1.024-5.662,1.538-8.832,1.303
		c-9.48-0.726-16.692-7.436-16.116-15.031c0.348-4.521,3.406-8.279,7.8-10.466c-13.27-20.227-24.133-40.602-32.131-60.353
		C79.243,177.611,4.994,219.877,0.238,277.768c-5.245,64.115,76.663,122.961,182.949,131.404
		c65.495,5.22,124.892-9.97,162.123-37.383C311.002,352.723,275.797,324.154,243.822,288.296z M94.34,216.492
		c5.61,0.438,9.924,3.929,9.614,7.86c-0.278,3.901-5.075,6.742-10.679,6.324c-5.61-0.417-9.923-3.941-9.628-7.859
		C83.942,218.919,88.737,216.071,94.34,216.492z M98.414,300.86c-15.051-1.139-26.717-9.314-26.042-18.245
		c0.679-8.935,13.426-15.288,28.472-14.14c15.051,1.13,26.71,9.292,26.032,18.233C126.201,295.65,113.451,301.976,98.414,300.86z
		 M131.736,380.89c-5.614-0.401-9.922-3.926-9.633-7.833c0.299-3.939,5.09-6.772,10.698-6.337c5.603,0.405,9.913,3.918,9.614,7.839
		C142.125,378.485,137.339,381.31,131.736,380.89z M142.478,328.739c-5.672,3.037-10.955,4.734-11.778,3.754
		c-0.84-0.979,3.07-4.263,8.731-7.283c5.657-3.076,10.944-4.761,11.789-3.786C152.043,322.399,148.131,325.658,142.478,328.739z
		 M155.562,241.105c-1.232,0.591-5.241-2.823-8.956-7.601c-3.702-4.807-5.701-9.206-4.477-9.778c1.246-0.6,5.24,2.834,8.945,7.62
		C154.776,236.147,156.785,240.514,155.562,241.105z M206.307,341.516c-9.469-0.711-16.751-6.642-16.239-13.252
		c0.493-6.601,8.556-11.383,18.025-10.677c9.476,0.712,16.744,6.638,16.244,13.265C223.843,337.444,215.764,342.217,206.307,341.516
		z M283.346,352.17c-0.293,3.924-5.078,6.753-10.687,6.342c-5.607-0.403-9.916-3.918-9.618-7.855
		c0.289-3.925,5.076-6.746,10.692-6.339C279.335,344.756,283.636,348.28,283.346,352.17z"/>
                  </svg>
                  <p>Have a cookie!!</p>
                </div>
              }

              {!authenticated &&
                <form>

                  <div className="relative mb-6" data-te-input-wrapper-init>
                    <input
                      type="text"
                      className="peer block min-h-[auto] w-full rounded border border-gray-800 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                      id="exampleFormControlInput3"
                      style={{
                        borderColor: "#ccc"
                      }}
                      placeholder="Email address"/>
                    <label
                      htmlFor="exampleFormControlInput3"
                      className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                    >Email address
                    </label>
                  </div>


                  <div className="relative mb-6" data-te-input-wrapper-init>
                    <input
                      type="password"
                      className="peer block min-h-[auto] w-full rounded border border-gray-800 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                      id="exampleFormControlInput33"
                      placeholder="Password"/>
                    <label
                      htmlFor="exampleFormControlInput33"
                      className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                    >Password
                    </label>
                  </div>


                  <div className="mb-6 flex items-center justify-between">
                    <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                      <input
                        className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                        type="checkbox"
                        value=""
                        id="exampleCheck3"
                      />
                      <label
                        className="inline-block pl-[0.15rem] hover:cursor-pointer"
                        htmlFor="exampleCheck3">
                        Remember me
                      </label>
                    </div>


                    <a
                      href="#!"
                      className="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
                    >Forgot password?</a
                    >
                  </div>


                  <button
                    type="submit"
                    className="inline-block w-full rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                    data-te-ripple-color="light">
                    Sign in
                  </button>


                  <div
                    className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                    <p
                      className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
                      OR Web3 Credential Login
                    </p>
                  </div>

                  <a
                    className="web3loginbutton mb-3 flex w-full items-center justify-center rounded bg-primary px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                    style={{backgroundColor: "#1D1C0A"}}
                    role="button"
                    href="#!"
                    data-url="/api/verify"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                  >

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-2 h-3.5 w-3.5"
                      fill="currentColor"
                      viewBox="0 0 512 512">
                      <path d="M460.8,64H51.2C22.921,64,0,86.921,0,115.2v281.6C0,425.079,22.921,448,51.2,448h409.6c28.279,0,51.2-22.921,51.2-51.2
			V115.2C512,86.921,489.079,64,460.8,64z M486.4,294.4h-128c-14.114,0-25.6-11.486-25.6-25.6v-25.6c0-14.114,11.486-25.6,25.6-25.6
			h128V294.4z M486.4,192h-128c-28.279,0-51.2,22.921-51.2,51.2v25.6c0,28.279,22.921,51.2,51.2,51.2h128v76.8
			c0,14.114-11.486,25.6-25.6,25.6H51.2c-14.114,0-25.6-11.486-25.6-25.6V115.2c0-14.114,11.486-25.6,25.6-25.6h409.6
			c14.114,0,25.6,11.486,25.6,25.6V192z"/>
                    </svg>
                    Login with Enki Web3 Wallet
                  </a>


                  <div
                    className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                    <p
                      className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
                      OR Web2 Social Login
                    </p>
                  </div>


                  <a
                    className="mb-3 flex w-full items-center justify-center rounded bg-primary px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                    style={{backgroundColor: "#3b5998"}}
                    href="#!"
                    role="button"
                    data-te-ripple-init
                    data-te-ripple-color="light">

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-2 h-3.5 w-3.5"
                      fill="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                    </svg>
                    Continue with Facebook
                  </a>
                  <a
                    className="mb-3 flex w-full items-center justify-center rounded bg-info px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#54b4d3] transition duration-150 ease-in-out hover:bg-info-600 hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:bg-info-600 focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none focus:ring-0 active:bg-info-700 active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(84,180,211,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)]"
                    style={{backgroundColor: "#55acee"}}
                    href="#!"
                    role="button"
                    data-te-ripple-init
                    data-te-ripple-color="light">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-2 h-3.5 w-3.5"
                      fill="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                    Continue with Twitter
                  </a>
                </form>
              }
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}