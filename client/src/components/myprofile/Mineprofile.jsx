import React from 'react'
import {Users} from '../../dummyData'
import { useState } from 'react';
import './mineprofile.css'

const Mineprofile = () => {

    const name=Users[3].username;
    const image=Users[3].profilePicture
    const info='Sarah Wood is co-founder and COO of video ad tec company,';

    let [firstName,setfirstName] = useState('');

  return (
    <>
      <div className="mineProfile">
        <div className='upper_Container'>
          <div className='img_Container'>
            <img src={image} alt={name} width="100px"
              height="100px"  />
           </div>
        </div>
        <div className='lower_Container'>
          <h1 style={{margin:"30px"}}>{name}</h1>
                  <div className='Detailed_Info'>
                      <div className='Row'>
                          <div className='FirstName'>
                              <label>First  Name</label>
                              <input type='text'
                              placeholder='First name' />
                          </div>

                          <div className='LastName'>
                              <lavel>Last Name</lavel>
                              <input type='text'
                              placeholder='Last name' />
                          </div>

                      </div>

                      <div className='Row'>
                          <div className='Designation'>
                              <label>Designation</label>
                              <input type='text'
                              placeholder='Co-founder' />
                          </div>

                          <div className='MyWebsite'>
                              <label>My Website</label>
                              <input type='text' 
                              placeholder='Sarahwood.org' />

                          </div>

                      </div>

                      <div className='Row'>
                          <div className='Gender'>
                              <label>Gender </label>


                              <div className='SimpleRow'>
                              <div className='Male'>
                              <input type='checkbox' id='male' name='male'
                              value="" />
                              <label>Male</label>
                              </div>
                              
                              <div className='Female'>
                              <input type='checkbox' id='Female' name='Female'
                              value="" />
                              <label>Female</label>
                              </div>
                              </div>
                         
                          </div>

                          <div className='Birthday'>
                              <label>Birthday</label>
                              <input type='text' 
                              placeholder='MM/DD/YYYY' />
                          </div>

                      </div>

                      <div className='Row'>
                          <div className='City'>
                          <label>City</label>
                              <input type='text' 
                              placeholder='City' />
                          </div>
                          
                          <div className='State'>
                          <label>State</label>
                              <input type='text' 
                              placeholder='UP' />
                          </div>

                          <div className='Zip'>
                          <label>Zip</label>
                              <input type='text' 
                              placeholder='201310' />
                          </div>

                      </div>
                      
                      <div className='Row'>
                          <div className='SimpleRow'>
                          <button type="button" className='Btn' style={{color:"white",backgroundColor:"blue"}}>Save</button>
                          <button type="button" className='Btn' style={{color:"blue",borderColor:"blue"}}>Reset All</button>
                          </div>
                     
                      </div>

                      
                  </div>
         
        </div>

      </div>
    
    </>
  )
}

export default Mineprofile
