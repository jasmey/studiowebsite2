import React from 'react'
import { Link } from 'react-router-dom'
import './Vids.css'

function VidItem(props) {
  return (
    <>
    <li className="vids__item">
      <Link className="vids__item__link" to={props.path}>
          <figure className="vids__item__pic-wrap" >
          <iframe width="560" height="315" src={props.src}title={props.text}  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          </figure>
          <div className="vids__item__info">
              <h5 className="vids__item__text">{props.text}</h5>
          </div>
      </Link>
    </li>

    </>
  )
}

export default VidItem
