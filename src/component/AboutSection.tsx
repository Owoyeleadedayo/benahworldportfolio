import { Flex, Heading, Text } from "@chakra-ui/react"
// import House from "../assets/images/house.jpg";
import House2 from "../assets/images/gallery2.jpg";
import {motion} from 'framer-motion'
import { useEffect } from "react";


const AboutSection = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Flex
        pt={{ md: "150px", base: "100px" }}
        px={"30px"}
        bgImage={House2}
        bgSize={"cover"}
        bgRepeat={"no-repeat"}
        backgroundBlendMode={"soft-light"}
        bgColor={"rgba(0, 0, 0, 0.8)"}
        w={"100%"}
        h={"500px"}
        gap={"20px"}
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
          <Flex flexDirection={"column"} gap={"20px"}>
            <Heading
              textAlign={"center"}
              fontFamily={"Lato"}
              fontWeight={700}
              color={"white"}
            >
              About Us
            </Heading>
            <Text
              // maxW={"700px"}
              fontSize={{ lg: "19px", md: "18px", base: "16px" }}
              fontFamily={"Lato"}
              fontWeight={500}
              color={"white"}
              px={{ lg: "50px", md: "10px", base: "5px" }}
              textAlign={"center"}
            >
              BENAH WORLDWIDE SERVICES LTD is a renowned construction company
              that excels in offering comprehensive construction services across
              the residential, commercial, and industrial sectors. With an
              unwavering dedication to excellence, innovation, and
              sustainability, we consistently deliver projects that surpass
              client expectations while upholding the highest industry
              standards. Benah worldwide services was incorporated with the
              Corporate Affairs Commission in 2016 with RC Number 1376432.
            </Text>
          </Flex>
        </motion.div>
        {/* <motion.div
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
            position={"relative"}
            height={{ md: "400px", base: "100%" }}
            width={"100%"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Image
              src={Building5}
              height={"full"}
              width={"full"}
              borderRadius={"md"}
              boxShadow={"lg"}
            />
            <Box
              position={"absolute"}
              top={"0px"}
              left={"0px"}
              width={"100%"}
              height={"100%"}
              bgGradient={
                "linear(to-b, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))"
              }
              zIndex={1}
            />
          </Flex>
        </motion.div> */}
      </Flex>
    </>
  );
}

export default AboutSection
