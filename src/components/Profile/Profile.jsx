import PropTypes from 'prop-types';
import { ProfileStats } from 'components/ProfileStats/ProfileStats';
import {
  Avatar,
  Container,
  Description,
  Stats,
  Tag,
  Username,
  Location,
} from './Profile.styled';

export const Profile = ({
  user: { username, tag, location, avatar, stats },
}) => {
  const { followers, views, likes } = stats;
  return (
    <Container>
      <Description>
        <Avatar src={avatar} alt={username} />
        <Username>{username}</Username>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>
      <Stats>
        <ProfileStats name={'Followers'} data={followers} />
        <ProfileStats name={'Views'} data={views} />
        <ProfileStats name={'Likes'} data={likes} />
      </Stats>
    </Container>
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
