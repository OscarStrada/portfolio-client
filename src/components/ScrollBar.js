import React, { useState, useEffect } from 'react';
import { BsGithub, BsInstagram } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';

export const ScrollBar = () => {
  const [scrollBar, setScrollBar] = useState(0);

  useEffect(() => {
    const progressBar = () => {
      const heightTotal = window.document.body.clientHeight;
      const heightView = window.innerHeight;
      if (window.scrollY > 0) {
        setScrollBar((scrollY / (heightTotal - heightView)) * 100);
      } else {
        setScrollBar(0);
      }
    };
    window.addEventListener('scroll', progressBar);
  }, []);

  return (
    <div className="hidden md:flex flex-col fixed items-center top-[calc(50%-100px)] right-[40px] space-y-16">
      {/* Scrollbar */}
      <div className="h-[var(--scrollbar-height)] w-[2px] flex rounded-2xl bg-complement">
        <div
          className="bg-green-custom w-[2px] rounded-2xl"
          style={{ height: `${scrollBar}%` }}
        ></div>
      </div>

      {/* Social media */}
      <div className="hidden md:flex flex-col justify-center space-y-5 h-[200px]">
        <a
          href="https://www.instagram.com/khutzmexico/"
          target="_blank"
          rel="noreferrer"
        >
          <BsInstagram className="h-7 fill-[var(--complement-color)] hover:fill-[var(--green-color)]" />
        </a>
        <a href="#" target="_blank" rel="noreferrer">
          <FaLinkedinIn className="h-7 fill-[var(--complement-color)] hover:fill-[var(--green-color)]" />
        </a>
        <a href="https://github.com/Khutz" target="_blank" rel="noreferrer">
          <BsGithub className="h-7 fill-[var(--complement-color)] hover:fill-[var(--green-color)]" />
        </a>
      </div>
    </div>
  );
};
