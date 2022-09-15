import PropTypes from 'prop-types';
import { StatisticsItem } from 'components/StatisitcsItem/StatisticsItem';
import { getRandomHexColor } from 'utils/randomColor';
import { Stats, StatsList, Title } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <Stats>
      {title && <Title>{title}</Title>}
      <StatsList>
        {stats.map(({ id, label, percentage }) => {
          return (
            <StatisticsItem
              key={id}
              id={id}
              label={label}
              percentage={percentage}
              color={getRandomHexColor(id)}
            />
          );
        })}
      </StatsList>
    </Stats>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
