import React from 'react';
import SocialProfile from '../social-profile/SocialProfile';
import FriendList from '../friend-list/FriensList';
import Statistics from '../statistics/Statistics';
import TransactionHistory from '../transaction/TransactionHistory';

import user from '../social-profile/user.json';
import friends from '../friend-list/friends.json';
import statisticalData from '../statistics/statisticalData.json';
import items from '../transaction/transactionHistory.json';

const App = () => (
  <div>
    <SocialProfile
      userName={user.name}
      userTag={user.tag}
      userLocation={user.location}
      userAvatar={user.avatar}
      userFollowers={user.stats.followers}
      userViews={user.stats.views}
      userLikes={user.stats.likes}
    />

    <FriendList friends={friends} />

    <Statistics title="File upload" stats={statisticalData} />

    <TransactionHistory items={items} />
  </div>
);

export default App;
