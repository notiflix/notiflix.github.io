import { NextPageContext } from 'next';

interface ICustomError {
  statusCode?: number;
}

// TODO:
function CustomError({ statusCode }: ICustomError): JSX.Element {
  return (
    <p>
      {statusCode
        ? `An error ${statusCode} occurred on server`
        : 'An error occurred on client'}
    </p>
  );
}

CustomError.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default CustomError;
