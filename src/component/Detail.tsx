import {
  Button,
  Card,
  Divider,
  Flex,
  Grid,
  Heading,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Home from "../assets/images/bank-building.png";
import Quality from "../assets/images/management.png";
import Timetable from "../assets/images/timetable.png";
import Engineer from "../assets/images/engineer.png";

const Detail = () => {

  return (
    <motion.section
      variants={{
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.25,
          },
        },
      }}
      initial="hidden"
      animate="show"
    >
      <Flex
        bgColor={"#f1f2f3"}
        width={"100%"}
        h={"100%"}
        justifyContent={"center"}
        alignItems={"center"}
        display={"flex"}
        flexDirection={"column"}
        pb={"80px"}
        px={{ md: "0px", base: "20px" }}
      >
        <Flex py={"50px"} flexDir={"column"}>
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
              fontSize={"40px"}
              textAlign={"center"}
              color={"#0047AB"}
              fontFamily={"Lato"}
            >
              your best choose
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
              <img src={Home} alt="b" width={"30px"} height={"30px"} />
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
              fontSize={"18px"}
              fontFamily={"Lato"}
            >
              More than 500 projects completed in Behna WorldWide - With over 25
              years of combined experience, we have the knowledge to serve you.
            </Text>
          </motion.div>
        </Flex>
        <Grid
          templateColumns={{ lg: "repeat(3, 1fr)", base: "repeat(1, 1fr)" }}
          gap={"15px"}
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
            <Card
              justifyContent={"center"}
              alignItems={"center"}
              display={"flex"}
              p={"10px"}
              gap={"10px"}
            >
              <img
                src={Quality}
                alt="Quality"
                width={"60px"}
                height={"30px"}
                className=""
              />
              <Heading
                textAlign={"center"}
                fontSize={"25px"}
                fontFamily={"Lato"}
                fontWeight={800}
              >
                Best Quality Time
              </Heading>
              <Divider bg={"#E5E4E2"} maxW={"80px"} h={"2px"} />
              <motion.div>
                <Text
                  textAlign={"center"}
                  maxW={"350px"}
                  fontFamily={"Lato"}
                  fontWeight={400}
                >
                  Behna WorldWide Services are committed to meeting the highest
                  quality standards without compromising our safety culture..
                </Text>
              </motion.div>
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
            <Card
              justifyContent={"center"}
              alignItems={"center"}
              display={"flex"}
              p={"10px"}
              gap={"10px"}
            >
              <img
                src={Timetable}
                alt="Quality"
                width={"60px"}
                height={"30px"}
                className=""
              />
              <Heading
                textAlign={"center"}
                fontSize={"25px"}
                fontFamily={"Lato"}
                fontWeight={800}
              >
                On Time
              </Heading>
              <Divider bg={"#E5E4E2"} maxW={"80px"} h={"2px"} />
              <Text
                textAlign={"center"}
                maxW={"350px"}
                fontFamily={"Lato"}
                fontWeight={400}
              >
                Behna WorldWide Services are committed to meeting the highest
                quality standards without compromising our safety culture..
              </Text>
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
            <Card
              justifyContent={"center"}
              alignItems={"center"}
              display={"flex"}
              p={"10px"}
              gap={"10px"}
            >
              <img
                src={Engineer}
                alt="Quality"
                width={"60px"}
                height={"30px"}
                className=""
              />
              <Heading
                textAlign={"center"}
                fontSize={"25px"}
                fontFamily={"Lato"}
                fontWeight={800}
              >
                Experienced
              </Heading>
              <Divider bg={"#E5E4E2"} maxW={"80px"} h={"2px"} />
              <Text
                textAlign={"center"}
                maxW={"350px"}
                fontFamily={"Lato"}
                fontWeight={400}
              >
                Behna WorldWide Services are committed to meeting the highest
                quality standards without compromising our safety culture..
              </Text>
            </Card>
          </motion.div>
        </Grid>
        <motion.div
          initial={{ opacity: 0, x: 300 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            ease: "easeInOut",
            delay: 0.3,
            duration: 1,
          }}
          viewport={{ once: true }}
        >
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Button
              as={Link}
              to={"/about"}
              mt={"40px"}
              bg={"#F28C28"}
              py={{ lg: "20px", base: "20px" }}
              px={{ lg: "20px", base: "30px" }}
              fontFamily={"Lato"}
              fontSize={{ lg: "20px", base: "18px" }}
            >
              About Us
            </Button>
          </motion.div>
        </motion.div>
      </Flex>
    </motion.section>
  );
};

export default Detail;
