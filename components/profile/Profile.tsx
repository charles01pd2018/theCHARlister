// dependencies
import classNames from 'classnames';
import Image from 'next/image';
// content
import { PROFILE_CONTENT } from 'components/content';
// lib
import { useClientWidth, BREAKPOINT_SMALL } from 'lib';
// types
import type { ImageData, IconTitleData } from 'types';


/* TYPES */
export interface Content {
    name: string;
    role: string;
    image: ImageData;
    icons: IconTitleData[];
}

export interface Props {
    className?: string;
    content?: Content;
}

const Profile = ( {
    className='',
    content=PROFILE_CONTENT,
}: Props ) => {
    /* HOOKS */
    const clientWidth = useClientWidth();

    /* CONTENT */
    const { name, role, image, icons } = content;
    const [ width, height ] = clientWidth > BREAKPOINT_SMALL ? [ 25, 25 ] : [ 18, 18 ];

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
            {
                icons.map( ( { title, ...icon } ) => (
                    <span key={icon.alt} className='icon-wrapper' title={title}>
                        <Image width={width} height={height}
                            src={icon.data} alt={icon.alt} />
                    </span>
                ) )
            }
        </section>
    );
}

export default Profile;