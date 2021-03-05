import React from 'react';
import { Button, Card } from 'react-bootstrap';

const News = (props) => {
    const {title, description} = props.article;
    return (
        <div className='container'>
            <Card className="text-center mt-5">
                <Card.Header>Featured</Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                <Card.Footer className="text-muted">2 days ago</Card.Footer>
            </Card>
        </div>
    );
};

export default News;