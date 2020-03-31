import React from 'react'
import twitter from './twitter.svg'
import whatsapp from './whatsapp.svg'
import instagram from './instagram.svg'
import youtube from './youtube.svg'
import './Share.scss'

const shares = [
    {
        "name":"Twitter",
        "icon":twitter
    },
    {
        "name":"Facebook",
        "icon":whatsapp
    },
    {
        "name":"Whatsapp",
        "icon":instagram
    },
    {
        "name":"Reddit",
        "icon":youtube
    }
]

function Share() {
    return (
        <div className="share-handler">
          {
            shares.map((item, ind)=>(
              <div className={item.name.toLowerCase()} key={ind}>
                <span>Share</span>
                <img src={item.icon} />
              </div>
            ))
          }
        </div>
    )
}

export default Share;