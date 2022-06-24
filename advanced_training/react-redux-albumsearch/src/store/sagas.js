import { call, put, takeEvery} from 'redux-saga/effects'
import { GET_ALBUM_FETCH, GET_ALBUM_SUCCESS} from './actions'

function usersFetch(){
    return fetch('https://itunes.apple.com/search?term=gaga&media=music&entity=album&attribute=artistTerm&limit=200')
    .then(res=>res.json())
    .then(res=>res.results
    )
}

function* workGetAlbumFetch(){
    const album = yield call(usersFetch)
    yield put({type: GET_ALBUM_SUCCESS, album})
}

function* mySaga(){
    yield takeEvery(GET_ALBUM_FETCH, workGetAlbumFetch)
}

export default mySaga