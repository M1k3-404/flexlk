"use client";

import { useEffect } from 'react';

export const Marquee = ({ text, speed }) => {
  useEffect(() => {
    function startMarquee(selector, speed) {
      const parent = document.querySelector(selector);
      const clone = parent.innerHTML;
      let i = 0;
      parent.innerHTML += clone;

      setInterval(() => {
        i += speed;
        if (i >= parent.children[0].clientWidth) i = 0;
        parent.children[0].style.marginLeft = `-${i}px`;
      }, 20);
    }

    startMarquee('.marquee', speed);
  }, [speed]);

  return (
    <div className="marquee border border-dark">  
    <h1 className="font-thin" >{text}</h1>
    <style jsx>{`
    .marquee {
      overflow: hidden;
      display: flex;
      border: 2px solid white; /* Change border color */
      box-sizing: border-box;

    }

    .marquee h1 {
      white-space: nowrap;
      margin: 0;
      font-size: 2rem; /* Increase the font size */
      padding: 2px; /* Add padding to compensate for border */
    }
  `}</style>
</div>

  );
};


