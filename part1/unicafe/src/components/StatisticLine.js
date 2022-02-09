import React from 'react';

const StatisticLine = (props) => {
  return (
    <tr>
      <td>
        {props.text}: {props.count}
      </td>
    </tr>
  );
};

export default StatisticLine;
