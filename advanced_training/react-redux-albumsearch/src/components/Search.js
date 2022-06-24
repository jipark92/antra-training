import { Form, Button } from 'react-bootstrap';
import { FcSearch } from 'react-icons/fc';


export default function Search() {

    // const load = () =>{
    //     dispatch()
    // }

    return (
        <div className='d-flex justify-content-center m-3'>
            <div className='d-flex flex-row w-50'>
                <Form.Control type="text" placeholder="Search for a artist" />
                <Button variant="outline-primary w-25"><FcSearch/></Button>
            </div>
        </div>
    )
}