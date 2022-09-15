import PropTypes from 'prop-types';
import { Label, ListItem, Quantity } from './ProfileStats.styled';

export const ProfileStats = ({ name, data }) => {
  return (
    <ListItem key={name}>
      <Label>{name}</Label>
      <Quantity>{data}</Quantity>
    </ListItem>
  );
};

ProfileStats.propTypes = {
  name: PropTypes.string.isRequired,
  data: PropTypes.number.isRequired,
};
