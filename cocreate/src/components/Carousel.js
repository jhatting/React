import React from 'react';

import Card from '../components/Card';

import devgrub from '../assets/images/devgrub.png';
import youtube from '../assets/images/youtube.png';
import evverest from '../assets/images/evverest.png';

import extFront from '../assets/images/extFront.png';
import extLeft from '../assets/images/extLeft.png';
import extRight from '../assets/images/extRight.png';

import bathToilet from '../assets/images/bathToilet.png';
import bathVanShow from '../assets/images/bathVanShow.png';
import bathWashDry from '../assets/images/bathWashDry.png';

import bedEnd from '../assets/images/bedEnd.png';
import bedLeft from '../assets/images/bedLeft.png';
import bedRight from '../assets/images/bedRight.png';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: ' Exterior Large Bedroom Windows',
                    subTitle: 'The container has 5 windows, allowing for great natural light all with custom cream lined curtains and tie backs:Three 8 x 8 foot sliding doors​ One 6 x 6 foot window One bay window They have a superior vinyl on the windows that are an excellent insulator, helping lower heating and cooling costs which means greater energy efficiency. All with screens to keep the bugs out when the doors/windows are open​',
                    imgSrc: extRight,
                    link: 'https://devgrub.com',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Exterior Window and Frames',
                    subTitle: 'All windows and door frames are cut out. Next the wooden framing begins, this is to create the structure for the walls and floors. We also raise our floors slightly for plumbing purposes and to allow space to run all the electrical cables and pipes.',
                    imgSrc: extFront,
                    link: 'https://www.youtube.com/channel/UCxSITxL2JbF229OGCqieVZw',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Exterior Engine Room',
                    subTitle: 'The utility room we created underneath the day bed and has easy access from the back of the home. No more exterior add on,everything is now tucked away neatly in the utility room. 18,000 BTU Ductless mini split air conditioner with hidden compressor in the utility room. Hot and cold settings for all weather conditions. 85,000 BTU Propane Gas Portable Tankless Water Heater that allows for quick and easy hot water, stored in the utility room. Heating only when needed is eco-friendly and cost effective. 100amp Electrical Distribution Board 110 - 220V.',
                    imgSrc: extLeft,
                    link: 'https://github.com/garrettlove8/evverest',
                    selected: false
                },
                {
                    id: 3,
                    title: 'Dev Grub',
                    subTitle: 'The cookbook for developers',
                    imgSrc: devgrub,
                    link: 'https://devgrub.com',
                    selected: false
                },
                {
                    id: 4,
                    title: 'Garrett Love',
                    subTitle: 'YouTube channel',
                    imgSrc: youtube,
                    link: 'https://www.youtube.com/channel/UCxSITxL2JbF229OGCqieVZw',
                    selected: false
                },
                {
                    id: 6,
                    title: 'Evverest',
                    subTitle: 'A social network for developers',
                    imgSrc: evverest,
                    link: 'https://github.com/garrettlove8/evverest',
                    selected: false
                },
                {
                    id: 7,
                    title: 'Dev Grub',
                    subTitle: 'The cookbook for developers',
                    imgSrc: bathVanShow,
                    link: 'https://devgrub.com',
                    selected: false
                },
                {
                    id: 8,
                    title: 'Garrett Love',
                    subTitle: 'YouTube channel',
                    imgSrc: bathToilet,
                    link: 'https://www.youtube.com/channel/UCxSITxL2JbF229OGCqieVZw',
                    selected: false
                },
                {
                    id: 9,
                    title: 'Evverest',
                    subTitle: 'A social network for developers',
                    imgSrc: bathWashDry,
                    link: 'https://github.com/garrettlove8/evverest',
                    selected: false
                },
                {
                    id: 10,
                    title: 'Dev Grub',
                    subTitle: 'The cookbook for developers',
                    imgSrc: bedLeft,
                    link: 'https://devgrub.com',
                    selected: false
                },
                {
                    id: 11,
                    title: 'Garrett Love',
                    subTitle: 'YouTube channel',
                    imgSrc: bedEnd,
                    link: 'https://www.youtube.com/channel/UCxSITxL2JbF229OGCqieVZw',
                    selected: false
                },
                {
                    id: 12,
                    title: 'Evverest',
                    subTitle: 'A social network for developers',
                    imgSrc: bedRight,
                    link: 'https://github.com/garrettlove8/evverest',
                    selected: false
                },
            ]
        }
    }


    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }


    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Carousel;