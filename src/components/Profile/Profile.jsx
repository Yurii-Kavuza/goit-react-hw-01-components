import PropTypes from 'prop-types';

import css from './Profile.module.css';
import { ProfileStats } from 'components/ProfileStats/ProfileStats';

export const Profile = ({
  user: { username, tag, location, avatar, stats },
}) => {
  const { followers, views, likes } = stats;
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={avatar} alt={username} className="avatar" />
        <p className="name">{username}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className={css.stats}>
        <ProfileStats name={'Followers'} data={followers} />
        <ProfileStats name={'Views'} data={views} />
        <ProfileStats name={'Likes'} data={likes} />
      </ul>
    </div>
  );
};

Profile.propTypes = {
  user: PropTypes.exact({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.exact({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  }),
};
