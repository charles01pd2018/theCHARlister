// dependencies
import { useState } from 'react';
// components
import { AboutMe, ProjectHighlights, Contact, SEO } from 'components';
// layout
import { DisplayLayout } from 'layout';
// lib
import { URL } from 'lib';
// types
import type { GetStaticProps } from 'next';


/* TYPES */
interface Content {
  pageTitle: string;
  description: string;
}

interface Props {
  content: Content;
}

const Home = ( {
  content,
}: Props ) => {
  /* CONTENT */
  const { pageTitle, description } = content;

  /* HOOKS */
  const [ animate, setAnimate ] = useState<boolean>( false );
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
      <SEO pageTitle={pageTitle} description={description}
        image='/static/images/open-graph.png' url={URL} />
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
  description: 'theCHARlister Personal Portfolio',
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