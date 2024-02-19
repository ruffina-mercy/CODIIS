import React, { useEffect } from 'react';

const VideoList = () => {
  const videos = [
    {
      id: 1,
      title: 'Introduction to React',
      youtubeVideoId: 'SqcY0GlETPk',
    },
    {
      id: 2,
      title: 'Introduction to Node js',
      youtubeVideoId: 'TlB_eWDSMt4',
    },
    ];
    
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(script);

    script.onload = () => {
      // Ensuring that the YouTube API script is fully loaded
      // The 'onYouTubeIframeAPIReady' function will be automatically called once the script is loaded
      window.onYouTubeIframeAPIReady = () => {
        videos.forEach((video) => {
          // Initialize YouTube player
          const player = new window.YT.Player(`youtubePlayer-${video.id}`, {
            height: '315',
            width: '560',
            videoId: video.youtubeVideoId,
          });
        });
      };
    };

    return () => {
      document.body.removeChild(script);
    };
  }, [videos]);

  return (
    <div className="flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold mb-4">Video List</h2>
          <div className='mb-4'>
              <a href='#/group' className='bg-green-400 px-3 py-1 border-green-400 cursor-pointer rounded text-white ml-6 mb-4'>Create Group</a>
              <a href='#/favorite' className='bg-green-400 px-3 py-1 border-green-400 cursor-pointer rounded text-white ml-6 mb-4'>Favorites</a>
          </div>
      <ul>
        {videos.map((video) => (
          <li key={video.id} className="mb-4">
            <div className="video-item">
              <h3 className="text-xl font-bold mb-2">{video.title}</h3>
              <div id={`youtubePlayer-${video.id}`}></div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VideoList;
