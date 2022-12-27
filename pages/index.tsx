// dependencies
import Head from 'next/head';
import { useState } from 'react';
// components
import { AboutMe } from 'components';
// layout
import { DisplayLayout } from 'layout';
// types
import type { GetStaticProps } from 'next';

import { BlobIcon } from 'elements';


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

  /* FUNCTIONS */
  const toggleShouldAnimate = () => {
      setShouldAnimate( state => !state );
  }

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <DisplayLayout displayHeaderSwitchProps={{
        checked: shouldAnimate,
        onChange: toggleShouldAnimate,
      }}>
        <AboutMe className='container--wide' />
        <BlobIcon />
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