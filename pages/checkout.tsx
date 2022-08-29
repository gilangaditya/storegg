/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */

import Link from 'next/link';
import Image from 'next/image';
import CheckoutConfimation from '../components/atoms/organisems/CheckoutConfimation';
import CheckoutDetail from '../components/atoms/organisems/CheckoutDetail';
import CheckoutItem from '../components/atoms/organisems/CheckoutItem';

/* eslint-disable linebreak-style */
export default function checkout() {
  return (
    <section className="checkout mx-auto pt-md-100 pb-md-145 pt-30 pb-30">
      <div className="container-fluid">
        <div className="logo text-md-center text-start pb-50">
          <a className="" href="/#">
            <Image src="/icon/logo.svg" width={60} height={60} alt="logo" />
          </a>
        </div>
        <div className="title-text pt-md-50 pt-0">
          <h2 className="text-4xl fw-bold color-palette-1 mb-10">Checkout</h2>
          <p className="text-lg color-palette-1 mb-0">Waktunya meningkatkan cara bermain</p>
        </div>
        <CheckoutItem />
        <hr />
        <CheckoutDetail />
        <CheckoutConfimation />

      </div>
    </section>
  );
}
