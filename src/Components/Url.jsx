import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

const TextField = ({ text }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  return (
    <div className="relative flex">
      <input
        type="text"
        value={text}
        className="dark:bg-gray-800 dark:text-white border border-gray-300 dark:border-gray-700 p-2 rounded-md min-w-full "
        readOnly
      />
      <CopyToClipboard text={text} onCopy={handleCopy}>
        <button className="  p-2 focus:outline-none" title="Copy to clipboard">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 dark:text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 2a2 2 0 012 2v14.586l-2-2V4a1 1 0 00-1-1H5a2 2 0 00-2 2v16a2 2 0 002 2h14a2 2 0 002-2V4a2 2 0 00-2-2z"
            />
          </svg>
        </button>
      </CopyToClipboard>
      {copied && (
        <span className=" text-green-500 dark:text-green-400">Copied!</span>
      )}
    </div>
  );
};

export default TextField;
