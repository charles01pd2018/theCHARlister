// dependencies
import classNames from 'classnames';
// content
import { PROFILE_CONTENT } from 'components/content';
// types
import type { ImageData, IconData } from 'types';


/* TYPES */
export interface Content {
    name: string;
    role: string;
    image: ImageData;
    icons: IconData[];
}

export interface Props {
    className?: string;
    content?: Content;
}

const Profile = ( {
    className='',
    content=PROFILE_CONTENT,
}: Props ) => {
    /* CONTENT */
    const { name, role } = content;

    /* CLASSNAMES */
    const profileClasses = classNames(
        'profile',
        className,
    );

    return (
        <section className={profileClasses}>
            <div className='content'>
                <h3 className='h6 name'>{name}</h3>
                <p className='text--norm role'>{role}</p>
            </div>
        </section>
    );
}

export default Profile;