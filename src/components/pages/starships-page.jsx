import React, { useContext } from 'react';
import Header from '../header';
import Row from '../grid/row';
import ListItems from '../list-items';
import DetailItem, { Record } from '../detail-item';
import { SwapiServiceContext } from '../swapi-service-context';

const StarshipsPage = () => {
  const swapiService = useContext(SwapiServiceContext);
  const { fetchData, apiData } = swapiService;
  const StarshipDetail = (
    <DetailItem>
      <Record field="model" label="Model" />
      <Record field="length" label="Length" />
      <Record field="passengers" label="Passengers" />
    </DetailItem>
  );

  return (
    <div className="wrapper">
      <Header />
      <main className="py-4">
        <Row
          leftSize="8"
          left={<ListItems getData={() => fetchData(apiData.starships)} />}
          right={StarshipDetail}
        />
      </main>
    </div>
  );
};

export default StarshipsPage;
