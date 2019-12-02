import React from 'react';
import styles from './friend-list.module.css';
import T from 'prop-types';

const FriendList = ({ friends }) => (
  <ul className={styles.friendList}>
    {friends.map(friend => (
      <li key={friend.id} className={styles.item}>
        <span
          className={friend.isOnline ? styles.isOnline : styles.isoffLine}
        ></span>
        <img className={styles.avatar} src={friend.avatar} alt="" width="48" />
        <p className={styles.name}>{friend.name}</p>
      </li>
    ))}
  </ul>
);

FriendList.defaultProps = {
  friends: T.shape({
    avatar:
      'https://cdn1.iconfinder.com/data/icons/user-pictures/100/unknown-512.png',
    name: 'Unknow name',
  }),
};

FriendList.propTypes = {
  friends: T.arrayOf(
    T.shape({
      avatar: T.string.isRequired,
      name: T.string.isRequired,
      id: T.number.isRequired,
      isOnline: T.bool.isRequired,
    }).isRequired,
  ).isRequired,
};

export default FriendList;
