import PropTypes from 'prop-types';

import css from './ProfileStats.module.css';

export const ProfileStats = ({ name, data }) => {
  return (
    <li className={css.stats__item} key={name}>
      <span className="label">{name}</span>
      <span className="quantity">{data}</span>
    </li>
  );
};

ProfileStats.propTypes = {
  name: PropTypes.string.isRequired,
  data: PropTypes.number.isRequired,
};
