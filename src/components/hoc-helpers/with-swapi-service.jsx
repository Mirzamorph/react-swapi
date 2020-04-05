import React, { useContext } from 'react';
import { SwapiServiceContext } from '../swapi-service-context';

const withSwapiService = (Wrapped) => (props) => {
  const swapiService = useContext(SwapiServiceContext);
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Wrapped swapiService={swapiService} {...props} />
  );
};

export default withSwapiService;
