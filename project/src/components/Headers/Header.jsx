import React from 'react';
import s from './Header.module.css';
import HeaderButton from './HeadersButton/HeaderButton';

const Header = (props) => {
  return (
    <div className={s.Header}>
      <div>
        <HeaderButton setSearchText={props.setSearchText} searchText={props.searchText} />
      </div>
      <div className={s.HeaderContent}>
        <div className={s.NameHeader}>BamperRU</div>
        <div className={s.Block}>
          <div>Адрес: площадь Дзержинского, г.Дзержинск</div>
          <div>График работы: с 8:00 - 21:00 БЕЗ ВЫХОДНЫХ</div>
        </div>
        <div className={s.Block}>
          <div>
            <a href='https://vk.com/public215722152' className={s.Group}>
              Наша группа в VK:{' '}
              <img
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/VK_Compact_Logo_%282021-present%29.svg/800px-VK_Compact_Logo_%282021-present%29.svg.png'
                alt=''
              />{' '}
            </a>
          </div>
          <div>Телефон зебры: 8-(902)-302-22-77</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
