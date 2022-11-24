import axios from 'axios';
import { useEffect, useState } from 'react';
import Content from '../components/Content';
import FormInput from '../components/FormInput';

function Home() {
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [isFullTime, setIsFullTime] = useState(false);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [countResult, setCountResult] = useState(false);

  const getData = async () => {
    await axios.get(`${process.env.REACT_APP_BASEURL}positions.json?page=${page}`)
    .then(res=> {
      setData(data.concat(res.data));
      setCountResult(false);
    })
  }

  const handleSearch = async () => {
    await axios.get(`${process.env.REACT_APP_BASEURL}positions.json?description=${description}&=location=${location}&full_time=${isFullTime}`)
    .then(res => {
      setData(res.data);
      setCountResult(res.data.length);
    });
  }

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getData();
  }, [page])

  return (
    <>
    <div className="container">
        <div className="form">
          <FormInput title='Job Description' placeholder='Filter by title, benefits, companies, expertise' changeValue={(value) => setDescription(value)} />
          <FormInput title='Location' placeholder='Filter by city, state, zip code, or country' changeValue={(value) => setLocation(value)} />
          <div className="wrapper">
            <input type="checkbox" id="FullTime" checked={isFullTime} onChange={e => setIsFullTime(!isFullTime)} />
            <label for="FullTime">Full Time Only</label>
          </div>
          <button onClick={handleSearch}>Search</button>
        </div>

        <div className="content">
          {
            countResult ? <h1 style={{marginBottom: '10px'}}>Showing {countResult} Jobs</h1> : <h1 style={{marginBottom: '10px'}}>Job List</h1>
          }
          {
            data.map(e => {
              return e ? <Content data={e} /> : null
            })
          }
          {
            (page < 2 && !countResult) ? <button className='btn-more-job' onClick={() => setPage(2)}>More Jobs</button> : null
          }
        </div>
      </div>
    </>
  );
}

export default Home;
