/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/function-component-definition */
/* eslint-disable linebreak-style */
import cx from 'classnames';
import Link from 'next/link';

interface Menuprops{
    title: string;
    active?: boolean;
    href: string;
}
export default function Menu(props: Partial<Menuprops>) {
  const { title, active, href = '/' } = props;
  const classTitle = cx({
    'nav-link': true,
    active,
  });
  return (
    <li className="nav-item my-auto">
      <Link href={href}>
        <a className={classTitle} aria-current="page">{title}</a>
      </Link>
    </li>
  );
}
