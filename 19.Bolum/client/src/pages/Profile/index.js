import { useAuth } from '../../contexts/AuthContext';
import { Text, Button, Stack, Avatar, AvatarBadge } from '@chakra-ui/react';
import { Descriptions } from 'antd';

function Profile({ history }) {
    const { user, logout } = useAuth();
    const handleLogout = async () => {
        logout(() => {
            history.push("/");
        });
    };
    return (

        <div>
            <Text fontSize="22">Profile</Text>


            <Stack direction='row' spacing={4}>
                <Avatar>
                    <AvatarBadge boxSize='1.25em' bg='green.500' />
                </Avatar>
            </Stack>

            <Descriptions>

                <Descriptions.Item label="UserName">{user.email}</Descriptions.Item>
                <Descriptions.Item label="Role">{user.role}</Descriptions.Item>
            </Descriptions>

            <br />
            <br />

            <Button colorScheme="pink" variant="solid" onClick={handleLogout}>
                Logout
            </Button>
        </div>
    )
}

export default Profile