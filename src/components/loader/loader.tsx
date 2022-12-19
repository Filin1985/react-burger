import React from 'react'
//@ts-ignore
import spinner from '../../images/spinner.gif'
//@ts-ignore
import styles from './loader.module.css'

const Loader = () => {
  return (
    <div className={styles.loader}>
      <img src={spinner} alt='' />
    </div>
  )
}

export default Loader
