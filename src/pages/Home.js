import React from 'react';
import { AboutMe } from '../components/AboutMe';
import { Banner } from '../components/Banner';
import { Projects } from '../components/Projects';
import { ScrollBar } from '../components/ScrollBar';
import { Skills } from '../components/Skills';

export const Home = () => {
  return (
    <div className="h-[1000vh]">
      <ScrollBar />
      {/* Main */}
      <main>
        <Banner />
        <AboutMe />
        <Skills />
        <Projects />
      </main>
      {/* Footer */}
      <footer></footer>
    </div>
  );
};
