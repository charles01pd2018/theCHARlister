// dependencies
import Head from 'next/head';
import { useState } from 'react';
// components
import { AboutMe, ProjectHighlights, Contact } from 'components';
// layout
import { DisplayLayout } from 'layout';
// types
import type { GetStaticProps } from 'next';


/* TYPES */
interface Content {
  pageTitle: string;
}

interface Props {
  content: Content;
}

const Home = ( {
  content,
}: Props ) => {
  /* CONTENT */
  const { pageTitle } = content;

  /* HOOKS */
  const [ animate, setAnimate ] = useState<boolean>( true );
  const [ activeIndex, setActiveIndex ] = useState<number>( 0 );

  /* FUNCTIONS */
  const handleInView = ( inView: boolean, index: number ) => {
    if ( inView ) {
      setActiveIndex( index );
    }
  }

  const toggleAnimate = () => {
      setAnimate( state => !state );
  }

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <DisplayLayout activeIndex={activeIndex} 
        displayHeaderSwitchProps={{
          checked: animate,
          onChange: toggleAnimate,
        }}>
        <AboutMe className='container--wide' inViewProps={{
          onChange: (inView) => handleInView( inView, 0 ),
          threshold: 0.8,
        }} />
        <ProjectHighlights animate={animate} inViewProps={{
          onChange: (inView) => handleInView( inView, 1 ),
          threshold: 0.2,
        }} />
        <Contact inViewProps={{
          onChange: (inView) => handleInView( inView, 2 ),
          threshold: 0.5,
        }} />
      </DisplayLayout>
    </>
  
  );
}

const content: Content = {
  pageTitle: 'theCHARlister',
};

export const getStaticProps: GetStaticProps = () => {
  const props: Props = {
    content,
  }

  return {
    props,
  }
}

export default Home;