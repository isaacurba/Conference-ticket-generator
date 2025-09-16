import React, { useState } from "react";

const DragAndDrop = () => {
  const fileSelectHandler = (e) => {
    console.log("Selected file:", e.target.files[0]);
  };
  return (
    <div>
      <div className="relative">
        <p className="mb-2 font-semibold">Upload Avatar</p>
        <label
          htmlFor="avatar"
          className="flex items-center flex-col gap-4 justify-center w-full h-40 border border-dashed px-4 py-2 text-white rounded-lg cursor-pointer"
        >
          <img
            src="/assets/images/icon-upload.svg"
            alt="Upload icon"
            className="block rounded-lg p-2 bg-neutral-700 "
          />
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
        <p id="avatar-help" className="mt-1 text-xs text-gray-400">
          <img
            src="/assets/images/icon-info.svg"
            alt="Upload icon"
            className="inline-block mr-1 size-6"
          />
          Upload your photo (JPG or PNG, max size: 500kb).
        </p>
      </div>
    </div>
  );
};

export default DragAndDrop;
