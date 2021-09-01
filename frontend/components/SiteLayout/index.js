import React, { useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';

//utills
import { Theme } from '../../styles/theme';
import { PageContext } from "../../utils/context";
import { useRouter } from "next/router";

//comps
import { Container, Nav, Header, Page, NavHeader, Icon, ItemWrap, NavFooter, Slider, Indicator, ToggleCont, UserCont, HeaderGradient, SearchCont, PageTitle } from './style'
import NavItem from '../NavItem'
import Button from '../Button'
import Avatar from '../Avatar'
import SearchBar from '../SearchBar'
import { RiHomeLine, RiCompassLine, RiUserLine, RiAddLine } from 'react-icons/ri'
import { BsToggleOff, BsToggleOn } from 'react-icons/bs'

const SiteLayout = ({ children }) => {

    const { user, keyword, setKeyword} = useContext(PageContext);

    const router = useRouter()

    // console.log(user, 'siteLay')

    const [toggle, setToggle] = useState(true)
    const [tabs, setTabs] = useState({
        one: true,
        two: false,
        three: false
    })
    const [pageName, setPageName] = useState("Home")
 

    const selectTab = (tab) => {
        switch (tab) {
            case tab = 'Home':
                setTabs({
                    one: true,
                    two: false,
                    three: false
                })
                setPageName("Home")
                break;
            case tab = 'Explore':
                setTabs({
                    one: false,
                    two: true,
                    three: false
                })
                setPageName("Explore")
                break;
            case tab = 'Profile':
                setTabs({
                    one: false,
                    two: false,
                    three: true
                })
                setPageName("Profile")
                break;
        }
    }

    const handleKeyword = (e) => {
        setKeyword(e.target.value)
    }

    return (
        <>
            <Container>
                <Nav toggle={toggle}>
                    <NavHeader toggle={toggle}>
                        <Icon header={true}>
                            <img src={'/Icons/play.png'} />
                        </Icon>
                        {!toggle ? <h1>Replay</h1> : null}
                    </NavHeader>
                    <div style={{ display: 'flex', width: '100%' }}>
                        <ItemWrap>
                            <NavItem
                                icon={<RiHomeLine size={25}
                                    fill={tabs.one ? Theme.colors.white : Theme.colors.lightGrey} />}
                                toggle={toggle}
                                selected={tabs.one}
                                text={'Home'}
                                onClick={() => {
                                    selectTab('Home')
                                }}
                            >
                            </NavItem>
                            <NavItem
                                icon={<RiCompassLine size={25}
                                    fill={tabs.two ? Theme.colors.white : Theme.colors.lightGrey} />}
                                toggle={toggle}
                                selected={tabs.two}
                                text={'Explore'}
                                onClick={() => {
                                    selectTab('Explore')
                                }}
                            >
                            </NavItem>
                            <NavItem
                                icon={<RiUserLine size={25}
                                    fill={tabs.three ? Theme.colors.white : Theme.colors.lightGrey} />}
                                toggle={toggle}
                                selected={tabs.three}
                                text={'Profile'}
                                onClick={() => {
                                    selectTab('Profile')
                                }}
                            >
                            </NavItem>
                        </ItemWrap>
                        <Slider>
                            <Indicator slide={tabs} />
                        </Slider>
                    </div>
                    <NavFooter toggle={toggle}>
                        <Button
                            color={Theme.colors.orange}
                            icon={<RiAddLine size={24} fill={Theme.colors.white} />}
                            showIcon={true}
                            text={toggle ? null : 'Create Playlist'}
                            textColor={`${Theme.colors.white}`}
                            width={toggle ? '51px' : 'calc(100% - 25px)'}
                            height={'51px'}
                        />
                        <UserCont toggle={toggle}>
                            <Avatar />
                            {!toggle && user ? <h3 style={{ color: `${Theme.colors.white}` }}>{user.name}</h3> : null}
                        </UserCont>
                        <ToggleCont toggle={toggle} onClick={() => {
                            setToggle(!toggle)
                        }}>
                            {toggle ? <BsToggleOff size={30} fill={Theme.colors.white} /> :
                                <><p style={{ color: `${Theme.colors.lightGrey}`, marginRight: "18px" }}>Toggle Sidebar</p><BsToggleOn size={30} fill={Theme.colors.white} /></>}
                        </ToggleCont>
                    </NavFooter>
                </Nav>
                <Header toggle={toggle}>
                    <HeaderGradient>
                        <SearchCont>
                            <PageTitle><h3 style={{color:`${Theme.colors.white}`}}>{pageName}</h3></PageTitle>
                            <SearchBar onChange={(handleKeyword)}/>
                        </SearchCont>
                    </HeaderGradient>
                </Header>
            </Container>
            <Page toggle={toggle}>{children}</Page>
        </>
    );
}

SiteLayout.defaultProps = {

}

SiteLayout.propTypes = {

}

export default SiteLayout;