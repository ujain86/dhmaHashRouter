import React from 'react'

function Magazine() {
  return (
    <>
        <div style={{width: '100%', height: 50}} className="bg-white mb-4">
              <h4 style={{textAlign: 'center'}} className='p-2'>MAGAZINE</h4>
        </div>
        <div style={{textAlign: 'center'}}>
            <img src="images/magazine_cover.jpg" style={{width: '70%', height: '20vh'}}></img>
            <img src="images/magazine.jpg" style={{width: '70%'}}></img>
        </div>
    </>
    
  )
}

export default Magazine