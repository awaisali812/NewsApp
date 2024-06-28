import React from 'react'
import loader from './loader.gif'
function Spinner() {
    return (
      <div className='text-center'>
        <img src={loader} alt="" style={{height:'40px'}} />
      </div>
    )
}

export default Spinner;