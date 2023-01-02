// dependencies
import classNames from 'classnames';
// types
import type { ImageData, IconData } from 'types';


/* TYPES */
export interface Content {
    image: ImageData;
    icons: IconData;
}

export interface Props {
    className?: string;
}

const Profile = ( {
    className=''
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