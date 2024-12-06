import PropTypes from 'prop-types';
import css from './App.module.css';
import Profile from '../Profile/Profile';
import FriendsList from '../FriendList/FriendList';
import TransactionHistory from '../TransactionHistory/TransactionHistory';
import userData from '../../assets/userData.json';
import friends from '../../assets/friendsData.json';
import transactions from '../../assets/transactionsData.json';

export default function App({ title }) {
  const { username, tag, location, avatar, stats } = userData;

  return (
    <div className={css.container}>
      <h1 className={css.title}>{title}</h1>
      <Profile
        name={username}
        tag={tag}
        location={location}
        image={avatar}
        stats={stats}
      />
      <FriendsList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}

App.propTypes = {
  title: PropTypes.string.isRequired,
};
