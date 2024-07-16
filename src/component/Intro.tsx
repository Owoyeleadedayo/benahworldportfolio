import { Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Image3 from "../assets/images/BannerImg2.jpg";
import Check from '../assets/images/verify.png'

const Intro = () => {
  const items = [
    "Completing projects on time & Following budget guidelines",
    "Elevated quality of workmanship",
    "Meeting diverse supplier requirements",
    "Implementing appropriate safety precautions and procedures",
  ];
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        viewport={{ once: true }}
      >
        <Flex bg={"#fff"} w={"100%"} h={{ lg: "80vh", base: "100%" }}>
          <Flex
            bgColor={"rgba(0, 0, 0, 0.5)"}
            bgImage={Image3}
            w={"50%"}
            h={"100%"}
            bgPosition={"center"}
            bgSize={"cover"}
            bgRepeat={"no-repeat"}
            backgroundBlendMode={"soft-light"}
            display={{ lg: "flex", base: "none" }}
          />
          <Flex
            w={{ lg: "50%", base: "full" }}
            h={"100%"}
            px={"30px"}
            flexDir={"column"}
            gap={"10px"}
            alignItems={"flex-start"}
          >
            <Heading
              as={"h2"}
              fontSize={{ md: "30px", base: "19px" }}
              fontWeight={600}
              fontFamily={"Lato"}
              color={"#0047AB"}
              pt={{ lg: "40px", base: "30px" }}
            >
              Welcome To Benah World Wide
            </Heading>
            <Text fontSize={{ md: "20px", base: "17px" }} fontFamily={"Lato"}>
              We have successfully completed projects in numerous states across
              the continental United States. Autora Construction Services has a
              proven track record of:
            </Text>
            <Flex flexDir="column" gap="10px">
              {items.map((item, index) => (
                <Flex key={index} flexDir="row" alignItems="center" gap="10px">
                  <Image
                    src={Check}
                    alt="Check icon"
                    width="25px"
                    height="25px"
                  />
                  <Text
                    fontSize={{ md: "18px", base: "17px" }}
                    fontFamily="Lato"
                  >
                    {item}
                  </Text>
                </Flex>
              ))}
            </Flex>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                as={Link}
                to={"contact"}
                mt={{ md: "30px", base: "10px" }}
                bg={"#F28C28"}
                py={"18px"}
                px={"18px"}
                fontFamily={"Lato"}
                fontSize={{ md: "20px", base: "17px" }}
                mb={{ lg: "none", base: "30px" }}
              >
                Get In Touch
              </Button>
            </motion.div>
          </Flex>
        </Flex>
      </motion.div>
    </>
  );
}

export default Intro;
