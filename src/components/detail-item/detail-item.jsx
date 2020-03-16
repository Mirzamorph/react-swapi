import React from "react";
import { connect } from 'react-redux';

export const Record = ({ item, field, label}) => {
  return (
    <li className="list-group-item">
      <span className="term mr-2">{label}:</span>
      <span>{ item[field] }</span>
    </li>
  )
};

const DetailItem = ({ item, children}) => {

  if (item === null) return <p>Выберите элемент</p>;

  const { name } = item;
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{ name }</h5>
      </div>
      <img style={{width: '100%',}} src={item.img} alt={ name }/>
      <ul className="list-group list-group-flush">
        {
          React.Children.map(children, child => {
            return React.cloneElement(child, {item})
          })
        }
      </ul>
      <div className="card-body">
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>
  )
};

const mapStateToProps = ({items: { currentItem }}) => {
  return {
    item: currentItem
  }
};

export default connect(mapStateToProps)(DetailItem);