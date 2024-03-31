import React, { useEffect } from 'react';

const WistiaEmbed = () => {
  useEffect(() => {
    // Load Wistia embed script
    const script1 = document.createElement('script');
    script1.src = 'https://fast.wistia.com/embed/medias/ehyhr449n3.jsonp';
    script1.async = true;
    document.body.appendChild(script1);

    const script2 = document.createElement('script');
    script2.src = 'https://fast.wistia.com/assets/external/E-v1.js';
    script2.async = true;
    document.body.appendChild(script2);

    // Cleanup function to remove the scripts when the component unmounts
    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);

  return (
    <div className="flex justify-center items-center">
      <div className="w-1/2">
        <div className="wistia_responsive_padding" style={{ padding: '1.25% 0 0 0', position: 'relative' }}>
          <div className="wistia_responsive_wrapper" style={{ height: '100%', left: 0, position: '', top: 0, width: '100%' }}>
            <div className="wistia_embed wistia_async_ehyhr449n3 seo=true videoFoam=true" style={{ height: '100%', position: 'relative', width: '100%' }}>
              <div className="wistia_swatch" style={{ height: '100%', left: 0, opacity: 0, overflow: 'hidden', position: 'absolute', top: 0, transition: 'opacity 200ms', width: '100%' }}>
                <img
                  src="https://fast.wistia.com/embed/medias/ehyhr449n3/swatch"
                  style={{ filter: 'blur(5px)', height: '100%', objectFit: 'contain', width: '100%' }}
                  alt=""
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WistiaEmbed;