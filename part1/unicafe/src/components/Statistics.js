import StatisticLine from './StatisticLine';

const Statistics = ({ clicks }) => {
  const all = clicks.good + clicks.neutral + clicks.bad;
  const average = all
    ? ((clicks.good * 1 + clicks.bad * -1) / all).toFixed(2)
    : 0;
  const positive = all ? (clicks.good / (100 / all)).toFixed(2) + '%' : 0;

  if (all === 0) {
    return (
      <>
        <p>no feedback given</p>
      </>
    );
  }
  return (
    <div>
      <table>
        <tbody>
          <StatisticLine count={clicks.good} text='good' />
          <StatisticLine count={clicks.bad} text='bad' />
          <StatisticLine count={clicks.neutral} text='neutral' />
          <StatisticLine count={all} text='all' />
          <StatisticLine count={average} text='average' />
          <StatisticLine count={positive} text='positive' />
        </tbody>
      </table>
    </div>
  );
};

export default Statistics;
