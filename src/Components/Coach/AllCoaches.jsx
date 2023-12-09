import React, {useState, useEffect} from 'react'
import OneCoach from './OneCoach'
import Stack from 'react-bootstrap/Stack';
import FilterButton from './FilterButton';
import './AllCoaches.css'
import { MyContext } from './MyContext';
import axios from 'axios';

const AllCoaches = ({vals}) => {

    const [coachesList, setCoachesList] = useState([]);

    // Get all coaches.
    useEffect(() => {
        const fetchAllCoaches = async () => {
          try {
            const res = await axios.get(`http://localhost:3001/coachList`);
            console.log(res.data);
            setCoachesList(res.data.surveyData);
          } catch (err) {
            console.log(err);
          }
        };
        fetchAllCoaches();
      }, []); 

    //   const lst = ['Yoga', '5 Years', 'Ridgefield', '$59/month'];
      console.log({vals})

    return (
        <>
        <br />
            <div className='allCoaches'>
                {coachesList.map((coach)=>{
                    if(coach.goal===vals[0] && coach.experience ===vals[1] && coach.state===vals[2] && coach.cost===vals[3]){
                        console.log('cldkdckcjdlcj' + coach);
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
                coach.goal !== vals[0] ||
                coach.experience !== vals[1] ||
                coach.state !== vals[2] ||
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