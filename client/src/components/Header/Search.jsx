import React, { useContext } from 'react';
import axios from 'axios';
import { ResortsDataContext } from '../../App';
import { RequestDataContext } from './Header';
import { resortsIdentifiers } from '../../Data/resortsIdentifiers';

function Search() {
  const { setResortsData, setRequestData } = useContext(ResortsDataContext);
  const { destination, groupSize, datesRange } = useContext(RequestDataContext);
  const skiSite = resortsIdentifiers.find(resortIdentifier => resortIdentifier.name === destination.data)?.id;

  const dageReg = /(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)[0-9]{2}/g;
  const [startDate, endDate] = datesRange.data.match(dageReg);

  const query = {
    "ski_site": skiSite,
    "from_date": startDate,
    "to_date": endDate,
    "group_size": groupSize.data
  }

  async function getResorts() {
    let data = await axios.get(`http://localhost:3002/getResorts`, { params: { query } })
    setRequestData(query);
    setResortsData(data.data);
  }

  return (
    <div>
      <button className='search-button' onClick={getResorts}>
        <img src='/search.png' alt="abc" />     search
      </button>
    </div>
  );
}

export default Search;