import React from 'react';

import { Container, Header, SongList } from './styles';

import ClockIcon from '../../assets/images/clock.svg';
import PlusIcon from '../../assets/images/plus.svg';

const Playlist = () => {
    return (
        <Container>
            <Header>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM5XrW6k2_AuAzqFIqjYE8eKZozLS9KYj6QeHGvpFcxI9zP9XzSw"
                    alt="playlist"
                    srcset=""
                />
                <div>
                    <span>PLAYLIST</span>
                    <h1>Rock Forever</h1>
                    <p>13 músicas</p>
                    <button>PLAY</button>
                </div>
            </Header>
            <SongList cellPadding={0} cellSpacing={0}>
                <thead>
                    <th />
                    <th>Título</th>
                    <th>Artista</th>
                    <th>Album</th>
                    <th>
                        <img src={ClockIcon} alt="Duracao" srcset="" />
                    </th>
                </thead>

                <tbody>
                    <tr>
                        <td>
                            <img src={PlusIcon} alt="Add" srcset="" />
                        </td>
                        <td>Papercut</td>
                        <td>Linkin Park</td>
                        <td>Hybrid Theory</td>
                        <td>3:26</td>
                    </tr>
                    <tr>
                        <td>
                            <img src={PlusIcon} alt="Add" srcset="" />
                        </td>
                        <td>Papercut</td>
                        <td>Linkin Park</td>
                        <td>Hybrid Theory</td>
                        <td>3:26</td>
                    </tr>
                    <tr>
                        <td>
                            <img src={PlusIcon} alt="Add" srcset="" />
                        </td>
                        <td>Papercut</td>
                        <td>Linkin Park</td>
                        <td>Hybrid Theory</td>
                        <td>3:26</td>
                    </tr>
                    <tr>
                        <td>
                            <img src={PlusIcon} alt="Add" srcset="" />
                        </td>
                        <td>Papercut</td>
                        <td>Linkin Park</td>
                        <td>Hybrid Theory</td>
                        <td>3:26</td>
                    </tr>
                    <tr>
                        <td>
                            <img src={PlusIcon} alt="Add" srcset="" />
                        </td>
                        <td>Papercut</td>
                        <td>Linkin Park</td>
                        <td>Hybrid Theory</td>
                        <td>3:26</td>
                    </tr>
                    <tr>
                        <td>
                            <img src={PlusIcon} alt="Add" srcset="" />
                        </td>
                        <td>Papercut</td>
                        <td>Linkin Park</td>
                        <td>Hybrid Theory</td>
                        <td>3:26</td>
                    </tr>
                </tbody>
            </SongList>
        </Container>
    );
};

export default Playlist;
