import React from 'react';
import styles from './social-profile.module.css';
import T from 'prop-types';

const SocialProfile = ({
  userName,
  userTag,
  userLocation,
  userAvatar,
  userFollowers,
  userViews,
  userLikes,
}) => (
  <div className={styles.profile}>
    <div className={styles.description}>
      <img
        src={userAvatar}
        alt="user avatar"
        width="150"
        className={styles.avatar}
      />
      <p className={styles.name}>{userName}</p>
      <p className={styles.tag}>@{userTag}</p>
      <p className={styles.location}>{userLocation}</p>
    </div>

    <ul className={styles.stats}>
      <li className={styles.list}>
        <span className={styles.label}>Followers</span>
        <span className={styles.quantity}>{userFollowers}</span>
      </li>
      <li className={styles.list}>
        <span className={styles.label}>Views</span>
        <span className={styles.quantity}>{userViews}</span>
      </li>
      <li className={styles.list}>
        <span className={styles.label}>Likes</span>
        <span className={styles.quantity}>{userLikes}</span>
      </li>
    </ul>
  </div>
);

SocialProfile.defaultProps = {
  userAvatar: 'https://karamel-store.com/1.png',
  userName: 'Name unknown',
};

SocialProfile.propTypes = {
  userAvatar: T.string.isRequired,
  userName: T.string.isRequired,
  userTag: T.string.isRequired,
  userLocation: T.string.isRequired,
  userFollowers: T.number.isRequired,
  userViews: T.number.isRequired,
  userLikes: T.number.isRequired,
};

export default SocialProfile;
