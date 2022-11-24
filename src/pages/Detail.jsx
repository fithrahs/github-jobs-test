import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Arrow from '../arrow-left.svg';
import Header from '../components/Header';

function Detail() {
  const { id } = useParams();
  const [data, setData] = useState({});

  const getData = async () => {
    await axios.get(`${process.env.REACT_APP_BASEURL}positions/${id}`)
    .then(res=> {
      setData(res.data);
    })
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <>
      <Header />
      <div className="container">
        <Link to='/' className='btn-back'> <img src={Arrow} alt="" /> back</Link>
        <div className="content">
          <div className="header-content">
            <span>{data.type} / {data.location}</span>
            <h1>{data.title}</h1>
          </div>
          <div className="body-content">
            <div className='side-left' dangerouslySetInnerHTML={{__html: data.description}}></div>
            <div className="side-right">
              <div className="card">
                <div className="card-header">
                  <h3>{data.company}</h3>
                  <div className="other-job">1 other job</div>
                </div>
                <div className="card-body">
                  <img src={data.company_logo} alt={data.company} />
                </div>
                <div className="card-footer">
                  <a href={data.company_url}>{data.company_url}</a>
                </div>
              </div>
              <div className="card--yellow">
                <div className="card-header">
                  <h3>How to apply</h3>
                </div>
                <div className="card-body" dangerouslySetInnerHTML={{__html: data.how_to_apply}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Detail;
