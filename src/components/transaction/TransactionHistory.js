import React from 'react';
import styles from './transaction.module.css';
import T from 'prop-types';

const TransactionHistory = ({ items }) => (
  <table className={styles.transactionHistory}>
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>

    {items.map(item => (
      <tbody key={item.id}>
        <tr>
          <td>{item.type}</td>
          <td>{item.amount}</td>
          <td>{item.currency}</td>
        </tr>
      </tbody>
    ))}
  </table>
);

TransactionHistory.defaultProps = {
  items: [],
};

TransactionHistory.propTypes = {
  items: T.arrayOf(
    T.shape({
      id: T.string.isRequired,
      type: T.string.isRequired,
      amount: T.string.isRequired,
      currency: T.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default TransactionHistory;
