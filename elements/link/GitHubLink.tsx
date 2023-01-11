// dependencies
import classNames from 'classnames';
import Link from 'next/link';
// elements
import { SVG } from 'elements';


/* TYPES */
export interface Props {
    className?: string;
}

const GithubLink = ( {
    className='',
}: Props ) => {
    /* CLASSNAMES */
    const githubLinkClasses = classNames(
        'github-link',
        'text--sm',
        className,
    );

    return (
        <Link className={githubLinkClasses}
            target='_blank' href='https://github.com/charles01pd2018/theCHARlister'>
            <SVG data='/static/icons/white-github-logo.svg' alt='Github Logo'
                width={20} height={20} />
            Code
        </Link>
    );
}

export default GithubLink;