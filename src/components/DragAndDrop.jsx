import React, { useState, useRef } from "react";
import { FileUploader } from "react-drag-drop-files";

const DragAndDrop = ({ file, setFile }) => {
  const fileTypes = ["JPG", "PNG", "GIF"];
  const [error, setError] = useState("");
  const inputRef = useRef(null);

  const MAX_FILE_SIZE = 500 * 1024;

  const validateFile = (file) => {
    if (file.size > MAX_FILE_SIZE) {
      setError("File is too large. Max size is 500kb.");
      return false;
    }
    setError("");
    return true;
  };

  const handleChange = (file) => {
    if (validateFile(file)) {
      setFile(file);
    }
  };

  const handleRemove = (e) => {
    e.stopPropagation();
    setFile(null);
  };

  const handleChangeImage = (e) => {
    e.stopPropagation();
    if (inputRef.current) inputRef.current.click();
  };

  return (
    <div className="font-inconsolata">
      <p className="mb-2 font-semibold">Upload Avatar</p>

      {!file ? (
        <FileUploader
          handleChange={handleChange}
          types={fileTypes}
          name="file"
          required
          classes="inputColor flex flex-col items-center justify-center gap-4
                   w-full h-40 border border-dashed px-4 py-2 text-white 
                   rounded-lg cursor-pointer hover:bg-neutral-701 transition-all duration-200"
        >
          <img
            src="/assets/images/icon-upload.svg"
            alt="Upload"
            className="rounded-lg p-2 bg-neutral-700"
          />
          <p>Drag and drop or click to upload</p>
        </FileUploader>
      ) : (
        <div className="flex flex-col items-center gap-4 border border-dashed w-full h-40 rounded-lg justify-center">
          <img
            src={URL.createObjectURL(file)}
            alt={file.name}
            className="rounded-lg w-16 h-16 object-cover border-2"
          />
          <div className="flex gap-5">
            <button
              onClick={handleRemove}
              className="bg-neutral-700 p-2 rounded-lg underline cursor-pointer"
            >
              Remove Image
            </button>
            
            <button
              onClick={handleChangeImage}
              className="bg-neutral-700 p-2 rounded-lg cursor-pointer"
            >
              Change Image
            </button>
          </div>
        </div>
      )}

      <input
        type="file"
        accept={fileTypes.map((t) => "." + t.toLowerCase()).join(",")}
        ref={inputRef}
        className="hidden"
        onChange={(e) => {
          if (e.target.files[0]) handleChange(e.target.files[0]);
        }}
      />

      {error ? (
        <p className="mt-1 text-xs text-orange-500 flex items-center">
          <img
            src="/assets/images/icon-info.svg"
            alt="Info"
            className="inline-block mr-2 size-5"
          />
          {error}
        </p>
      ) : (
        <p className="mt-1 text-xs text-gray-400 flex items-center">
          <img
            src="/assets/images/icon-info.svg"
            alt="Info"
            className="inline-block mr-1 size-6"
          />
          Upload your photo (JPG, PNG, or GIF, max size: 500kb).
        </p>
      )}

      {file && (
        <p className="mt-2 text-sm text-green-400">Selected file: {file.name}</p>
      )}
    </div>
  );
};

export default DragAndDrop;
