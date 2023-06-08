import React from 'react'
import './Home.css'
import Postside from '../components/postSide/Postside'
import Suggestion from './suggestion'

export default function Home() {
  return (
    <div className=' Home'> 
    <div className='row'>
      <div style={{backgroundColor:"gray",margin:"0%"}} className='col-sm-10'><Postside/></div>
      <div className='col-sm-2 sugg'><Suggestion /></div>
    </div>    
    </div>
  )
}