// sticky header includes Home button, search bar, profile, upload, feed, messenger buttons
import React from "react";
import { Menu, Dropdown, Container, Icon, Search, Grid } from "semantic-ui-react";

export default function StickyHeader() {
    return (
        <Menu fixed="top" borderless>
            <Container text> 
                <Menu.Menu position="left">
                    <Menu.Item header as="a">
                        <h2>mysketch</h2>
                    </Menu.Item>

                    <Menu.Item header>
                            <Search size='tiny' icon='search' placeholder='Search...' />
                    </Menu.Item>
                </Menu.Menu>

                <Menu.Menu position="right">
                    
                    <Menu.Item as="a">
                        <Icon name='home' size='large' />
                    </Menu.Item>
                    <Menu.Item as="a">
                        <Icon name='rocketchat' size='large' />
                    </Menu.Item>
                    <Menu.Item as="a">
                        <Icon name='plus square outline' size='large' />
                    </Menu.Item>
                
                    <Dropdown item pointing text="User">
                        <Dropdown.Menu>
                            <Dropdown.Item>
                                <Icon name='user circle' />
                            </Dropdown.Item>

                            <Dropdown.Divider />

                            <Dropdown.Item>
                                Logout
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Menu.Menu>
            
            </Container>
        </Menu>
    )
};