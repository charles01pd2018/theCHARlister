// dependencies
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
// constants
import { STARRED_PROJECT_LIST_CONTENT } from 'components/content';
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
    content?: Content;
}

const StarredProjectList = ( {
    className='',
    content=STARRED_PROJECT_LIST_CONTENT,
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
                            <Link className='starred-project' href={href} target='_bank'>
                                <div className='starred-project'>
                                    <div className='image-wrapper'>
                                        <Image src={image.src} alt={image.alt || ''}
                                            width={100} height={100} />
                                    </div>
                                    <div className='text-wrapper'>
                                        <div className='title-wrapper'>
                                            <h3 className='title text--xlg'>{title}</h3>
                                            <span className='star-wrapper'>💫</span>
                                        </div>
                                        <p className='description'>{description}</p>
                                    </div>
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