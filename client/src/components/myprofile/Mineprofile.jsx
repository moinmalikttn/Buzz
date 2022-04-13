import React from 'react'
import {Users} from '../../dummyData'
import { useState } from 'react';
import './mineprofile.css'
import { StoreMallDirectoryRounded } from '@material-ui/icons';
import axios from 'axios';

const Mineprofile = () => {

    const name=Users[3].username;
    const image=Users[3].profilePicture
    const info='Sarah Wood is co-founder and COO of video ad tec company,';

    let [userReg,setUserReg] = useState({
        FirstName: "",
        LastName: "",
        Designation: "",
        MyWebsite: "",
        Birthday: "",
        City: "",
        State: "",
        Zip: "",
        Gender: ""

    })

    

    let FirstName=userReg.FirstName;
    let LastName=userReg.LastName;
    let Designation=userReg.Designation;
    let MyWebsite = userReg.MyWebsite;
    let Birthday = userReg.Birthday.toString();
    let City= userReg.City;
    let State= userReg.State;
    let Zip= userReg.Zip;
    let Gender=userReg.Gender;

    let handleChange = (e)=>{
        let name=e.target.name;
        let value=e.target.value;

        setUserReg({...userReg,[name]:value})


    }

    let postModel = async()=>{
        axios({
            method:'post',
            url:`http://localhost:8000/feeds/userprofile/${name}`,
            data:{
                FirstName:FirstName,
                LastName:LastName,
                Designation: Designation,
                MyWebsite: MyWebsite,
                Birthday: Birthday,
                City: City,
                State: State,
                Zip: Zip,
                Gender: Gender
               
            }
        })
        .then((res)=>{
            console.log(res);
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    let SubmitIt = (e)=>{
        e.preventDefault();
      
        postModel();
        resetAll();
    }
    
    

    let resetAll = ()=>{
        setUserReg({
            FirstName:"",
            LastName:"",
            Designation:"",
            MyWebsite:"",
            Birthday:"",
            City:"",
            State:"",
            Zip:"",
            Gender:""
            
        })
    }

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
                              name="FirstName" 
                              id="FirstName"
                              placeholder='First name' 
                              value={FirstName} 
                              onChange={handleChange} />
                          </div>

                          <div className='LastName'>
                              <lavel>Last Name</lavel>
                              <input type='text' 
                              name="LastName" 
                              id="LastName"
                              placeholder='Last name' 
                              value={LastName} 
                              onChange={handleChange}/>
                          </div>

                      </div>

                      <div className='Row'>
                          <div className='Designation'>
                              <label>Designation</label>
                              <input type='text' 
                              name="Designation" 
                              id="Designation"
                              placeholder='Co-founder' 
                              value={Designation} 
                              onChange={handleChange} />
                          </div>

                          <div className='MyWebsite'>
                              <label>My Website</label>
                              <input type='text' 
                              name="MyWebsite" 
                              id="MyWebsite"
                              value={MyWebsite}
                              placeholder='Sarahwood.org' 
                              onChange={handleChange}/>

                          </div>

                      </div>

                      <div className='Row'>
                          <div className='Gender' >
                              <label>Gender </label>
                             
                              <div onChange={handleChange}>
                                <input type="radio" value="Male" name="Gender" /> Male
                                <input type="radio" value="Female" name="Gender" /> Female
                                <input type="radio" value="Other" name="Gender" /> Other
                            </div>

                             
                              

                              {/* <div className='SimpleRow'>
                              <div className='Male'>
                              <input type='radio' id='male' name='gender' 
                              value="Male" />
                              <label>Male</label>
                              </div>
                              
                              <div className='Female'>
                              <input type='radio' id='Female' name='gender'
                              value="Female" />
                              <label>Female</label>
                              </div>
                              </div> */}
                         
                          </div>

                          <div className='Birthday'>
                              <label>Birthday</label>
                              <input type='date' 
                              name="Birthday" 
                              id="Birthday"
                              placeholder='MM/DD/YYYY' 
                              value={Birthday}
                              onChange={handleChange} />
                          </div>

                      </div>

                      <div className='Row'>
                          <div className='City'>
                          <label>City</label>
                              <input type='text' 
                              name="City"
                              id="City"
                              placeholder='City' 
                              value={City}
                              onChange={handleChange} />
                          </div>
                          
                          <div className='State'>
                          <label>State</label>
                              <input type='text' 
                              name="State" 
                              id="State"
                              placeholder='UP' 
                              value={State}
                              onChange={handleChange} />
                          </div>

                          <div className='Zip'>
                          <label>Zip</label>
                              <input type='text'
                               name="Zip"
                               id="Zip"
                              placeholder='201310' 
                              value={Zip}
                              onChange={handleChange} />
                          </div>

                      </div>
                      
                      <div className='Row'>
                          <div className='SimpleRow'>
                          <button type="button" className='Btn'
                           style={{color:"white",backgroundColor:"blue"}} 
                           onClick={SubmitIt}>Save</button>
                          <button type="button" className='Btn' 
                          style={{color:"blue",borderColor:"blue"}} 
                          onClick={resetAll} >Reset All</button>
                          </div>
                     
                      </div>

                      
                  </div>
         
        </div>

      </div>
    
    </>
  )
}

export default Mineprofile
