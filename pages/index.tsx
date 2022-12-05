// dependencies
import Head from 'next/head';
// layout
import { DisplayLayout } from 'layout';
// types
import type { GetStaticProps } from 'next';

import { BlobIcon } from 'elements';

/* TYPES */
interface Content {
  pageTitle: string;
};

interface Props {
  content: Content;
};

const Home = ( {
  content,
}: Props ) => {
  /* CONTENT */
  const { pageTitle } = content;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <DisplayLayout>
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