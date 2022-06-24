import { Form, Button } from 'react-bootstrap';
import { FcSearch } from 'react-icons/fc';
import { useDispatch } from 'react-redux';
import {getAlbumFetch} from '../store/actions'

export default function Search() {
    const dispatch = useDispatch()

    return (
        <div className='d-flex justify-content-center m-3'>
            <div className='d-flex flex-row w-50'>
                <Form.Control type="text" placeholder="Search for a artist" />
                <Button variant="outline-primary w-25" onClick={()=>dispatch(getAlbumFetch())}><FcSearch/></Button>
            </div>
        </div>
    )
}