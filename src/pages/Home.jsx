import axios from 'axios';
import { useEffect, useState } from 'react';
import Content from '../components/Content';
import FormInput from '../components/FormInput';
import Header from '../components/Header';

function Home() {
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [isFullTime, setIsFullTime] = useState(false);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [countResult, setCountResult] = useState(false);
  const [isLoading, setIsloading] = useState(false);

  const getData = async () => {
    setIsloading(true);
    await axios.get(`${process.env.REACT_APP_BASEURL}positions.json?page=${page}`)
    .then(res=> {
      setData(data.concat(res.data));
      setCountResult(false);
      setIsloading(false);
    })
  }

  const handleSearch = async () => {
    setIsloading(true);
    await axios.get(`${process.env.REACT_APP_BASEURL}positions.json?description=${description}&location=${location}&full_time=${isFullTime}`)
    .then(res => {
      setData(res.data);
      setCountResult(res.data.length);
      setIsloading(false);
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
      <Header />
      <div className="container">
        <div className="form">
          <FormInput title='Job Description' placeholder='Filter by title, benefits, companies, expertise' changeValue={(value) => setDescription(value)} />
          <FormInput title='Location' placeholder='Filter by city, state, zip code, or country' changeValue={(value) => setLocation(value)} />
          <div className="wrapper-checkbox">
            <input type="checkbox" id="FullTime" checked={isFullTime} onChange={e => setIsFullTime(!isFullTime)} />
            <label htmlFor="FullTime">Full Time Only</label>
          </div>
          <button onClick={handleSearch} className="btn-search">Search</button>
        </div>
        <div className="content">
          {
            countResult ? <h1 style={{marginBottom: '10px'}}>Showing {countResult} Jobs</h1> : <h1 style={{marginBottom: '10px'}}>Job List</h1>
          }
          {
            isLoading ? <h1>loading...</h1> : 
            data.map((e, i) => {
              return e ? <Content data={e} key={i} /> : null
            })
          }
          {
            (page < 2 && !countResult && !isLoading) ? <button className='btn-more-job' onClick={() => setPage(2)}>More Jobs</button> : null
          }
        </div>
      </div>
    </>
  );
}

export default Home;
