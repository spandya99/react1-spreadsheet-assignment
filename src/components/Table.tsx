type TableProps = {
  activeTab: string;
};

const columns = [
  { header: 'Name', accessor: 'name' },
  { header: 'Email', accessor: 'email' },
  { header: 'Role', accessor: 'role' },
];

const dataMap: Record<string, { name: string; email: string; role: string }[]> = {
  'Tab 1': [
    { name: 'Priya Sharma', email: 'priya.sharma@example.com', role: 'Frontend Developer' },
    { name: 'Aman Verma', email: 'aman.verma@example.com', role: 'Backend Developer' },
    { name: 'Sneha Iyer', email: 'sneha.iyer@example.com', role: 'UI/UX Designer' },
  ],
  'Tab 2': [
    { name: 'Rahul Joshi', email: 'rahul.joshi@example.com', role: 'QA Engineer' },
    { name: 'Neha Reddy', email: 'neha.reddy@example.com', role: 'Product Manager' },
  ],
  'Tab 3': [
    { name: 'Arjun Patel', email: 'arjun.patel@example.com', role: 'DevOps Engineer' },
    { name: 'Divya Kapoor', email: 'divya.kapoor@example.com', role: 'Technical Writer' },
    { name: 'Kunal Nair', email: 'kunal.nair@example.com', role: 'Business Analyst' },
  ],
};

function Table({ activeTab }: TableProps) {
  const data = dataMap[activeTab] || [];

  return (
    <div className="overflow-x-auto transition-all duration-300">
      <table className="min-w-full border border-gray-300 text-sm text-gray-800 shadow-md rounded-md overflow-hidden">
        <thead className="bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100">
          <tr>
            {columns.map((col) => (
              <th
                key={col.accessor}
                className="px-6 py-4 font-semibold text-left text-gray-700 border-b border-gray-300 uppercase tracking-wide"
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr
              key={idx}
              className={`transition duration-200 ${
                idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'
              } hover:bg-blue-50`}
            >
              {columns.map((col) => (
                <td
                  key={col.accessor}
                  className="px-6 py-3 border-b border-gray-200 text-sm"
                >
                  {row[col.accessor as keyof typeof row]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
