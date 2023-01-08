import React, { useEffect } from 'react'
import styles from './feed-details.module.css'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'

const FeedDetails = () => {
  return (
    <div className={styles.details}>
      <p className={styles.details__order}>#034533</p>
      <h1 className={styles.details__title}>
        Black Hole Singularity острый бургер
      </h1>
      <p className={styles.details__status}>Выполнен</p>
      <p className={styles.details__ingredients}>Состав:</p>
      <ul className={styles.details__list}>
        <li className={styles.details__item}>
          <div className={styles.details__wrap}>
            <img
              className={styles.details__image}
              src='https://code.s3.yandex.net/react/code/meat-02.png'
              alt=''
            />
            <p className={styles.details__name}>Флюоресцентная булка R2-D3</p>
          </div>
          <div className={styles.details__result}>
            <p className={styles.details__price}>
              <span className={styles.details__extra}>1 X</span>630
            </p>
            <CurrencyIcon type='primary' />
          </div>
        </li>
        <li className={styles.details__item}>
          <div className={styles.details__wrap}>
            <img
              className={styles.details__image}
              src='https://code.s3.yandex.net/react/code/meat-02.png'
              alt=''
            />
            <p className={styles.details__name}>Флюоресцентная булка R2-D3</p>
          </div>
          <div className={styles.details__result}>
            <p className={styles.details__price}>
              <span className={styles.details__extra}>1 X</span>630
            </p>
            <CurrencyIcon type='primary' />
          </div>
        </li>
        <li className={styles.details__item}>
          <div className={styles.details__wrap}>
            <img
              className={styles.details__image}
              src='https://code.s3.yandex.net/react/code/meat-02.png'
              alt=''
            />
            <p className={styles.details__name}>Флюоресцентная булка R2-D3</p>
          </div>
          <div className={styles.details__result}>
            <p className={styles.details__price}>
              <span className={styles.details__extra}>1 X</span>630
            </p>
            <CurrencyIcon type='primary' />
          </div>
        </li>
        <li className={styles.details__item}>
          <div className={styles.details__wrap}>
            <img
              className={styles.details__image}
              src='https://code.s3.yandex.net/react/code/meat-02.png'
              alt=''
            />
            <p className={styles.details__name}>Флюоресцентная булка R2-D3</p>
          </div>
          <div className={styles.details__result}>
            <p className={styles.details__price}>
              <span className={styles.details__extra}>1 X</span>630
            </p>
            <CurrencyIcon type='primary' />
          </div>
        </li>
        <li className={styles.details__item}>
          <div className={styles.details__wrap}>
            <img
              className={styles.details__image}
              src='https://code.s3.yandex.net/react/code/meat-02.png'
              alt=''
            />
            <p className={styles.details__name}>Флюоресцентная булка R2-D3</p>
          </div>
          <div className={styles.details__result}>
            <p className={styles.details__price}>
              <span className={styles.details__extra}>1 X</span>630
            </p>
            <CurrencyIcon type='primary' />
          </div>
        </li>
      </ul>
      <div className={styles.details__data}>
        <p className={styles.details__date}>Вчера, 13:50 i-GMT+3</p>
        <div className={styles.details__result}>
          <p className={styles.details__price}>630</p>
          <CurrencyIcon type='primary' />
        </div>
      </div>
    </div>
  )
}

export default FeedDetails
