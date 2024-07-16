import { Card, CardBody, Flex, Grid, Heading, Image, Stack, Text } from "@chakra-ui/react";
import BluePrint from '../assets/images/blueprint.png'
import Planning from "../assets/images/planning.png";
import Engineer from "../assets/images/engineer.png";
import Interior from "../assets/images/interior-design.png";
import { motion } from "framer-motion";



const Services = () => {
  return (
    <>
      <Flex
        bgColor={"#f1f2f3"}
        width={"100%"}
        h={"100%"}
        justifyContent={"center"}
        alignItems={"center"}
        display={"flex"}
        flexDirection={"column"}
        pb={"80px"}
      >
        <Flex py={"40px"} flexDir={"column"}>
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              ease: "easeInOut",
              duration: 1.2,
              delay: 0.5,
              stiffness: 200,
            }}
            viewport={{ once: true }}
          >
            <Heading
              as={"h3"}
              textTransform={"capitalize"}
              fontWeight={500}
              fontSize={{ md: "40px", base: "32px" }}
              textAlign={"center"}
              color={"#0047AB"}
              fontFamily={"Lato"}
            >
              Services
            </Heading>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              ease: "easeInOut",
              duration: 1.2,
              delay: 0.5,
              stiffness: 200,
            }}
            viewport={{ once: true }}
          >
            <Flex justifyContent={"center"} alignItems={"center"} py={"20px"}>
              <img src={BluePrint} alt="b" width={"40px"} height={"30px"} />
            </Flex>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              ease: "easeInOut",
              duration: 1.2,
              delay: 0.5,
              stiffness: 200,
            }}
            viewport={{ once: true }}
          >
            <Text
              maxW={"600px"}
              textAlign={"center"}
              fontSize={{ md: "20px", base: "17px" }}
              fontFamily={"Lato"}
              px={{ md: "0px", base: "20px" }}
            >
              Are you interested in finding out how we can make your project a
              success? Please constact us.
            </Text>
          </motion.div>
        </Flex>
        <Grid
          templateColumns={{ lg: "repeat(3, 1fr)", base: "repeat(1, 1fr)" }}
          flexDir={"row"}
          gap={"15px"}
          px={{ lg: "30px", base: "15px" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              ease: "easeInOut",
              delay: 0.3,
              duration: 0.5,
              stiffness: 200,
            }}
            viewport={{ once: true }}
          >
            <Card flexDir={"row"} px={{ lg: "20px", base: "25px" }} py={"10px"}>
              <Flex w={"60px"} h={"50px"} mt={"15px"}>
                <Image
                  src={Planning}
                  alt="planning"
                  width={"50px"}
                  height={"50px"}
                />
              </Flex>
              <Stack>
                <CardBody>
                  <Heading
                    as={"h4"}
                    fontSize={"18px"}
                    fontFamily={"Lato"}
                    fontWeight={700}
                  >
                    DESIGN-BUILD
                  </Heading>

                  <Text
                    py="2"
                    maxW={{ lg: "400px", base: "400px" }}
                    fontFamily={"Lato"}
                  >
                    We develop and understand project expectations and then
                    manage those needs with a design team. Innovation should
                    happen throughout a project.
                  </Text>
                </CardBody>
              </Stack>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              ease: "easeInOut",
              delay: 0.3,
              duration: 1,
              stiffness: 200,
            }}
            viewport={{ once: true }}
          >
            <Card flexDir={"row"} px={{ lg: "20px", base: "25px" }} py={"10px"}>
              <Flex w={"60px"} h={"50px"} mt={"15px"}>
                <Image
                  src={Engineer}
                  alt="planning"
                  width={"50px"}
                  height={"50px"}
                />
              </Flex>
              <Stack>
                <CardBody>
                  <Heading
                    as={"h4"}
                    fontSize={"18px"}
                    fontFamily={"Lato"}
                    fontWeight={700}
                    pt={"2px"}
                  >
                    CONSTRUCTION MANAGEMENT
                  </Heading>

                  <Text
                    py="2"
                    maxW={{ lg: "400px", base: "400px" }}
                    fontFamily={"Lato"}
                  >
                    We work closely with architects and designers to understand
                    the project, and ultimately develop a targeted solution that
                    optimizes every stage of the build.
                  </Text>
                </CardBody>
              </Stack>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              ease: "easeInOut",
              delay: 0.3,
              duration: 1.5,
              stiffness: 200,
            }}
            viewport={{ once: true }}
          >
            <Card flexDir={"row"} px={{ lg: "20px", base: "25px" }} py={"10px"}>
              <Flex w={"60px"} h={"50px"} mt={"15px"}>
                <Image
                  src={Interior}
                  alt="planning"
                  width={"50px"}
                  height={"50px"}
                />
              </Flex>
              <Stack>
                <CardBody>
                  <Heading
                    as={"h4"}
                    fontSize={"18px"}
                    fontFamily={"Lato"}
                    fontWeight={700}
                  >
                    INTERIOR DESIGN
                  </Heading>

                  <Text
                    py="2"
                    maxW={{ lg: "400px", base: "300px" }}
                    fontFamily={"Lato"}
                  >
                    Our in-house cladding teams supply and install a diverse
                    range of solutions to new building and building envelope
                    upgrade projects.
                  </Text>
                </CardBody>
              </Stack>
            </Card>
          </motion.div>
        </Grid>
      </Flex>
    </>
  );
}

export default Services
