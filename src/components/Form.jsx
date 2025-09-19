import React, { useState } from "react";
import Title from "./Title";
import DragAndDrop from "./DragAndDrop";

const Form = ({ setUserData }) => {
  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [file, setFile] = useState(null); // file state lives here
  const [error, setError] = useState("");

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    if (!value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setError("Please enter a valid email address.");
    } else {
      setError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!file || !fullName || !email || !userName) {
      alert("Please fill all fields!");
      return;
    }

    setUserData({
      name: fullName,
      email,
      userName,
      avatar: URL.createObjectURL(file),
    });
  };

  return (
    <section className="w-full px-4 py-8">
      <Title />

      <form
        onSubmit={handleSubmit}
        className="relative w-full max-w-md mx-auto"
        noValidate
      >
        <div className="text-white space-y-6">
          {/* Avatar Upload */}
          <DragAndDrop file={file} setFile={setFile} />

          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className="block mb-1 font-semibold">
              Full Name
            </label>
            <input
              id="fullName"
              type="text"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="inputColor w-full rounded-lg px-4 py-3 text-white border border-gray-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/50 focus:outline-none hover:bg-neutral-701 transition-all duration-200"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block mb-1 font-semibold">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={handleEmailChange}
              required
              className={`inputColor w-full rounded-lg px-4 py-3 text-white border border-gray-600 focus:ring-2 focus:outline-none transition-all duration-200 ${
                error ? "focus:ring-orange-500" : "focus:border-indigo-500"
              }`}
              placeholder="example@email.com"
            />
            {error && (
              <p className="mt-1 text-xs text-orange-500 flex items-center">
                <img
                  src="/assets/images/icon-info.svg"
                  alt="Info"
                  className="inline-block mr-2 size-5"
                />
                {error}
              </p>
            )}
          </div>

          {/* GitHub Username */}
          <div>
            <label htmlFor="username" className="block mb-1 font-semibold">
              Github Username
            </label>
            <input
              id="username"
              type="text"
              required
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="@yourusername"
              className="inputColor w-full rounded-lg px-4 py-3 text-white border border-gray-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/50 focus:outline-none hover:bg-neutral-701 transition-all duration-200"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-orange-500 text-neutral-900 font-semibold px-6 py-3 rounded-lg hover:scale-105 transition-all duration-300"
          >
            Generate My Ticket
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
