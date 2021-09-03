import { NextPageContext } from 'next';

import Error404 from '@pages/404';

interface ICustomError {
  statusCode?: number;
}

function CustomError({ statusCode = 404 }: ICustomError): JSX.Element {
  return <Error404 statusCode={statusCode} />;
}

CustomError.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default CustomError;
