import { Button, Flex, Heading } from "@chakra-ui/react";
import Project from "../assets/images/project-management.png";
import ProjectCarousel from "./ProjectCarousel";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ProjectSection = () => {

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
      >
        <Flex py={"20px"} flexDir={"column"}>
          <Heading
            as={"h3"}
            textTransform={"capitalize"}
            fontWeight={500}
            fontSize={{ md: "40px", base: "35px" }}
            textAlign={"center"}
            color={"#0047AB"}
            fontFamily={"Lato"}
          >
            Projects
          </Heading>
          <Flex justifyContent={"center"} alignItems={"center"} py={"20px"}>
            <img src={Project} alt="b" width={"40px"} height={"30px"} />
          </Flex>
        </Flex>
        <ProjectCarousel />
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Button
            as={Link}
            to={"/project"}
            mt={{ md: "30px", base: "10px" }}
            bg={"#F28C28"}
            // py={"18px"}
            px={"18px"}
            fontFamily={"Lato"}
            fontSize={{ md: "20px", base: "17px" }}
            mb={{ lg: "none", base: "30px" }}
            _hover={{
              backgroundColor: "#f1f2f3",
              color: "#F28C28",
              borderColor: "#F28C28",
            }}
          >
            More...
          </Button>
        </motion.div>
      </Flex>
    </>
  );
}

export default ProjectSection;
