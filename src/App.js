import './App.css';
import clouds from './assets/clouds.gif'
import AboutPage from './components/About';
import ExperiencePage from './components/Experience';
import HomePage from './components/Home';
import ProjectPage from './components/Projects';
import SkillsPage from './components/Skills';

function App() {

  return (
    <div className="App scroll-hidden ">

      <div className=' absolute h-full w-1/12 pt-10 pb-5 flex flex-col'>
        {/* <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1> */}
        <h1 className='text-white'>Tushar</h1>
        <div className='h-full flex items-center w-full justify-center'>
          <div className='flex flex-col justify-center gap-20'>
            <a href='#home-div'><h3 className='rotated-text home-div hover:text-[#27C765]'>Home</h3></a>
            {/* <a href='#about-div'><h3 className='rotated-text about-div'>About</h3></a> */}
            <a href='#exp-div'><h3 className='rotated-text hover:text-[#27C765]'>Experience</h3></a>
            <a href='#projects-div'><h3 className='rotated-text hover:text-[#27C765]'>Projects</h3></a>
            <a href='#skills-div'><h3 className='rotated-text skills-div hover:text-[#27C765]'>Skills</h3></a>
          </div>
        </div>
        <div className='flex flex-col items-center gap-3'>
          <a target='_blank' href='https://github.com/tushargarg0987'><img src='/assets/icons/github.svg' className='w-10' /></a>
          <a target='_blank' href='https://www.linkedin.com/in/tushar--garg/'><img src='/assets/icons/linkedin.svg' className='w-10' /></a>
        </div>
      </div>
      <div className=' bg-black sc-wrapper'>
        <HomePage />
        {/* <AboutPage /> */}
        <ExperiencePage />
        <ProjectPage />
        <SkillsPage />

      </div>
    </div>
  );
}

export default App;
