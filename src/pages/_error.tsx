import { NextPageContext } from 'next';
import Link from 'next/link';

interface ICustomError {
  statusCode?: number;
}

// TODO:
function CustomError({ statusCode }: ICustomError): JSX.Element {
  return (
    <>
      <p>
        {statusCode
          ? `An error ${statusCode} occurred on server`
          : 'An error occurred on client'}
      </p>
      <br />
      <br />
      <Link href={'/'} as={`${process.env.appUrl}${'/'}`} passHref>
        <a>Go to Home</a>
      </Link>
    </>
  );
}

CustomError.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default CustomError;
