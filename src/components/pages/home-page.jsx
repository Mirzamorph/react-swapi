import React, { useContext } from "react";
import Header from "../header";
import Row from "../grid/row";
import ListItems from "../list-items";
import DetailItem from "../detail-item";
import { SwapiServiceContext } from '../swapi-service-context';

const HomePage = () => {
  const swapiService = useContext(SwapiServiceContext);
  const { fetchData, apiData } = swapiService;
  return (
    <div className="wrapper">
      <Header/>
      <main className="py-4">
        <Row leftSize="8"
             left={
               <ListItems getData={() => fetchData(apiData.people)}/>
             }
             right={
               <DetailItem/>
             }/>
      </main>
    </div>
  )
};

export default HomePage;