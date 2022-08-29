/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/function-component-definition */

import Link from 'next/link';
import OverviewContent from '../../components/atoms/organisems/OverviewContent';
import SideBar from '../../components/atoms/organisems/SideBar';

/* eslint-disable linebreak-style */
export default function Member() {
  return (
    <section className="overview overflow-auto">
      <SideBar activeMenu="overview" />
      <OverviewContent />
    </section>
  );
}
