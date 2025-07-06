type ToolbarProps = {
  activeTab: string;
  onTabClick: (tab: string) => void;
};

function Toolbar({ activeTab, onTabClick }: ToolbarProps) {
  const tabs = ['Tab 1', 'Tab 2', 'Tab 3'];

  return (
    <div className="flex gap-6 mb-6 border-b border-gray-300 pb-2">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => {
            onTabClick(tab);
            console.log(`Clicked: ${tab}`);
          }}
          className={`text-base font-medium px-4 py-2 border-b-2 transition-all ${
            activeTab === tab
              ? 'text-blue-600 border-blue-600'
              : 'text-gray-500 border-transparent hover:text-blue-500'
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

export default Toolbar;
