import React from 'react'
import {Card, Row, Col} from 'react-bootstrap';
import { AppContext } from '../components/context';

export const Home = () => {

    const {posts} = React.useContext(AppContext)

    return (
        <Row xs={1} md={2} className="g-4">
        {posts.map((obj, index) => (
            <Col key={obj.id}>
            <Card>
                <Card.Img variant="top" src={obj.imageUrl} />
                <Card.Body>
                <Card.Title>{obj.title}</Card.Title>
                <Card.Text>
                    {obj.text}
                </Card.Text>
                </Card.Body>
            </Card>
            </Col>
        ))}
    </Row>
    )
}
