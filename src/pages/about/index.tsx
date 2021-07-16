import Head from 'next/head';
import Link from 'next/link';
import { withRouter } from 'next/router';
import { Marked } from '@ts-stack/markdown';

// Data
import { attributes as aboutPageData } from '@database/pages/about.md';


// TODO:
function About(): JSX.Element {
  const { pageMeta, content } = aboutPageData;

  console.log(pageMeta);
  console.log(content);

  const fetchTags = async () => {
    try {

      const response = await window.fetch('https://api.github.com/repos/notiflix/Notiflix/releases', {
        method: 'get',
        headers: {
          Accept: 'application/vnd.github.v3+json',
        },
      });

      if (response.ok) {

        const apiResponse = await response.json();

        console.log(apiResponse);
        console.log(apiResponse[0].body);

        const body = Marked.parse(apiResponse[0].body);
        console.log(body);


      } else {
        throw new Error('TEST');
      }

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Head>
        <meta name="content-language" content="en" />
        <meta name="language" content="English" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta name="robots" content="noindex, nofollow, noodp, noydir" />
        <meta name="googlebot" content="noindex, nofollow, noodp, noydir" />
        <title>ABOUT</title>
        <meta name="description" content="ABOUT Description" />
        <link rel="shortcut icon" href={`${process.env.PUBLIC_URL}${'/favicon.png'}`} />
      </Head>
      <h1>ABOUT</h1>

      <Link href={'/'} as={`${process.env.PUBLIC_URL}${'/'}`} passHref>
        <a>Go to Home</a>
      </Link>

      <br />
      <br />
      <br />
      <button type="button" onClick={fetchTags}>
        <span>GET TAGS</span>
      </button>
      <br />
      <br />
      <br />
      <img src={process.env.PUBLIC_URL + '/content/images/nature.jpeg'} alt="NATURE" />
    </>
  );
}

export default withRouter(About);
