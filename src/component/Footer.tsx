import { Flex, Icon, Image, Link, Text } from "@chakra-ui/react";
import Image1 from "../assets/images/benah 3.png";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";


const Footer = () => {
  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/project", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  const socialLinks = [
    {
      url: "https://web.facebook.com/profile.php?id=61559318981868",
      label: "Facebook",
      icon: FaFacebook,
    },
    {
      url: "https://twitter.com/@benahservi11009",
      label: "Twitter",
      icon: FaXTwitter,
    },
    {
      url: "https://instagram.com/benahservices",
      label: "Instagram",
      icon: FaInstagram,
    },
    {
      url: "https://linkedin.com/in/benah-services-226262199",
      label: "LinkedIn",
      icon: FaLinkedin,
    },
  ];

  const address = [
    { label: "43, Oritshe street Awolowo way Ikeja – Lagos", icon: IoLocation },
    { label: "benahworld@gmail.com", icon: MdEmail },
    { label: "+234 811 151 1103", icon: BsFillTelephoneFill },
  ];
  return (
    <>
      <Flex bgColor={"#f1f2f3"} pt={"40px"}>
        <Flex
          bgColor={"black"}
          px={"30px"}
          py={"10px"}
          flexDirection={{ md: "row", base: "column" }}
          gap={"10px"}
          w={"100%"}
        >
          <Flex flexDir={"column"} gap={"12px"}>
            <Image src={Image1} w={"180px"} h={"100px"} ml={"50px"} />
            <Text
              maxW={"350px"}
              textColor={"white"}
              fontFamily={"Lato"}
              fontSize={"17px"}
            >
              People who are looking for Extraordinary projects need vision &
              precision to be exceptional. They need Builderrine Construction
              Services.
            </Text>
          </Flex>
          <Flex
            flexDir={"column"}
            gap={"20px"}
            my={"30px"}
            display={{ base: "none", md: "flex" }}
          >
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                px={"80px"}
                fontSize={"18px"}
                color={"white"}
                lineHeight={"24px"}
                fontFamily={"Lato"}
                _hover={{
                  color: "white",
                }}
              >
                {item.label}
              </Link>
            ))}
          </Flex>
          <Flex
            flexDir={{ md: "column", base: "row" }}
            gap={"30px"}
            my={"30px"}
            pl={{ base: "40px", md: "0px" }}
          >
            {socialLinks.map((link, index) => (
              <Link
                key={index}
                href={link.url}
                fontSize={"18px"}
                color={"white"}
                lineHeight={"22px"}
                fontFamily={"Lato"}
                _hover={{
                  color: "white",
                }}
              >
                <Flex flexDir={"row"}>
                  <Icon
                    as={link.icon as never}
                    mr={2}
                    mt={{ lg: "2px", md: "2px", base: "0px" }}
                  />
                  <Text display={{ md: "flex", base: "none" }}>
                    {link.label}
                  </Text>
                </Flex>
              </Link>
            ))}
          </Flex>
          <Flex
            flexDir={"column"}
            gap={"10px"}
            my={{ md: "25px", base: "10px" }}
            mx={{ md: "22px", base: "0px" }}
            pl={{ base: "20px", md: "25px" }}
          >
            {address.map((item, index) => (
              <Flex key={index}>
                <Icon
                  as={item.icon}
                  mr={2}
                  fontSize={"20px"}
                  color={"white"}
                  mt={"5px"}
                />
                <Text
                  textColor={"white"}
                  fontSize={{ md: "19px", base: "18px" }}
                  fontFamily={"Lato"}
                >
                  {item.label}
                </Text>
              </Flex>
            ))}
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Footer;
