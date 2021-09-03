import Link from 'next/link';

interface IError404 {
  statusCode?: number;
}

// TODO:
function Error404({ statusCode = 404 }: IError404): JSX.Element {
  return (
    <div>
      <h1>{statusCode}</h1>
      <br />
      <br />
      <Link href={'/'} as={`${process.env.appUrl}${'/'}`} passHref>
        <a>Go to Home</a>
      </Link>
    </div>
  );
}

export default Error404;
