import { Link, useLocation } from 'react-router-dom';
import { Flex, Button, Box } from '@radix-ui/themes';
import { IoHome } from 'react-icons/io5';
import { FaUser } from 'react-icons/fa';
import { MdWork } from 'react-icons/md';

function Navigation() {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <Box className="border-b border-gray-200 bg- backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <Flex gap="3" p="4" justify="center" wrap="wrap">
        <Link to="/" className="no-underline">
          <Button
            variant={isActive('/') ? 'solid' : 'soft'}
            size="3"
            color="purple"
          >
            <IoHome size={18} />
            <span className="ml-1">Home</span>
          </Button>
        </Link>

        <Link to="/profile" className="no-underline">
          <Button
            variant={isActive('/profile') ? 'solid' : 'soft'}
            size="3"
            color="purple"
          >
            <FaUser size={16} />
            <span className="ml-1">Profile</span>
          </Button>
        </Link>

        <Link to="/works" className="no-underline">
          <Button
            variant={isActive('/works') ? 'solid' : 'soft'}
            size="3"
            color="purple"
          >
            <MdWork size={18} />
            <span className="ml-1">Works</span>
          </Button>
        </Link>
      </Flex>
    </Box>
  );
}

export default Navigation;
