// dependencies
import Head from 'next/head';
import { useState } from 'react';
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
        <BlobIcon />
      </DisplayLayout>
    </>
  
  );
}

const HomeContent: Content = {
  pageTitle: 'theCHARlister',
};

export const getStaticProps: GetStaticProps = () => {
  const props: Props = {
    content: HomeContent,
  }

  return {
    props,
  }
}

export default Home;