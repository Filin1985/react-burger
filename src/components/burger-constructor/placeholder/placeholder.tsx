import React from 'react'
//@ts-ignore
import styles from './placeholder.module.css'
//@ts-ignore
import bun1 from '../../../images/bun-01.png'
//@ts-ignore
import bun2 from '../../../images/bun-02.png'

const Placeholder = () => {
  return (
    <div className={styles.placeholder}>
      <h1>Первым делом выберите булку</h1>
      <div>
        <ul className={styles.placeholder__list}>
          <li className={styles.placeholder__item}>
            <img src={bun1} alt='Флюоресцентная булка R2-D3' />
            <p>Флюоресцентная булка R2-D3</p>
          </li>
          <p>или</p>
          <li className={styles.placeholder__item}>
            <img src={bun2} alt='Краторная булка N-200i' />
            <p>Краторная булка N-200i</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Placeholder
