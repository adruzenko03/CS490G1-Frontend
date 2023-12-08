import React, {useState} from 'react'
import OneCoach from './OneCoach'
import Stack from 'react-bootstrap/Stack';
import FilterButton from './FilterButton';
import './AllCoaches.css'
import { MyContext } from './MyContext';

const AllCoaches = ({vals}) => {

    const [coachesList, setCoachesList] = useState([
        {
            name: "JOHN MOE",
            goals: "Resistance",
            experience: "1 Year",
            location: "Newark",
            cost: "$59/month",
            schedule: "Monday, Tuesday, Thursday, Friday"
        },
        {
            name: "ANDREW RICHEY",
            goals: "Boxing",
            experience: "2 Years",
            location: "Newark",
            cost: "$69/month",
            schedule: "Monday, Saturday, Sunday"
        },
        {
            name: "BEN LIAM",
            goals: "Resistance",
            experience: "5 Years",
            location: "Bloomfield",
            cost: "$89/month",
            schedule: "Saturday, Sunday"
        },
        {
            name: "JOSH NESTOR",
            goals: "Lifting",
            experience: "10 Years",
            location: "Ridgewood",
            cost: "$59/month",
            schedule: "Weekdays"
        },
        {
            name: "TRISTAN SMITH",
            goals: "Lifting",
            experience: "10 Years",
            location: "Ridgewood",
            cost: "$59/month",
            schedule: "Weekdays"
        },
        {
            name: "TYRON SMITH",
            goals: "Running",
            experience: "3 Years",
            location: "Ridgewood",
            cost: "$129/month",
            schedule: "Everyday"
        },
        {
            name: "TYRON SMITH",
            goals: "Running",
            experience: "3 Years",
            location: "Ridgewood",
            cost: "$129/month",
            schedule: "Everyday"
        },
        {
            name: "TYRON SMITH",
            goals: "Running",
            experience: "3 Years",
            location: "Ridgewood",
            cost: "$129/month",
            schedule: "Everyday"
        },
        {
            name: "TYRON SMITH",
            goals: "Running",
            experience: "3 Years",
            location: "Ridgewood",
            cost: "$129/month",
            schedule: "Everyday"
        },
        {
            name: "TYRON SMITH",
            goals: "Running",
            experience: "3 Years",
            location: "Ridgewood",
            cost: "$129/month",
            schedule: "Everyday"
        }
      ]);

    //   const lst = ['Yoga', '5 Years', 'Ridgefield', '$59/month'];
      console.log({vals})

    return (
        <>
        <br />
            <div className='allCoaches'>
                {coachesList.map((coach)=>{
                    if(coach.goals===vals[0] && coach.experience ===vals[1] && coach.location===vals[2] && coach.cost===vals[3]){
                        return(
                            <Stack gap={3}>
                                <div className='p-2'><OneCoach items={coach}/></div>
                            </Stack>
                        );
                    }else{
                        return(null);
                    }
                })}

            {coachesList.every(
                (coach) =>
                coach.goals !== vals[0] ||
                coach.experience !== vals[1] ||
                coach.location !== vals[2] ||
                coach.cost !== vals[3]
            ) && (
                <Stack gap={3} style={{paddingLeft:"10px", marginTop:"10px"}}>
                    <p>No coaches meet the specified conditions.</p>
                    {/* <p>Would you like to display a list of coaches near you?</p>
                    <button>Yes</button>
                    <button>No</button> */}
                </Stack>
            )}
                
            </div>

        </>
      );

}

export default AllCoaches