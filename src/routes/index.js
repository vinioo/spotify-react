import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Browse from '../pages/browse';
import Playlist from '../pages/playlist'

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Browse} />
            <Route path="/playlists/:id" component={Playlist}></Route>
        </Switch>
    );
};

export default Routes;
