import React, { useEffect, useState } from 'react'
import FilterButton from './FilterButton';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import OneCoach from './OneCoach';
import Stack from 'react-bootstrap';
import AllCoaches from './AllCoaches';
import axios from 'axios';
import RandomCoaches from './RandomCoaches';


const Filter = () => {


    const [goalList, setGoalsList] = useState([]);
    const [experienceList, setExperienceList] = useState([]);
    const [locationList, setLocationList] = useState([]);
    const [cityList, setCityList] = useState([]);
    const [costList, setCostList] = useState([]);
    // const costList = ["Cost" ,"$59/month", "$69/month", "$89/month", "$129/month"];

    
    const [clicked, setClicked] = useState(false);
    const [items, setItems] = useState([]);

    // Get all distinct type of goals from the database.
    useEffect(() => {
        const fetchAllGoals = async () => {
          try {
            const res = await axios.get(`http://localhost:3001/goalsList`);
            console.log(res.data);
            setGoalsList(res.data.surveyData);
          } catch (err) {
            console.log(err);
          }
        };
        fetchAllGoals();
      }, []); 

    // Get experience list.
    useEffect(() => {
        const fetchAllExperiences = async () => {
          try {
            const res = await axios.get(`http://localhost:3001/experienceList`);
            console.log(res.data);
            setExperienceList(res.data.surveyData);
          } catch (err) {
            console.log(err);
          }
        };
        fetchAllExperiences();
      }, []); 

    // Get location list.
    useEffect(() => {
        const fetchAllLocations = async () => {
          try {
            const res = await axios.get(`http://localhost:3001/locationList`);
            console.log(res.data);
            setLocationList(res.data.surveyData);
          } catch (err) {
            console.log(err);
          }
        };
        fetchAllLocations();
      }, []); 

    // Get city list.
    useEffect(() => {
        const fetchAllCities = async () => {
          try {
            const res = await axios.get(`http://localhost:3001/cityList`);
            console.log(res.data);
            setCityList(res.data.surveyData);
          } catch (err) {
            console.log(err);
          }
        };
        fetchAllCities();
      }, []); 

    // Get price list.
    useEffect(() => {
        const fetchCostList = async () => {
          try {
            const res = await axios.get(`http://localhost:3001/costList`);
            console.log(res.data);
            setCostList(res.data.surveyData);
          } catch (err) {
            console.log(err);
          }
        };
        fetchCostList();
      }, []); 




    const toggleBtn = () => {
        setClicked(true);
    }
    
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');
    const [value3, setValue3] = useState('');
    const [value4, setValue4] = useState('');
    const [cityVal, setCityVal] = useState('');

 

    return (
        <>
            <div className='bar-1'>
                <span className='filter-by'>FILTER BY: </span>
                <div className='top-bar'>
                    <Container>
                        <Row className='bla'>
                            <Col>
                                <Dropdown style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                                  <span style={{marginRight:"5px"}}>Goal</span>
                                    <Dropdown.Toggle className='button-4' variant="success" id="button-4" style={{width:"12.5vw"}}>
                                        {value1 || (goalList[0] && goalList[0].goal)}
                                    </Dropdown.Toggle>
                                
                                    <Dropdown.Menu id="dropdown">
                                        {goalList.slice(1).map((item, index) => (
                                        <Dropdown.Item key={index} onClick={()=>setValue1(item.goal)}>
                                        {item.goal}
                                        </Dropdown.Item>
                                        ))}
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Col>
                            <Col>
                                <Dropdown style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                                <span style={{marginRight:"5px"}}>Experience</span>
                                    <Dropdown.Toggle className='button-4' variant="success" id="button-4" style={{width:"11.5vw"}}>
                                        {value2 + " Years" || (experienceList[0] && experienceList[0].experience) + " Years"}
                                    </Dropdown.Toggle>
                                
                                    <Dropdown.Menu id="dropdown" style={{maxHeight:"30vh", overflowY:"auto"}}>
                                        {experienceList.slice(1).map((item, index) => (
                                        <Dropdown.Item key={index} onClick={()=>setValue2(item.experience)}>
                                        {item.experience + " Years"}
                                        </Dropdown.Item>
                                        ))}
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Col>
                            <Col>
                                <Dropdown style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                                    <span style={{marginRight:"5px"}}>State</span>
                                    <Dropdown.Toggle className='button-4' variant="success" id="button-4" style={{width:"11.5vw"}}>
                                        {value3  || (locationList[0] && locationList[0].state)}
                                    </Dropdown.Toggle>
                                
                                    <Dropdown.Menu id="dropdown" style={{maxHeight:"30vh", overflowY:"auto"}}>
                                        {locationList.slice(1).map((item, index) => (
                                        <Dropdown.Item key={index} onClick={()=>setValue3(item.state)}>
                                        {item.state}
                                        </Dropdown.Item>
                                        ))}
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Col>
                            <Col>
                                <Dropdown style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                                    <span style={{marginRight:"5px"}}>Cost</span>
                                    <Dropdown.Toggle className='button-4' variant="success" id="button-4" style={{width:"11.5vw"}}>
                                        {"$" + value4 + "/month" || "$" + (costList[0] && costList[0].cost) + "/month"}
                                    </Dropdown.Toggle>
                                
                                    <Dropdown.Menu id="dropdown" style={{maxHeight:"30vh", overflowY:"auto"}}>
                                        {costList.slice(1).map((item, index) => (
                                        <Dropdown.Item key={index} onClick={()=>setValue4(item.cost)}>
                                        {"$" + item.cost + "/month"}
                                        </Dropdown.Item>
                                        ))}
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <br />
                <div className='apply-btn'>
                    <Button 
                        onClick={toggleBtn}
                        id='apply' 
                        variant="dark"
                    >
                        APPLY
                    </Button>
                </div>
            </div>
            {clicked ? 
              <AllCoaches vals = {[value1, value2, value3, value4]}/> 
              : 
              <RandomCoaches vals={[value1, value2, value3, value4]}/>}
        </>
      );
}

export default Filter

 

/*

<div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
  <span style={{marginRight:"5px"}}>Location</span>
  <input type="checkbox" checked={isChecked}  onChange={handleCheckboxChange} />
</div>

*/