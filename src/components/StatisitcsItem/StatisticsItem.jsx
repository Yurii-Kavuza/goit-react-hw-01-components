import PropTypes from 'prop-types';

import { Label, ListItem, Percentage } from './StatisticsItem.styled';

export const StatisticsItem = ({ id, label, percentage, color }) => {
  return (
    <ListItem key={id} color={color}>
      <Label>{label}</Label>
      <Percentage>{`${percentage} %`}</Percentage>
    </ListItem>
  );
};

StatisticsItem.propTypes = {
  item: PropTypes.exact({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }),
};
