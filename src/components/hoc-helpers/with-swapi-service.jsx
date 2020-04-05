import React, { useContext } from 'react';
import { SwapiServiceContext } from '../swapi-service-context';

const withSwapiService = (Wrapped) => (props) => {
  const swapiService = useContext(SwapiServiceContext);
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Wrapped swapiService={swapiService} {...props} />;
};

export default withSwapiService;
