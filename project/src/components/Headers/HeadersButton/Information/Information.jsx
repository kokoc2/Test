import React from 'react';
import s from './Information.module.css';
const Information = () => {
  return (
    <div className={s.Profile}>
      <div className={s.Header}>Вся информация о нашей компании</div>
      <div className={s.Content}>
        Магазин кузовных деталей для автомобилей российского и зарубежного производства.
      </div>
      <div className={s.Content}>
        Город Дзержинск, Нижегородская область 📲- Интернет - магазин бамперов 🚘- У нас в наличии и
        на заказ, бампера на иномарки и отечественные авто.
      </div>
      <div className={s.Content}>
        Представляю вашему вниманию широкий ассортимент кузовных деталей для вашего автомобиля
        (капоты, бампера, крылья и так далее) в наличии имеются как оригинальные запчасти так и
        аналоговые
      </div>
      <div className={s.Content}>"Не знаете, где купить качественные автозапчасти?"</div>
      <div className={s.Content}>Заходите на наш интернет-магазин!</div>
      <div className={s.Content}>
        У нас вы найдете все необходимые детали для своего автомобиля по доступным ценам. Мы
        работаем только с проверенными поставщиками и гарантируем качество каждой запчасти.
      </div>
      <div className={s.Content}>
        Быстрая доставка по всей стране и удобный онлайн-заказ - все, что вам нужно для безопасной и
        комфортной езды. Заказывайте прямо сейчас и получайте скидки на следующую покупку!
      </div>
    </div>
  );
};

export default Information;
