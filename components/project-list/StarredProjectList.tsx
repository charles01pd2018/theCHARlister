// dependencies
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
// types
import type { ImageData } from 'types';


/* TYPES */
interface Item {
    image: ImageData;
    href: string;
    title: string;
    description: string;
}

export interface Content {
    items: Item[];
}

export interface Props {
    className?: string;
    content: Content;
}

const StarredProjectList = ( {
    className='',
    content,
}: Props ) => {
    /* CONTENT */
    const { items } = content;

    /* CLASSNAMES */
    const starredProjectClasses = classNames(
        'starred-project-list',
        className,
    );

    return (
        <section className={starredProjectClasses}>
            <ul className='project-list'>
                {
                    items.map( ( { image, href, title, description } ) => (
                        <li key={href} className='item-wrapper'>
                            <Link href={href} target='_bank'>
                                <div className='starred-project'>
                                    <Image src={image.src} alt={image.alt || ''}
                                        width={100} height={100} />
                                        <h3 className='title'>{title}</h3>
                                        <p className='description'>{description}</p>
                                </div>
                            </Link>
                        </li>
                    ) )
                }
            </ul>
        </section>
    );
}

export default StarredProjectList;