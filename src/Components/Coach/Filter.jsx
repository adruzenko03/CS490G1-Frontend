import React, { useState } from 'react'
import FilterButton from './FilterButton';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import OneCoach from './OneCoach';
import Stack from 'react-bootstrap';
import AllCoaches from './AllCoaches';



const Filter = () => {

    const goalList = ["Goal", "Resistance", "Boxing", "Lifting", "Running"];
    const experienceList = ["Experience", "1 Year", "2 Years", "3 Years", "5 Years"];
    const locationList = ["Location" ,"Newark", "Bloomfield", "Ridgewood", "Wayne"];
    const costList = ["Cost" ,"$59/month", "$69/month", "$89/month", "$129/month"];
    
    const [clicked, setClicked] = useState(false);

    const [items, setItems] = useState([]);
    
    const toggleBtn = () => {
        setClicked(true);
    }
    
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');
    const [value3, setValue3] = useState('');
    const [value4, setValue4] = useState('');

    return (
        <>
            <div className='bar-1'>
                <span className='filter-by'>FILTER BY: </span>
                <div className='top-bar'>
                    <Container>
                        <Row className='bla'>
                            <Col>
                                <Dropdown>
                                    <Dropdown.Toggle className='button-4' variant="success" id="button-4">
                                        {value1 || goalList[0]}
                                    </Dropdown.Toggle>
                                
                                    <Dropdown.Menu id="dropdown">
                                        {goalList.slice(1).map((item, index) => (
                                        <Dropdown.Item key={index} onClick={()=>setValue1(item)}>
                                        {item}
                                        </Dropdown.Item>
                                        ))}
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Col>
                            <Col>
                                <Dropdown>
                                    <Dropdown.Toggle className='button-4' variant="success" id="button-4">
                                        {value2 || experienceList[0]}
                                    </Dropdown.Toggle>
                                
                                    <Dropdown.Menu id="dropdown">
                                        {experienceList.slice(1).map((item, index) => (
                                        <Dropdown.Item key={index} onClick={()=>setValue2(item)}>
                                        {item}
                                        </Dropdown.Item>
                                        ))}
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Col>
                            <Col>
                                <Dropdown>
                                    <Dropdown.Toggle className='button-4' variant="success" id="button-4">
                                        {value3 || locationList[0]}
                                    </Dropdown.Toggle>
                                
                                    <Dropdown.Menu id="dropdown">
                                        {locationList.slice(1).map((item, index) => (
                                        <Dropdown.Item key={index} onClick={()=>setValue3(item)}>
                                        {item}
                                        </Dropdown.Item>
                                        ))}
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Col>
                            <Col>
                                <Dropdown>
                                    <Dropdown.Toggle className='button-4' variant="success" id="button-4">
                                        {value4 || costList[0]}
                                    </Dropdown.Toggle>
                                
                                    <Dropdown.Menu id="dropdown">
                                        {costList.slice(1).map((item, index) => (
                                        <Dropdown.Item key={index} onClick={()=>setValue4(item)}>
                                        {item}
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
            {clicked ? <AllCoaches vals = {[value1, value2, value3, value4]}/> : <p>not clicked</p>}
        </>
      );
}

export default Filter

 