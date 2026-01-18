import React, { useState } from 'react';
import { INITIAL_PORTFOLIO } from './constants';
import { PortfolioData } from './types';
import PortfolioView from './components/PortfolioView';

const App: React.FC = () => {
  const [data, setData] = useState<PortfolioData>(INITIAL_PORTFOLIO);

  const handleDownloadResume = () => {
    window.open('/Tanmay_Mandal_Resume.pdf', '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <main>
        <PortfolioView
          data={data}
          onDownloadResume={handleDownloadResume}
          isGeneratingResume={false}
        />
      </main>
    </div>
  );
};

export default App;
