import PropTypes from 'prop-types';
import FriendListItem from '../FriendListItem/FriendListItem';
import { friendList, item } from './FriendList.module.css';

export default function FriendList({ friends }) {
  return (
    <ul className={friendList}>
      {friends.map(friend => (
        <li key={friend.id} className={item}>
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }),
  ).isRequired,
};
