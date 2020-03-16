import React, { useContext } from "react";
import { SwapiServiceContext } from '../swapi-service-context';

const withSwapiService = (Wrapped) => {
  return (props) => {
    const swapiService = useContext(SwapiServiceContext);
    return (
      <Wrapped swapiService={swapiService} {...props}/>
    )

  };
};

export default withSwapiService;