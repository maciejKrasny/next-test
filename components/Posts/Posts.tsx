import { Button, Card, CardActions, CardContent, makeStyles, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  `;
export default function Posts() {
    const [posts, setPosts] = useState<any>();
    const getPosts = async () => {
        try {
            const cposts = await  fetch('https://jsonplaceholder.typicode.com/todos/');
            const body = await cposts.json();
            setPosts(body);
        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        getPosts()
    }, []);
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    return (
        <Container>
            {posts && posts?.map((post: any) => (
                <Card className={classes.root}>
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            {post.title}
                        </Typography>
                        <Typography variant="h5" component="h2">
                            be{bull}nev{bull}o{bull}lent
        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            adjective
        </Typography>
                        <Typography variant="body2" component="p">
                            well meaning and kindly.
          <br />
                            {'"a benevolent smile"'}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>))}
        </Container>
    )
}
