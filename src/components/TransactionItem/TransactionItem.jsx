import PropTypes from 'prop-types';

import { Cell, Transaction } from './TransactionItem.styled';

export const TransactionItem = ({ type, amount, currency }) => {
  return (
    <Transaction>
      <Cell>{type}</Cell>
      <Cell>{amount}</Cell>
      <Cell>{currency}</Cell>
    </Transaction>
  );
};

TransactionItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
