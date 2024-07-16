import { Box, Button, Flex, Heading, Image, Input, Text, Textarea } from "@chakra-ui/react"
import Contact from "../assets/images/contactpic.jpeg";
import { motion } from "framer-motion";
import ExecutionSection from "./ExecutionSection";
import { useEffect } from "react";



const AboutContact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Flex
        bgColor={"#f1f2f3"}
        pt={{ md: "150px", base: "100px" }}
        flexDirection={"column"}
        gap={"20px"}
      >
        <Flex
          flexDir={{ lg: "row", md: "column", base: "column" }}
          gap={{ lg: "80px", md: "80px", base: '10px' }}
          px={"30px"}
        >
          <Flex
            position={"relative"}
            h={{ lg: "400px", md: "400px", base: "220px" }}
            width={{ lg: "1400px", md: "700px", base: "270px" }}
          >
            <Image src={Contact} w={"100%"} h={"100%"} borderRadius={"8px"} />
            {/* <Box
              position={"absolute"}
              top={"0px"}
              left={"0px"}
              width={"100%"}
              height={"100%"}
              bgGradient={
                "linear(to-b, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))"
              }
              zIndex={1}
            /> */}
          </Flex>
          <Flex flexDir={"column"} gap={"10px"} w={"100%"} h={"100%"}>
            <Heading
              as={"h4"}
              fontFamily={"Lato"}
              fontSize={"30px"}
              color={"#0047AB"}
            >
              Contact Us!
            </Heading>
            <Text fontFamily={"Lato"} fontSize={"18px"}>
              Get in touch with us! Reach out through the contact form below
              connect with our team. We're here to answer your questions
            </Text>
            <Flex flexDir={"column"}>
              <Text fontFamily={"Lato"} fontSize={"18px"}>
                First Name:
              </Text>
              <Input
                placeholder="e.g John Doe"
                variant="filled"
                size="md"
                // h={"40px"}
                borderRadius={"8px"}
                borderColor={"#DCDCDC"}
                focusBorderColor={"#D1D0CE"}
              />
              <Text fontFamily={"Lato"} fontSize={"18px"} pt={"10px"}>
                Email:
              </Text>
              <Input
                placeholder="e.g johndoe@gmail.com"
                variant="filled"
                size="md"
                h={"40px"}
                borderRadius={"8px"}
                borderColor={"#DCDCDC"}
                focusBorderColor={"#D1D0CE"}
              />
              <Text fontFamily={"Lato"} fontSize={"18px"} pt={"10px"}>
                Message:
              </Text>
              <Textarea
                placeholder="Type your message here..."
                variant="filled"
                borderRadius={"8px"}
                borderColor={"#DCDCDC"}
                focusBorderColor={"#D1D0CE"}
              />
            </Flex>
            <Flex>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Button
                  bg={"#F28C28"}
                  py={{ lg: "22px", base: "18px" }}
                  px={{ lg: "30px", base: "22px" }}
                  fontFamily={"Lato"}
                  fontSize={{ lg: "20px", base: "15px" }}
                >
                  Submit
                </Button>
              </motion.button>
            </Flex>
          </Flex>
        </Flex>
        <Box
          as="iframe"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15853.469412297753!2d3.3254885554199256!3d6.601187599999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b93a9d31d7803%3A0xb8abce960c50fe64!2sOritshe%20Street!5e0!3m2!1sen!2sng!4v1715768951955!5m2!1sen!2sng"
          py={"20px"}
          borderRadius={"8px"}
          width="100%"
          height="450"
          style={{ border: "0" }}
          _fullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <ExecutionSection />
      </Flex>
    </>
  );
}

export default AboutContact
