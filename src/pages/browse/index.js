import React from 'react';

import { Container, Title, List, Playlist } from './styles';

const Browse = () => {
    return (
        <Container>
            <Title>Navegar</Title>
            <List>
                <Playlist to="/playlists/1">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM5XrW6k2_AuAzqFIqjYE8eKZozLS9KYj6QeHGvpFcxI9zP9XzSw"
                        alt="playlist"
                        srcset=""
                    />
                    <strong>Rock Pesado</strong>
                    <p>Ouca as melhores do rock atualmente!</p>
                </Playlist>
                <Playlist to="/playlists/1">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM5XrW6k2_AuAzqFIqjYE8eKZozLS9KYj6QeHGvpFcxI9zP9XzSw"
                        alt="playlist"
                        srcset=""
                    />
                    <strong>Rock Pesado</strong>
                    <p>Ouca as melhores do rock atualmente!</p>
                </Playlist>
                <Playlist to="/playlists/1">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM5XrW6k2_AuAzqFIqjYE8eKZozLS9KYj6QeHGvpFcxI9zP9XzSw"
                        alt="playlist"
                        srcset=""
                    />
                    <strong>Rock Pesado</strong>
                    <p>Ouca as melhores do rock atualmente!</p>
                </Playlist>
                <Playlist to="/playlists/1">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM5XrW6k2_AuAzqFIqjYE8eKZozLS9KYj6QeHGvpFcxI9zP9XzSw"
                        alt="playlist"
                        srcset=""
                    />
                    <strong>Rock Pesado</strong>
                    <p>Ouca as melhores do rock atualmente!</p>
                </Playlist>
            </List>
        </Container>
    );
};

export default Browse;
