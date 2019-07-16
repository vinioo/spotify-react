import React from 'react';
import Slider from 'rc-slider';

import { Container, Current, Volume,Progress, Controls, Time, ProgressSlider } from './styles';

import VolumeIcon from '../../assets/images/volume.svg';
import ShuffleIcon from '../../assets/images/shuffle.svg';
import BackwardIcon from '../../assets/images/backward.svg';
import PlayIcon from '../../assets/images/play.svg';
import PauseIcon from '../../assets/images/pause.svg';
import ForwardIcon from '../../assets/images/forward.svg';
import RepeatIcon from '../../assets/images/repeat.svg';

const Player = () => (
    <Container>
        <Current>
            <img
                src="https://www.billboard.com/files/styles/900_wide/public/media/Green-Day-American-Idiot-album-covers-billboard-1000x1000.jpg"
                alt="Album Cover"
                srcset=""
            />

            <div>
                <span>Times like these</span>
                <small>Foo Fighters</small>
            </div>
        </Current>

        <Progress>
            <Controls>
                <button><img src={ShuffleIcon} alt="shuffle" srcset=""/></button>
                <button><img src={BackwardIcon} alt="backward" srcset=""/></button>
                <button><img src={PlayIcon} alt="play" srcset=""/></button>
                {/* <button><img src={PauseIcon} alt="pause" srcset=""/></button> */}
                <button><img src={ForwardIcon} alt="forward" srcset=""/></button>
                <button><img src={RepeatIcon} alt="repeat" srcset=""/></button>
            </Controls>
            <Time>
                <span>1:00</span>
                <ProgressSlider>
                    <Slider railStyle={{background: '#404040', borderRadius: 10}} trackStyle={{ background: '#1ed760'}}
                    handleStyle={{border: 0}}
                    >

                    </Slider>
                </ProgressSlider>
                <span>2:00</span>
            </Time>
        </Progress>

        <Volume>
            <img src={VolumeIcon} alt="Volume" srcset="" />
            <Slider
                railStyle={{ background: '#404040', borderRadius: 10 }}
                trackStyle={{ background: '#fff' }}
                handleStyle={{ display: 'none' }}
                value={100}
            />
        </Volume>
    </Container>
);

export default Player;
