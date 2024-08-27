import React from 'react'
import './PageItem.css'

function PageItem(props) {
  return (
    <>
    <div className="page__item">
        <div className="img__container">
            <img src={props.src} alt="na" className="page__item__img"/>
        </div>
        <div className="back__button">
            <a href="/explore" className="back__button__text">Back</a>
        </div>
        <div className="page__item__info">
            <h5 className="page__item__title">{props.title}</h5>
            <p className="page__item__subtitle">{props.subtitle}</p>

            <p className="page__item__text">{props.text}</p>
        </div>
    </div>

    </>
  )
}

export default PageItem
