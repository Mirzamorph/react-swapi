import React from "react";
import Header from "../header";
import Row from "../grid/row";
import ListItems from "../list-items";
import DetailItem from "../detail-item";

const HomePage = () => {
  return (
    <div className="wrapper">
      <Header/>
      <main className="py-4">
        <Row left={<ListItems/>}
             leftSize="8"
             right={<DetailItem/>}/>
      </main>
    </div>
  )
};

export default HomePage;