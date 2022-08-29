/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-props-no-multi-spaces */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/function-component-definition */

import Link from 'next/link';
import SideBar from '../../../components/atoms/organisems/SideBar';
import TransactionContent from '../../../components/atoms/organisems/TransactionContent';

/* eslint-disable linebreak-style */
export default function Transactions() {
  return (
    <section className="transactions overflow-auto">
      <SideBar activeMenu="transactions" />
      <TransactionContent />
    </section>
  );
}
