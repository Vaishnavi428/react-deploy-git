import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import { Link } from 'react-router-dom'
import { HiOutlineArrowLeft } from 'react-icons/hi'


const SingleBlog = () => {
  return (
    <>
    <Meta title={'Dynamic Blog Name'}/>
    <BreadCrumb title='Dynamic Blog Name'/>
    <div className='blog-wrapper home-wrapper-2 py-5'>
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                  <div className='single-blog-card'>
                    <Link to='/blogs' className='d-flex align-items-center gap-10'>
                      <HiOutlineArrowLeft className='fs-4'/>Go back to blog</Link>
                    <h3>A Beautiful Sunday Morning Renaissance</h3>
                    <img src='images/blog-1.jpg' alt='blog'/>
                    <p>Lorem ipsum sit amet consectetur adipisicing elit.Lorem ipsum sit amet consectetur adipisicing elit.Lorem ipsum sit amet consectetur adipisicing elit.Lorem ipsum sit amet consectetur adipisicing elit.</p>
                  </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default SingleBlog