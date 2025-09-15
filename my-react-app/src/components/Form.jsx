import React from "react";

const Form = () => {
  const fileSelectHandler = (e) => {
    console.log("Selected file:", e.target.files[0]);
  };

  return (
    <section className="w-full px-4 py-8">
      <form
        className="relative w-full max-w-md mx-auto"
        noValidate // Prevent default browser validation for custom styling
      >
        <div className="text-white space-y-6">

          {/* File Input - Custom Styled */}
          <div className="relative">
            <p className="mb-2 font-semibold">Upload Avatar</p>
            <label
              htmlFor="avatar"
              className="flex items-center justify-center w-full h-40 px-4 py-2 bg-neutral-900 text-white rounded-lg cursor-pointer"
            >

              <img src="/assets/images/icon-upload.svg" alt="Upload icon" className="block " /><br />
              Drag and drop and click to upload
              <input
                id="avatar"
                type="file"
                accept="image/*"
                onChange={fileSelectHandler}
                className="hidden"
                aria-describedby="avatar-help"
              />
            </label>
            <p id="avatar-help" className="mt-1 text-sm text-gray-400">
              <img src="/assets/images/icon-info.svg" alt="Upload icon" className="inline-block mr-1" />
              Upload a JPG, PNG, or SVG (max 5MB).
            </p>
          </div>

          {/* Form Fields */}
          <div className="flex flex-col gap-5">
            <div>
              <label htmlFor="fullName" className="block mb-1 font-semibold ">
                Full Name
              </label>
              <input
                id="fullName"
                type="text"
                className="w-full rounded-lg px-4 py-3 bg-neutral-900 text-white border border-gray-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/50 focus:outline-none transition-all duration-200"
                placeholder="John Doe"
                aria-required="true"
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-1 font-semibold ">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full rounded-lg px-4 py-3 bg-neutral-900 text-white border border-gray-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/50 focus:outline-none transition-all duration-200"
                placeholder="example@email.com"
                aria-required="true"
              />
            </div>

            <div>
              <label htmlFor="username" className="block mb-1 font-semibold">
                Github Username
              </label>
              <input
                id="username"
                type="text"
                className="w-full rounded-lg px-4 py-3 bg-neutral-900 text-white border border-gray-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/50 focus:outline-none transition-all duration-200"
                placeholder="@yourusername"
                aria-required="true"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="button" // Changed to type="button" to avoid form submission issues in sandbox
            className="w-full bg-orange-500 text-neutral-900 font-semibold px-6 py-3 rounded-lg hover:from-indigo-600 hover:to-purple-600 focus:ring-2 focus:ring-indigo-500 focus:outline-none transform transition-all duration-300 hover:scale-105"
            aria-label="Generate ticket"
          >
            Generate My Ticket
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;