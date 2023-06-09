// Table.js
import React, { useState } from 'react';

const Table = () => {
  const [dateRange, setDateRange] = useState('');
  const [dimensionFilter, setDimensionFilter] = useState('');

  const handleDateRangeChange = (e) => {
    setDateRange(e.target.value);
  };

  const handleDimensionFilterChange = (e) => {
    setDimensionFilter(e.target.value);
  };

  return (
    <div className="table">
      <div className="filters">
        <label>Date Range:</label>
        <input type="text" value={dateRange} onChange={handleDateRangeChange} />

        <label>Dimension Filter:</label>
        <input
          type="text"
          value={dimensionFilter}
          onChange={handleDimensionFilterChange}
        />
      </div>

      <table>
        <thead>
          <tr>
            <th>Column 1</th>
            <th>Column 2</th>
            <th>Column 3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Value 1</td>
            <td>Value 2</td>
            <td>Value 3</td>
          </tr>
          <tr>
            <td>Value 4</td>
            <td>Value 5</td>
            <td>Value 6</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;