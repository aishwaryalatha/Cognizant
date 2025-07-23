import React from 'react';
import CohortDetails from './CohortDetails';

function App() {
  const sampleCohort = {
    name: 'React Bootcamp',
    status: 'Ongoing',
    startDate: '2025-06-01',
    endDate: '2025-08-31'
  };

  return (
    <div>
      <h2>My Academy Dashboard</h2>
      <CohortDetails cohort={sampleCohort} />
    </div>
  );
}

export default App;
