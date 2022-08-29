/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/jsx-props-no-multi-spaces */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/function-component-definition */

import Link from 'next/link';
import Image from 'next/image';
import SignUpForm from '../components/atoms/organisems/SignUpForm';

/* eslint-disable linebreak-style */
export default function SignUp() {
  return (
    <section className="sign-up mx-auto pt-lg-100 pb-lg-100 pt-30 pb-47">
      <div className="container mx-auto">
        <form action="">
          <div className="pb-50">
            <Link href="/">
              <a className="navbar-brand">
                <Image src="/icon/logo.svg" width={60} height={60} alt="logo" />
              </a>
            </Link>
            
          </div>
          <SignUpForm />
        </form>
      </div>
    </section>
  );
}
