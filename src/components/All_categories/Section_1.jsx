import React from 'react'
import Theamess from '../../hooks/theame'
const Section_1 = () => {
  const {all}=Theamess()
  return (
    <main style={all} className='all_hero_con_1'>
      <h1>Discover Your Perfect <br /> Products Today! </h1>
      <p>Explore Our diverse range of categories designed to meet your needs. find  exactly what your are looking for with ease and convience.</p>
      <div className="btn_feature" >
        <button>Learn More</button>
        <button>Shop now</button>
      </div>
    </main>
  )
}

export default Section_1