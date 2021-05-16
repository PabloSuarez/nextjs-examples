import { useState } from 'react'
import { P } from '../general';

import style from './style.module.css';

type PostCardProps = {
    id?: number,
    title: string,
    description?: string,
    children?: React.ReactNode
}

const PostCard = (post: PostCardProps) => {
    const [open, setOpen] = useState(false);

    const toggleOpen = () => {
        setOpen(!open);
    }

    return (
        <div className={style['post-card']}>
            <h4 className={style['post-card-title']} onClick={toggleOpen}>{post.title}</h4>
            {
                open && <P className={style['post-card-description']}>{post.description}</P>
            }
        </div>
    )
};

export default PostCard;