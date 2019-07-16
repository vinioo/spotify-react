import { call, put } from 'redux-saga/effects'
import API from '../../services/api'


import { Creators as PlaylistsActions } from '../ducks/playlists'

export function* getPlaylists() {
    try {
        const response = yield call(API.get, '/playlists');
        console.log('oi')
        yield put(PlaylistsActions.getPlaylistsSuccess(response.data))
    } catch (error) {
        console.log(error)
    }
}