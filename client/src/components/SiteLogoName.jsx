import React from 'react'
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const SiteLogoName = ({imgH="2rem", imgW='2rem', fontSize='1.2rem'}) => {
  return (
    <Link
      to="/"
      style={{ fontSize: `${fontSize}` }}
      className={`self-center whitespace-nowrap flex gap-2 items-center text-sm sm:text-xl font-semibold dark:text-white pacifico-regular`}
    >
      {/* <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
          Sahand's
        </span>
        Blog */}
      <img
        className={`rounded-lg`}
        style={{ height: `${imgH}`, width: `${imgW}` }}
        src="https://firebasestorage.googleapis.com/v0/b/sagescript-blog.appspot.com/o/1719249087757-android-chrome-192x192.png?alt=media&token=4809e282-a09f-4e52-8f84-e9ab390a841b"
      />
      Thoughtcanvas
    </Link>
  );
}

export default SiteLogoName