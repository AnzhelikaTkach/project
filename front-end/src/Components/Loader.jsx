import React from 'react'

function Loader() {
  return (
    <div className='preloader'>
      <div className='container flex align-center justify-center'>
        <img src ="../images/loading.gif" alt = "preloader" className='preloader-img' />
      </div>
    </div>
  )
}

export default Loader