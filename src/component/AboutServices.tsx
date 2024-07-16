import { Box, Flex, Heading, Image, Text, useMediaQuery } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Vision from "../assets/images/achievement.png";
import Target from "../assets/images/target.png";
import Building7 from "../assets/images/building7.jpg";

const AboutServices = () => {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
  return (
    <>
      <Flex
        bgColor={"#f1f2f3"}
        px={{ md: "30px", base: "20px" }}
        flexDirection={{ lg: "row", md: "column" }}
        gap={{ md: "50px", base: "0px" }}
        pb={{ md: "100px", base: "60px" }}
      >
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            ease: "easeInOut",
            delay: 1,
            duration: 1,
            stiffness: 200,
          }}
          viewport={{ once: true }}
        >
          <Flex
            position={"relative"}
            height={{ md: "100%", base: "100%" }}
            width={"100%"}
          >
            {isLargerThan768 && (
              <Image
                src={Building7}
                height={"full"}
                width={"full"}
                borderRadius={"md"}
                boxShadow={"lg"}
              />
            )}
            <Box
              position={"absolute"}
              top={"0px"}
              left={"0px"}
              width={"100%"}
              height={"100%"}
              bgGradient={
                "linear(to-b, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))"
              }
              zIndex={1}
            />
          </Flex>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            ease: "easeInOut",
            delay: 1,
            duration: 1,
            stiffness: 200,
          }}
          viewport={{ once: true }}
        >
          <Flex
            flexDir={"column"}
            justifyContent={"center"}
            gap={"15px"}
            my={"10px"}
          >
            <Heading
              as={"h1"}
              fontSize={{ lg: "30px", md: "30px", base: "20px" }}
              fontFamily={"Lato"}
              fontWeight={{ lg: 600, md: 500, base: 600 }}
              textTransform={"uppercase"}
              textAlign={{ lg: "start", md: "center", base: "start" }}
              color={"#0047AB"}
            >
              building dream into reality
            </Heading>
            <Text
              maxW={"720px"}
              textAlign={{ lg: "start", md: "center", base: "start" }}
            >
              Behna World is the safe, reliable and cost effective construction
              company. We offer best construction Services. We have more than 35
              years of experience in the field of building & construction.
            </Text>
            <Flex
              flexDir={"row"}
              gap={"15px"}
              justifyContent={{ lg: "start", md: "center", base: "start" }}
            >
              <Flex
                w={{ md: "100px", base: "120px" }}
                h={{ md: "100px", base: "70px" }}
                borderRadius={"5px"}
                mt={"5px"}
              >
                <Image
                  src={Target}
                  height={{ md: "80px", base: "50px" }}
                  width={{ md: "80px", base: "50px" }}
                  mx={{ md: "5px", base: "0px" }}
                  my={"5px"}
                  pl={{ md: "7px", base: "0px" }}
                  pt={"5px"}
                />
              </Flex>
              <Flex flexDir={"column"}>
                <Text
                  as={"h2"}
                  fontSize={"26px"}
                  fontFamily={"Lato"}
                  color={"#0047AB"}
                  fontWeight={500}
                >
                  Our Mission
                </Text>
                <Text maxW={"500px"}>
                  We aim to exceed industry standards through meticulous
                  planning, innovative design, and expert execution. Our skilled
                  team ensures precise and efficient project delivery.
                </Text>
              </Flex>
            </Flex>
            <Flex
              flexDir={"row"}
              gap={"15px"}
              justifyContent={{ lg: "start", md: "center", base: "start" }}
            >
              <Flex
                w={{ md: "100px", base: "120px" }}
                h={{ md: "100px", base: "70px" }}
                borderRadius={"5px"}
                mt={"10px"}
              >
                <Image
                  src={Vision}
                  height={{ md: "80px", base: "50px" }}
                  width={{ md: "80px", base: "50px" }}
                  mx={{ md: "5px", base: "0px" }}
                  my={"5px"}
                  pl={{ md: "7px", base: "0px" }}
                  pt={"5px"}
                />
              </Flex>
              <Flex flexDir={"column"} gap={"0px"}>
                <Text
                  as={"h2"}
                  fontSize={"26px"}
                  fontFamily={"Lato"}
                  color={"#0047AB"}
                  fontWeight={500}
                >
                  Our Vision
                </Text>
                <Text maxW={"500px"}>
                  Our vision is to become a trusted partner in shaping the
                  future, offering exceptional construction solutions that
                  uplift communities, enrich lives, and drive progress.
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </motion.div>
      </Flex>
    </>
  );
};

export default AboutServices;
