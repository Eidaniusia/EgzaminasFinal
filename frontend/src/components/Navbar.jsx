import { Button, Container, Flex, HStack, Text, useColorMode} from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { TiPlus } from "react-icons/ti";
import { useProductStore } from "@/store/product";
import { FaUserCircle } from "react-icons/fa";


const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { products } = useProductStore()

  return <Container maxW={"1140px"} px={4}>
    <Flex
      h={16}
      alignItems={"center"}
      justifyContent={"space-between"}
      flexDir={{
        base:"column",
        sm:"row"
      }}
    >

    <Text
      fontSize={{base: "22", sm: "28"}}
      fontWeight={"bold"}
      textTransform={"uppercase"}
      textAlign={"center"}
      bgGradient={"linear(to-r, green.200, pink.500)"}
      bgClip={"text"}
    >
      <Link to ={"/"}>Parduotuve 🛒</Link>
    </Text>

    <HStack spacing={2} alignItems={"center"}>
    <Link to={"/create"}>
      <Button>
        <TiPlus fontSize={20}/>
      </Button>
    </Link>
    <Link to={"/user-page"}>
    <Button>
      <FaUserCircle fontSize={20}/>
    </Button>
    </Link>
    <Button onClick={toggleColorMode}>
    {colorMode === "light" ? "🌑" : "🔆"}
    </Button>
    </HStack>
  </Flex>
  </Container>
}
export default Navbar