import { Button, Flex, Heading, Text } from '@chakra-ui/react';
import Image2 from '../assets/images/bannerImg.jpg'
import Image4 from "../assets/images/Bannner4.jpg";
import B1 from "../assets/images/Untitled-1.png";
import { Carousel } from 'antd';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


const Banner = () => {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: 1 }}
      transition={{ delay: 0.8, stiffness: 50 }}
    >
      <Carousel autoplay autoplaySpeed={5000}>
        <Flex
          as={motion.div}
          bgColor={"rgba(0, 0, 0, 0.5)"}
          bgImage={Image2}
          bgRepeat={"no-repeat"}
          bgPosition={"center"}
          bgSize={"cover"}
          w={"100%"}
          h={"600px"}
          backgroundBlendMode={"soft-light"}
        >
          <Flex
            px={{ md: "40px", base: "20px" }}
            py={"150px"}
            flexDirection={"column"}
            maxW={"900px"}
            gap={"10px"}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 1 }}
            >
              <Heading
                as={"h2"}
                color={"white"}
                textTransform={"capitalize"}
                fontFamily={"Lato"}
                fontSize={{ lg: "60px", base: "40px" }}
                fontWeight={600}
              >
                benah WorldWide
              </Heading>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 1 }}
            >
              <Text
                color={"white"}
                textTransform={"capitalize"}
                fontFamily={"Lato"}
                fontSize={{ lg: "30px", base: "20px" }}
                fontWeight={500}
              >
                Our unwavering passion drives us to construct awe-inspiring
                landmarks
              </Text>
            </motion.div>
            <Flex>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 1 }}
              >
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Button
                    as={Link}
                    to={"contact"}
                    bg={"#F28C28"}
                    py={{ lg: "22px", base: "18px" }}
                    px={{ lg: "30px", base: "22px" }}
                    fontFamily={"Lato"}
                    fontSize={{ lg: "20px", base: "15px" }}
                  >
                    Get In Touch
                  </Button>
                </motion.button>
              </motion.div>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          bgColor={"rgba(0, 0, 0, 0.5)"}
          bgImage={B1}
          bgRepeat={"no-repeat"}
          bgPosition={"center"}
          bgSize={"cover"}
          w={"100%"}
          h={"600px"}
          backgroundBlendMode={"soft-light"}
        >
          <Flex
            px={{ md: "40px", base: "20px" }}
            py={"150px"}
            flexDirection={"column"}
            maxW={"900px"}
            gap={"10px"}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 1 }}
            >
              <Heading
                as={"h2"}
                color={"white"}
                textTransform={"capitalize"}
                fontFamily={"Lato"}
                fontSize={{ lg: "60px", base: "40px" }}
                fontWeight={600}
              >
                benah WorldWide
              </Heading>
            </motion.div>
            <Text
              color={"white"}
              textTransform={"capitalize"}
              fontFamily={"Lato"}
              fontSize={{ lg: "30px", base: "20px" }}
              fontWeight={500}
            >
              We invite you to reach out to us today to explore how we can
              transform your vision into a tangible reality.
            </Text>
            <Flex>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Button
                  as={Link}
                  to={"contact"}
                  bg={"#F28C28"}
                  py={{ lg: "22px", base: "18px" }}
                  px={{ lg: "30px", base: "22px" }}
                  fontFamily={"Lato"}
                  fontSize={{ lg: "20px", base: "15px" }}
                >
                  Get In Touch
                </Button>
              </motion.button>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          bgColor={"rgba(0, 0, 0, 0.5)"}
          bgImage={Image4}
          bgRepeat={"no-repeat"}
          bgPosition={"center"}
          bgSize={"cover"}
          w={"100%"}
          h={"600px"}
          backgroundBlendMode={"soft-light"}
        >
          <Flex
            px={{ md: "40px", base: "20px" }}
            py={"150px"}
            flexDirection={"column"}
            gap={"10px"}
          >
            <Heading
              as={"h2"}
              color={"white"}
              textTransform={"capitalize"}
              fontFamily={"Lato"}
              fontSize={{ lg: "60px", base: "40px" }}
              fontWeight={600}
              maxW={"900px"}
            >
              benah WorldWide
            </Heading>
            <Text
              color={"white"}
              textTransform={"capitalize"}
              fontFamily={"Lato"}
              fontSize={{ lg: "30px", base: "20px" }}
              fontWeight={500}
              maxW={"900px"}
            >
              Our unwavering commitment to superior quality and craftsmanship
              sets us apart in the industry.
            </Text>
            <Flex>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Button
                  as={Link}
                  to={"contact"}
                  bg={"#F28C28"}
                  py={{ lg: "22px", base: "18px" }}
                  px={{ lg: "30px", base: "22px" }}
                  fontFamily={"Lato"}
                  fontSize={{ lg: "20px", base: "15px" }}
                >
                  Get In Touch
                </Button>
              </motion.button>
            </Flex>
          </Flex>
        </Flex>
      </Carousel>
    </motion.div>
  );
}

export default Banner;
