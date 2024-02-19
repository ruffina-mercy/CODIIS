import React, { useRef, useState } from 'react';

const VideoUpload = (props) => {
  const { width, height } = props;

  const inputRef = useRef();
  // state variables
  const [source, setSource] = useState();
  const [uploadedVideos, setUploadedVideos] = useState([]);
  const [error, setError] = useState(null);

  // video select function
  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const fileSizeInBytes = file.size;
      const fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024);

      if (fileSizeInMegabytes > 1000) {
        setError("File size exceeds the maximum limit of 1GB.");
        return;
      }

      const url = URL.createObjectURL(file);
      setSource(url);
      setError(null);
    }
  };

  const handleChoose = (event) => {
    inputRef.current.click();
  };

  // video upload function
  const handleUpload = () => {
    if (source) {
      setUploadedVideos((prevVideos) => [...prevVideos, source]);
      setSource(null);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center border-2 border-gray-200 w-2/4">
      <input
        ref={inputRef}
        className="hidden"
        type="file"
        onChange={handleFileChange}
        accept=".mov,.mp4"
      />
      {!source && <button onClick={handleChoose} className='py-5 px-4'>Choose</button>}
      {source && (
        <>
          <video
            className="block m-0"
            width="100%"
            height={height}
            controls
            src={source}
          />
          <button onClick={handleUpload} className='py-2 px-4 mt-2'>Upload</button>
        </>
      )}
      <div className="bg-gray-300 w-full min-h-10 text-center">
        {error || (source ? "Video selected" : "Nothing selected")}
      </div>
      {uploadedVideos.length > 0 && (
        <div>
          <h2 className='mb-2 text-center'>Uploaded Videos:</h2>
          <ul>
            {uploadedVideos.map((video, index) => (
              <li key={index}>
                <div className='mb-2'>
                  <video width="200" height="80" controls src={video} />
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default VideoUpload;
