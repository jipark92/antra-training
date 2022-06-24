import { Form, Button } from 'react-bootstrap';

export default function Search() {
    return (
        <div className='d-flex justify-content-center m-3'>
            <div className='d-flex flex-row w-50'>
                <Form.Control type="text" placeholder="Search for a artist" />
                <Button as="input" type="submit" value="Search" />
            </div>
        </div>
    )
}
