import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

const DragAndDrop = () => {
  const fileTypes = ["JPG", "PNG", "GIF"];
  const [file, setFile] = useState(null);

  const handleChange = (file) => {
    setFile(file);
  };

  const handleRemove = () => {
    setFile(null);
  };

  return (
    <div className="font-inconsolata">
      <div className="relative">
        <p className="mb-2 font-semibold">Upload Avatar</p>

        <FileUploader
          handleChange={handleChange}
          types={fileTypes}
          name="file"
          classes="inputColor flex items-center flex-col gap-4 justify-center 
                   w-full h-40 border border-dashed px-4 py-2 text-white 
                   rounded-lg cursor-pointer hover:bg-neutral-701 transition-all duration-200 "
          // Disable FileUploader's default click when a file is selected
          disabled={!!file}
        >
          {file ? (
            <>
              <img
                src={URL.createObjectURL(file)}
                alt={file.name}
                className="block rounded-lg p-0.5 bg-neutral-700 w-12 max-h-40 object-contain"
              />
              <div className="flex gap-5">
                <button
                  type="button"
                  onClick={handleRemove}
                  className="bg-neutral-700 p-2 rounded-lg underline cursor-pointer"
                >
                  Remove Image
                </button>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent uploader click
                    // Target the file input directly
                    const input = document.querySelector('input[name="file"]');
                    if (input) input.click(); // Open file picker
                  }}
                  className="bg-neutral-700 p-2 rounded-lg cursor-pointer"
                >
                  Change Image
                </button>
              </div>
            </>
          ) : (
            <>
              <img
                src="/assets/images/icon-upload.svg"
                alt="Upload icon"
                className="block rounded-lg p-2 bg-neutral-700"
              />
              <p>Drag and drop or click to upload</p>
            </>
          )}
        </FileUploader>

        <p id="avatar-help" className="mt-1 text-xs text-gray-400">
          <img
            src="/assets/images/icon-info.svg"
            alt="Info icon"
            className="inline-block mr-1 size-6"
          />
          Upload your photo (JPG, PNG, or GIF, max size: 500kb).
        </p>

        {file && (
          <p className="mt-2 text-sm text-green-400">
            Selected file: {file.name}
          </p>
        )}
      </div>
    </div>
  );
};

export default DragAndDrop;
