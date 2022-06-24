import { Card, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';

export default function Album() {

    const users = useSelector(state => state.myFirstReducer.users)

    const showUsers = users.map((user,i)=>{
        return (
                <Card style={{ width: '10rem' }} key={i}>
                    <Card.Img variant="top" src={user.artworkUrl60}/>
                    <Card.Body>
                    <Card.Title>{user.collectionName}</Card.Title>
                    <Card.Text>
                    {user.artistName}
                    </Card.Text>
                    {/* <Button variant="primary" >Go somewhere</Button> */}
                    </Card.Body>
                </Card>
        )
    })

    return (
        <div className='d-flex flex-wrap justify-content-around gap-5'>
            {showUsers}
        </div>
    )
}