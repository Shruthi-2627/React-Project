import React, { useContext } from 'react'
import '../Bollyctnt/bollycont.css'
import NoteContext from '../../Context/NoteContext'
import { Link } from 'react-router-dom'

function Foodone() {
  const a = useContext(NoteContext)

  return (

    <>
    <Link to='/food'>
    <div className="header">
    <h1 className='heading2'><span className='the2'>The</span> Siren</h1>
    </div>
    </Link>

  <div className='container'> 
      <h2 className='gl'>{a.cardindian}</h2>
      <hr />
      <div className='insidehead'>
        <div className='insides'>
          <div><img src="https://images-platform.99static.com/jQu2xohritutSVmnVq7np7rbkxg=/0x0:1920x1920/500x500/top/smart/99designs-contests-attachments/106/106359/attachment_106359975" alt="avatar"  className='avatar'/></div>
          <div>
          <p>Shruthi Karunamoorthy</p>
            <p>June 12 2023</p>
          </div>
          </div>
          <img src="https://freepngimg.com/thumb/social_media/74031-instagram-icons-media-youtube-computer-facebook-social-thumb.png" alt="logos" className='logos'/>
      </div>
      <img src="https://restaurantindia.s3.ap-south-1.amazonaws.com/s3fs-public/content6054.jpg" className="bolimg" alt="purple scene" />
  </div>

  <div className='content'>
    <p>{a.contentindian}</p>
  </div>
  </>
)
  
}

export default Foodone