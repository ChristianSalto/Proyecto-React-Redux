/* eslint-disable */

import React, { useEffect, useState } from 'react';

import Cards from '../Cards/Cards';
import { Link } from 'react-router-dom';
import { DivContainerAllAds, DivHome } from './styledSeeAllAds';
import T from 'prop-types';

function SeeAllAds({ fetchAllAds }) {
  const [ads, setAds] = useState(null);

  useEffect(() => {
    const getAds = async () => {
     const results = await fetchAllAds();
      setAds(results);
    };

    getAds();
  }, []);

  return (
    <DivContainerAllAds>
      <DivHome>
        <Link to="/listAds">
          <h4>Home</h4>
        </Link>
      </DivHome>
      {ads === null ? <h3>Loading...</h3> : <Cards ads={ads} />}
    </DivContainerAllAds>
  );
}

SeeAllAds.propTypes = {
  fetchAllAd: T.func,
};

export default SeeAllAds;
