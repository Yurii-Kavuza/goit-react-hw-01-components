import PropTypes from 'prop-types';

import css from './StatisticsItem.module.css';

export const StatisticsItem = ({ id, label, percentage }) => {
  return (
    <li className={css.item} key={id}>
      <span className="label">{label}</span>
      <span className="percentage">{`${percentage} %`}</span>
    </li>
  );
};

StatisticsItem.propTypes = {
  item: PropTypes.exact({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }),
};
