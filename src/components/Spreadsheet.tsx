import { useState } from 'react';
import Toolbar from './Toolbar';
import Table from './Table';

function Spreadsheet() {
  const [activeTab, setActiveTab] = useState('Tab 1');

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <Toolbar activeTab={activeTab} onTabClick={setActiveTab} />
      <Table activeTab={activeTab} /> {/* ✅ IMPORTANT */}
    </div>
  );
}

export default Spreadsheet;
