// sticky header includes Home button, search bar, profile, upload, feed, messenger buttons
import React from "react";
import { Menu, Dropdown, Container, Icon, Input } from "semantic-ui-react";

export default function StickyHeader() {
    return (
        <Menu fixed="top" >
            <Container> 
                <Menu.Item as="a" header>
                    mysketch
                </Menu.Item>

                <Menu.Item>
                    <Input size='large' icon='search' placeholder='Search...' />
                </Menu.Item>

                <Menu.Item as="a">
                    <Icon name='home' size='large' />
                </Menu.Item>
                <Menu.Item as="a">
                    <Icon name='rocketchat' size='large' />
                </Menu.Item>
                <Menu.Item as="a">
                    <Icon name='plus square outline' size='large' />
                </Menu.Item>
               
                <Dropdown item simple text="User">
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
            </Container>
        </Menu>
    )
};