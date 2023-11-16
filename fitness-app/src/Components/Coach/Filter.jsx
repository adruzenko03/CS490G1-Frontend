//import React, { useState } from 'react'
import FilterButton from './FilterButton';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
//import Dropdown from 'react-bootstrap/Dropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//import OneCoach from './OneCoach';
//import Stack from 'react-bootstrap';



const Filter = ({ type }) => {

    const goalList = ["Goal", "Resistance", "Boxing", "Lifting", "Running"];
    const experienceList = ["Experience", "1 Year", "2 Years", "3 Years", "5 Years"];
    const locationList = ["Location" ,"Newark", "Bloomfield", "Ridgewood", "Wayne"];
    const costList = ["Cost" ,"$59/month", "$69/month", "$89/month", "$129/month"];

    // const [clicked, setClicked] = useState(false);

    // const toggleBtn = () => {
    //     setClicked(true);
    // }


    return (
       
        <div className='bar-1'>
            <span className='filter-by'>FILTER BY: </span>
            <div className='top-bar'>
                <Container>
                    <Row className='bla'>
                        <Col><FilterButton items={goalList}/></Col>
                        <Col><FilterButton items={experienceList}/></Col>
                        <Col><FilterButton items={locationList}/></Col>
                        <Col><FilterButton items={costList}/></Col>
                    </Row>
                </Container>
            </div>
            <br />
            <div className='apply-btn'>
                <Button 
                    //onClick={toggleBtn}
                    id='apply' 
                    variant="dark"
                >APPLY</Button>
            </div>

        </div>
      );
}

export default Filter
