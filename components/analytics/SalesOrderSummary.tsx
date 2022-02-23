import React, { useEffect, useState } from 'react';
import BarChart from '../common/BarChart';

const SalesOrderSummary = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [categoriesData, setCategoriesData] = useState([]);

  console.log('categoriesData', categoriesData);
  useEffect(() => {
    fetch('https://socialcanvas-admin.kargo.com/v2/embed-stats/subcategories')
      .then((res) => res.json())
      .then(
        (json) => {
          setIsLoaded(true);
          setCategoriesData(json);
        },
        (error) => {
          if (error) {
            console.log('Error: ' + error);
          }
        }
      );
  }, []);
  return (
    <div className="bg-white">
      <BarChart cData={categoriesData.slice(0, 10)} />
    </div>
  );
};

export default SalesOrderSummary;
