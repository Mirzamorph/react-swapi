import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchItems, selectCurrentItem } from '../../actions/items-actions';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

const ListItems = ({ data, currentItem, selectItem }) => {
  const listItems = data.map((item) => {
    let classNames = 'list-group-item list-group-item-action';
    if (item === currentItem) classNames += ' active';
    return (
      <button
        type="button"
        className={classNames}
        onClick={() => selectItem(item.id)}
        key={item.id}
      >
        {item.name}
      </button>
    );
  });

  return <div className="list-group">{listItems}</div>;
};

const ListItemsContainer = ({ getData }) => {
  const items = useSelector((state) => state.items);
  const dispatch = useDispatch();
  const selectItem = (id) => dispatch(selectCurrentItem(id));

  const { data, currentItem, loading, error } = items;
  useEffect(() => {
    fetchItems(getData, dispatch);
  }, [dispatch, getData]);

  if (loading) return <Spinner />;
  if (error) return <ErrorIndicator message={error} />;
  return (
    <ListItems data={data} selectItem={selectItem} currentItem={currentItem} />
  );
};

export default ListItemsContainer;
