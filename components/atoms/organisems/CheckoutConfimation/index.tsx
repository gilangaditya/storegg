/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/function-component-definition */
/* eslint-disable linebreak-style */
import Link from 'next/link';

export default function CheckoutConfimation() {
  return (
    <>
      <label className="checkbox-label text-lg color-palette-1">
        I have transferred the money
        <input type="checkbox" />
        <span className="checkmark" />
      </label>
      <div className="d-md-block d-flex flex-column w-100 pt-50">
        <Link href="/complete-checkout">
          <a
            className="btn btn-confirm-payment rounded-pill fw-medium text-white border-0 text-lg"
            role="button"
          >
            Confirm
            Payment

          </a>
        </Link>
      </div>
    </>
  );
}
