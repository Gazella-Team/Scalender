import React from 'react';

const VimeoVideo = () => {
  return (
    <div className='w-[700px] h-[700px] mx-auto'>
      <iframe 
        src="https://player.vimeo.com/video/929838647?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" 
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write" 
        style={{top: 0, left: 0, width: '100%', height: '100%'}} 
        title="202403261413"
      />
    </div>
  );
}

export default VimeoVideo;
