import {Box, Image, Button} from '@chakra-ui/react';
import {Link} from 'react-router-dom';

function Card() {
  return (
    <Box bordorWidth="1px" borderRadius="lg" overflow="hidden" p="3">
        <Link to="#/">
            <Image src="https://picsum.photos/400/200?random=1" alt="product" />

            <Box p="6">
                <Box d="flex" alignItems="baseline">
                    12/12/2022
                </Box>
                <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
                    Macbook Pro
                </Box>
                <Box>100 TL</Box>
            </Box>
        </Link>
        <Button colorScheme="pink">
            Add to basket
        </Button>
    </Box>
  )
}

export default Card