import React from 'react'
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import styles from './Article.module.scss'

function Article() {
    return (
        <Card variant='outlined'>
        <div className={styles.article}>
            <Typography variant='h5' >Это важная новость</Typography>
            <Typography variant='body2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem libero quae impedit mollitia suscipit? Distinctio aperiam non voluptate sequi perspiciatis, <b>quo</b> fugit. Sint beatae aliquam incidunt eligendi voluptatum facere unde vel, corrupti, culpa omnis quos corporis! Aperiam quibusdam reiciendis culpa architecto maxime ex nobis a. Rerum odio sit at tempora.
            </Typography>
            <CardActions><Button size='small' >Читать далее</Button></CardActions>
        </div>            
        </Card>
    );
}

export default Article;
