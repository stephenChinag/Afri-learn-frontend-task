import Image from "next/image";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center gap-20 px-6 py-3 z-10 bg-white shadow-md">
      {/* Left Section - Navigation Path */}
      <div className="flex items-center mr-4">
        {/* Add margin-right here */}
        <button
          className="text-custom-gray font-semibold flex items-center justify-center gap-5"
          //   onClick={() => router.back()}
        >
          <Image src="/left-arrow.svg" alt="arr" width={10} height={10} />
          Assessment
        </button>
      </div>

      {/* Center Section - Navigation Path */}
      <div className="flex-grow flex items-center space-x-2 justify-start">
        <span className="text-gray-1000 font-bold">Primary 1</span>
        <span>.</span>
        <span className="text-gray-1000 font-bold"> Mid Term Test</span>
        <span>.</span>
        <span className="text-gray-1000 font-bold"> Agricultural Science</span>
      </div>

      {/* Right Section - Test Info and Buttons */}
      <div className="flex items-center space-x-4">
        <button className="flex items-center text-gray-600 hover:text-black transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M18 10c0 4.418-3.582 8-8 8S2 14.418 2 10 5.582 2 10 2s8 3.582 8 8zm-7-3a1 1 0 10-2 0v2H7a1 1 0 000 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
              clipRule="evenodd"
            />
          </svg>
          Test Info
        </button>

        <button className="flex items-center text-gray-600 hover:text-black transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M4 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm5 4a1 1 0 00-2 0v2a1 1 0 102 0v-2zm4-1a1 1 0 10-2 0v3a1 1 0 002 0V8z" />
          </svg>
          Test Preview
        </button>

        {/* Activate Test Button */}
        <button className="flex items-center px-4 py-2 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-6.414V7.414A1 1 0 0010.707 7l4.586 4.586a1 1 0 010 1.414L10.707 17A1 1 0 009 16.293v-4.707z"
              clipRule="evenodd"
            />
          </svg>
          Activate Test
        </button>
      </div>
    </div>
  );
}
