import React, { useContext } from 'react';
import '../../css/content.css';
import { ResortsDataContext } from '../../App';
import { resortsIdentifiers } from '../../Data/resortsIdentifiers';
import ResortCard from './ResortCard';
import { sortByNestedProp } from '../../utils.js';

function Content() {
  const { resortsData, requestData } = useContext(ResortsDataContext);
  function getResortName(requestSkiSite) {
    return resortsIdentifiers.find(resortIdentifier => resortIdentifier.id === requestSkiSite)?.name;
  }
  const resortName = getResortName(requestData?.['ski_site']);

  return (
    <div className='content'>
      <div className="headers">
        <h1 className="main-header">
          Select your ski trip
        </h1>
        {resortsData &&
          <>
            <h2 className="sub-header">
              {resortsData.length} ski trips options • {resortName} • {requestData.from_date} - {requestData.to_date} • {requestData.group_size} people
            </h2>
            {sortByNestedProp('PricesInfo.AmountAfterTax', resortsData).map((resort) => (
              <ResortCard key={resort.HotelCode} data={resort} resortName={resortName} groupSize={requestData.group_size}/>
            ))}
          </>
        }
      </div>
    </div>
  );
}

export default Content;