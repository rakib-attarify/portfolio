import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import AboutMe from '../components/AboutMe/AboutMe';
import Head from 'next/head'

const Home = () => {
  return (
    <>
    <div>
      <Head>
        <title>Portfolio of Ayeman</title>
      </Head>
    </div>
    <Layout>
     <Section grid> 
        <Hero />
        <BgAnimation /> 
     </Section> 
      <Projects />
      <Technologies />
      <AboutMe />
    </Layout>
    </>
  );
};

export default Home;
