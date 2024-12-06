import PropTypes from 'prop-types';
import clsx from 'clsx';
import { container, online, offline } from './FriendListItem.module.css';
export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div className={container}>
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      <p className={clsx(online, { [offline]: !isOnline })}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
