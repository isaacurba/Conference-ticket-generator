import React from "react";
import DradAndDrop from "./DragAndDrop";

const Form = () => {
  return (
    <section className="w-full px-4 py-8">
      <form
        className="relative w-full max-w-md mx-auto"
        noValidate // Prevent default browser validation for custom styling
      >
        <div className="text-white space-y-6">
          {/* File Input - Custom Styled */}

          <DradAndDrop />

          {/* Form Fields */}

          <div className="flex flex-col gap-5">
            <div>
              <label htmlFor="fullName" className="block mb-1 font-semibold ">
                Full Name
              </label>
              <input
                id="fullName"
                type="text"
                required
                className="inputColor w-full rounded-lg px-4 py-3 text-white border border-gray-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/50 focus:outline-none hover:bg-neutral-701 transition-all duration-200"
                aria-required="true"
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-1 font-semibold ">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                required
                className="inputColor w-full rounded-lg px-4 py-3 text-white border border-gray-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/50 focus:outline-none hover:bg-neutral-701 transition-all duration-200"
                placeholder="example@email.com"
                aria-required="true"
              />

              <p id="avatar-help" className="mt-1 text-xs  text-orange-500">
                <img
                  src="/assets/images/icon-info.svg"
                  alt="Info icon"
                  className="inline-block mr-2 size-5"
                />
                Please enter a valid email address.
              </p>
            </div>

            <div>
              <label htmlFor="username" className="block mb-1 font-semibold">
                Github Username
              </label>
              <input
                id="username"
                type="text"
                required
                className="inputColor w-full rounded-lg px-4 py-3 text-white border border-gray-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/50 focus:outline-none hover:bg-neutral-701 transition-all duration-200"
                placeholder="@yourusername"
                aria-required="true"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit" // Changed to type="button" to avoid form submission issues in sandbox
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
