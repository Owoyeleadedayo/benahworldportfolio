import {
  Flex,
  Image,
  Link,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useBreakpointValue,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import Image1 from "../assets/images/benah 3.png";

const NavBar = () => {
  const isMobile = useBreakpointValue({ base: true, md: true, lg: false });

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/project", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <Flex
      w={{ lg: "100%", md: "100%", base: "100%" }}
      h={"90px"}
      justifyContent={"space-between"}
      alignItems={"center"}
      bgColor={"#f1f2f3"}
      px={"20px"}
      position={"fixed"}
      zIndex={99}
    >
      <Flex w={"150px"} h={"90px"}>
        <Image src={Image1} alt="Logo" width={"100%"} height={"100%"} />
      </Flex>

      {isMobile ? (
        <Menu>
          <MenuButton
            as={IconButton}
            icon={<GiHamburgerMenu />}
            aria-label="Options"
            variant="outline"
          />
          <MenuList>
            {menuItems.map((item, index) => (
              <MenuItem key={index} as={Link} href={item.href}>
                {item.label}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      ) : (
        <Flex justifyContent="center" alignItems="center" mr={"00px"}>
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              fontSize="xl"
              fontWeight="semibold"
              transition="color 0.4s ease-in"
              _hover={{ color: "black" }}
              textColor={"#0047AB"}
              mr={12}
            >
              {item.label}
            </Link>
          ))}
        </Flex>
      )}
    </Flex>
  );
};

export default NavBar;
