import React, { useContext } from "react";
import Header from "../header";
import Row from "../grid/row";
import ListItems from "../list-items";
import DetailItem, { Record } from "../detail-item";
import { SwapiServiceContext } from '../swapi-service-context';

const HomePage = () => {
  const swapiService = useContext(SwapiServiceContext);
  const { fetchData, apiData } = swapiService;
  const personDetail =
    <DetailItem>
      <Record field="height" label="Height"/>
      <Record field="hairColor" label="Hair color"/>
      <Record field="eyeColor" label="Eye Color"/>
    </DetailItem>;

  return (
    <div className="wrapper">
      <Header/>
      <main className="py-4">
        <Row leftSize="8"
             left={
               <ListItems getData={() => fetchData(apiData.people)}/>
             }
             right={personDetail}/>
      </main>
    </div>
  )
};

export default HomePage;