// dependencies
import classNames from 'classnames';
// content
import { PROFILE_CONTENT } from 'components/content';
// types
import type { ImageData, IconData } from 'types';


/* TYPES */
export interface Content {
    image: ImageData;
    icons: IconData;
}

export interface Props {
    className?: string;
    content?: Content;
}

const Profile = ( {
    className='',
    content=PROFILE_CONTENT,
}: Props ) => {
    /* CLASSNAMES */
    const profileClasses = classNames(
        'profile',
        className,
    );

    return (
        <section className={profileClasses}>

        </section>
    );
}

export default Profile;