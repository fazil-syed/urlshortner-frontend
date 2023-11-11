import { useState } from "react";
import { BrowserRouter } from "react-router-dom";

export function Form({ setUrl }) {
  const [input, setinput] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { url } = e.target;
    if (url.value != "") setUrl(url.value);
  };
  const updateForm = (e) => {
    setinput(e.target.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12 flex flex-row ">
          <div className="mt-10 flex flex-row justify-center items-center gap-2">
            <div className="flex flex-row items-center gap-2">
              <label
                htmlFor="username"
                className="block text-xl font-medium leading-6 text-white mt-1"
              >
                Url
              </label>
              <div className="mt-2">
                <div className="flex rounded-md min-w-full w-auto shadow-sm ring-1 bg-white ring-inset ring-gray-800 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    name="url"
                    id="url"
                    value={input}
                    onChange={updateForm}
                    autoComplete="url"
                    className="block flex-auto  border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-900 focus:ring-0 sm:text-sm sm:leading-6 min-w-full w-auto"
                    placeholder="https://www.google.com"
                  />
                </div>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="rounded-md bg-indigo-600 mt-1.5 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
