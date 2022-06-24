import { Card, Button } from 'react-bootstrap';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getUsersFetch} from '../store/actions'

export default function Album() {
    const dispatch = useDispatch()

    const users = useSelector(state => state.myFirstReducer.users)
    useEffect(()=>{
        console.log(users)
    })
    
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                USERS:{users.map(user=><div>{user.name}</div>)}
                </Card.Text>
                <Button variant="primary" onClick={()=>dispatch(getUsersFetch())}>Go somewhere</Button>
            </Card.Body>
        </Card>
    )
}