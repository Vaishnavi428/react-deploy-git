import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'

const RefundPolicy = () => {
  return (
    <>
    <Meta title={'Refund policy'}/>
    <BreadCrumb title='Refund policy'/>
    <section className='policy-wrapper py-5 home-wrapper-2'>
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                    <div className='policy'></div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default RefundPolicy