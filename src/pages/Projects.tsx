import { Box, Flex, Grid, Heading, Image, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image2 from "../assets/images/bannerImg.jpg"; 
import B1 from "../assets/images/Untitled-1.png";
import B5 from "../assets/images/Untitled-5.png";
import Building4 from "../assets/images/building4.jpg";
import Building5 from "../assets/images/building5.jpg";
import Building6 from "../assets/images/building6.jpg";

const MotionBox = motion(Box);

const Projects = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setHoveredCard(index);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  const projects = [
    {
      bgImage: B5,
      title: "COUNTRY HOME",
      desc: "Construction of a five-bedroom bungalow country home at Ohurdua town Edo State for kadosen energy services.",
    },
    {
      bgImage: Image2,
      title: "BLOCK OF FOUR FLAT",
      desc: "Construction of a sport facility that comprise of a standard basketball court and a Volley ball court at Federal Government Girls College Owerri.",
    },
    {
      bgImage: Building5,
      title: "CANTEEN AND MOBILE POLICE QUARTERS",
      desc: "Construction of a storey building housing four flats at satellite town Lagos for a private client",
    },
    {
      bgImage: Building6,
      title: "BLOCK OF FOUR FLAT",
      desc: "Construction of a storey building housing four flats at satellite town Lagos for a private client",
    },
    {
      bgImage: Building4,
      title: "EKO COURT",
      desc: "Construction of a storey building housing four flats at satellite town Lagos for a private client",
    },
    {
      bgImage: B1,
      title: "BLOCK OF FOUR FLAT",
      desc: "Construction of a storey building housing four flats at satellite town Lagos for a private client",
    },
  ];

  return (
    <Grid
      templateColumns={{
        base: "1fr",
        md: "repeat(2, 1fr)",
        lg: "repeat(3, 1fr)",
      }}
      gap={2}
      bgColor={"#f1f2f3"}
      px={{ base: "20px", md: "20px" }}
      py={{ base: "20px", md: "20px" }}
    >
      {projects.map((project, index) => (
        <Flex
          key={index}
          pt={"80px"}
          justifyContent="center"
          alignItems="center"
        >
          <MotionBox
            position="relative"
            width="400px"
            height="400px"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            initial={false}
            animate={{ rotateY: hoveredCard === index ? 180 : 0 }}
            transition={{ duration: 1.2 }}
            style={{ transformStyle: "preserve-3d" }}
            cursor="pointer"
            _hover={{ boxShadow: "lg" }}
          >
            <MotionBox
              position="absolute"
              width="100%"
              height="100%"
              bg="#0047AB"
              color="white"
              display={hoveredCard === index ? "flex" : "none"}
              flexDirection="column"
              px={"10px"}
              pt={"30px"}
              backfaceVisibility="hidden"
              style={{ transform: "rotateY(180deg)" }}
              borderRadius="md"
            >
              <Heading as="h2" fontSize="20px" textAlign="center">
                {project?.title}
              </Heading>
              <Text fontSize="18px" fontWeight="bold" textAlign="center">
                {project?.desc}
              </Text>
            </MotionBox>

            <MotionBox
              position="absolute"
              width="100%"
              height="100%"
              bg={"white"}
              display={hoveredCard !== index ? "flex" : "none"}
              backfaceVisibility="hidden"
              transform="rotateY(0deg)"
              borderRadius="md"
            >
              <Image
                src={project?.bgImage}
                alt={project?.title}
                width="100%"
                height="100%"
                objectFit="cover"
                borderRadius="md"
              />
            </MotionBox>
          </MotionBox>
        </Flex>
      ))}
    </Grid>
  );
};

export default Projects;