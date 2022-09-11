import user from 'user.json';
import data from 'data.json';
import friends from 'friends.json';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';

export const App = () => {
  return (
    <>
      <Profile user={user} />
      <Statistics title={'Upload stats'} stats={data} />

      <FriendList friends={friends} />
    </>
  );
};

// username={user.username}
//     tag={user.tag}
//     location={user.location}
//     avatar={user.avatar}
//     stats={user.stats}
