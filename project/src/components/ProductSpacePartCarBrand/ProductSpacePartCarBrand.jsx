import React from 'react';
import s from './ProductSpacePartCarBrand.module.css';
import Product from './Product/Product';
import Skeleton from './Product/Skeleton';
import { NavLink } from 'react-router-dom';
import Sort from '../Sort/Sort';
import Pagination from '../Pagination';

const ProductSpacePartCarBrand = (props) => {
  const [items, setItems] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [categoryId, setCategoryId] = React.useState(0);
  const [sort, setSort] = React.useState(0);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [sortType, setSortType] = React.useState({
    name: 'Популярности',
    sortCategory: 'Rating',
  });

  const temp = sortType.sortCategory.includes('-') ? 'asc' : 'desc';

  React.useEffect(() => {
    fetch(
      `https://64668ba32ea3cae8dc199985.mockapi.io/items?page=${currentPage}&limit=16&sortBy=${sortType.sortCategory.replace(
        '-',
        '',
      )}&order=${temp}&search=${props.searchCarBrand}`,
    )
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
        setLoading(false);
        console.log('render');
      });
    window.scroll(0, 0);
  }, [sortType, currentPage]);
  let tempNameSpacePart = props.searchSpacePart;
  switch (tempNameSpacePart) {
    case 'Двер':
      tempNameSpacePart = 'Двери';
      break;
    default:
      break;
  }
  return (
    <div className={s.Body}>
      <div className={s.blockSort}>
        Вы выбрали :{' '}
        <span>
          {props.searchCarBrand} - {tempNameSpacePart}
        </span>{' '}
      </div>
      <Sort value={sortType} onClickCategory={(category) => setSortType(category)} />
      <div className={s.Block}>
        {loading
          ? [...new Array(20)].map((_, index) => <Skeleton key={index} />)
          : items
              .filter((m) => {
                if (m.Name.toLowerCase().includes(props.searchSpacePart.toLowerCase())) {
                  return true;
                }
                return false;
              })
              .map((m) => (
                <div className={s.News} key={m.id}>
                  <Product key={m.id} Name={m.Name} Price={m.Price} Color={m.Color} Src={m.Src} />
                </div>
              ))}
      </div>
      <Pagination onChangeSelected={(number) => setCurrentPage(number)} />
    </div>
  );
};

export default ProductSpacePartCarBrand;
