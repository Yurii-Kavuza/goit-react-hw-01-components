import user from 'data/user.json';
import data from 'data/data.json';
import friends from 'data/friends.json';
import transactions from 'data/transactions.json';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import { Box } from './Box/Box';

export const App = () => {
  return (
    <>
      <Box bg="primary" py={4} as="header">
        <Profile user={user} />
      </Box>
      <Box bg="backgroundGrey" py={5} as="section">
        <Statistics title={'Upload stats'} stats={data} />
      </Box>

      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </>
  );
};
