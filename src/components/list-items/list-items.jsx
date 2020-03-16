import React, { useEffect } from "react";
import { bindActionCreators, compose } from "redux";
import { connect } from 'react-redux';
import { fetchItems, selectCurrentItem } from "../../actions/items-actions";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

const ListItems = ({ data, currentItem, selectItem }) => {
  console.log(currentItem);
  const listItems = data.map(item => {
    let classNames = "list-group-item list-group-item-action";
    if (item === currentItem) classNames += " active";
    return (
      <button type="button"
              className={classNames}
              onClick={() => selectItem(item.id)}
              key={item.id}>{item.name}</button>
    )
  });

  return (
    <div className="list-group">
      {listItems}
    </div>
  )
};

const ListItemsContainer = (props) => {
  const { getItems, selectItem } = props;
  const { data, currentItem, loading, error } = props.items;
  useEffect(() => {
    getItems();
  }, []);

  if (loading) return <Spinner/>;
  if (error) return <ErrorIndicator message={error}/>;
  return <ListItems data={data} selectItem={selectItem} currentItem={currentItem}/>;
};

const mapStateToProps = items => items;

const mapDispatchToProps = (dispatch, { getData }) => {
  return bindActionCreators({
    getItems: fetchItems(getData),
    selectItem: selectCurrentItem
  }, dispatch);
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(ListItemsContainer)