import moment from 'moment/moment';
import { Link } from 'react-router-dom';

const Content = ({data}) => {
  return (
    <>
      <div className="list">
        <div className="wrapper">
          <Link to={data.id} style={{display:'block'}} className="title">{data.title}</Link>
          <p className="desc">{data.company} - <span>{data.type}</span></p>
        </div>
        <div className="wrapper">
          <p className="location">{data.location}</p>
          <p className="date">{moment(data.created_at).fromNow()}</p>
        </div>
      </div>
    </>
  )
}

export default Content
