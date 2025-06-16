import React from 'react'
import SendEnquiry from './SendEnquiry'
const Contact = () => {
  return (
    <div>
                <div className="container my-5">
              <div className="row text-center gy-4">
                <div className='col-12   text-center'>
                      <h1 className='Laading mb-lg-4'>We'd love to hear from you!</h1>
                      <p className='paro'>Have questions or feedback? Reach out - we're here to help!</p>
                </div>
                 <div className="col-12 col-md-6">
                    < SendEnquiry />
                  </div>
                   <div className="col-12 col-md-6">
                    <span className='bgimage'></span>
                  </div>

               </div>
        </div>

    </div>
  )
}

export default Contact