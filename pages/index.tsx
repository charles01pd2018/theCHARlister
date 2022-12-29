// dependencies
import Head from 'next/head';
import { useState } from 'react';
import { InView } from 'react-intersection-observer';
// components
import { AboutMe, ProjectHighlights } from 'components';
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
  const [ shouldAnimate, setShouldAnimate ] = useState<boolean>( true );
  const [ activeIndex, setActiveIndex ] = useState<number>( 0 );

  /* FUNCTIONS */
  const handleInView = ( inView: boolean, index: number ) => {
    if ( inView ) {
      setActiveIndex( index );
    }
  }

  const toggleShouldAnimate = () => {
      setShouldAnimate( state => !state );
  }

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <DisplayLayout activeIndex={activeIndex} 
        displayHeaderSwitchProps={{
          checked: shouldAnimate,
          onChange: toggleShouldAnimate,
        }}>
        <InView onChange={(inView) => handleInView( inView, 0 )} threshold={0.8}>
          <AboutMe className='container--wide' />
        </InView>
        <InView onChange={(inView) => handleInView( inView, 1 )} threshold={0.2}>
          <ProjectHighlights setActiveIndex={setActiveIndex} />
        </InView>
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