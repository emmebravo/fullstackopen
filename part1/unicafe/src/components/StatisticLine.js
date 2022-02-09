import React from 'react';

const StatisticLine = ({ text, count }) => {
  return (
    <tr>
      <td>
        {text}: {count}
      </td>
    </tr>
  );
};

export default StatisticLine;
