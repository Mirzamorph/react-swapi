import React, { useContext } from "react";
import Header from "../header";
import Row from "../grid/row";
import ListItems from "../list-items";
import DetailItem, { Record } from "../detail-item";
import { SwapiServiceContext } from '../swapi-service-context';

const PlanetsPage = () => {
  const swapiService = useContext(SwapiServiceContext);
  const { fetchData, apiData } = swapiService;
  const planetDetail =
    <DetailItem>
      <Record field="climate" label="Climate"/>
      <Record field="diameter" label="Diameter"/>
      <Record field="population" label="Population"/>
    </DetailItem>;

  return (
    <div className="wrapper">
      <Header/>
      <main className="py-4">
        <Row leftSize="8"
             left={
               <ListItems getData={() => fetchData(apiData.planets)}/>
             }
             right={planetDetail}/>
      </main>
    </div>
  )
};

export default PlanetsPage;