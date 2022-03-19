import React from 'react';
import { Box, Flex, Grid, Button } from '@chakra-ui/react';
import { fetchProductsList } from '../../api';
import Card from '../../components/Navbar/Card';
import { useInfiniteQuery } from 'react-query';

function Products() {
  const { data, error, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage, status } = useInfiniteQuery('products', fetchProductsList, {
    getNextPageParam: (lastGroup, allGroups) => {
      const morePagesExist = lastGroup?.length === 12;

      if (!morePagesExist) {
        return;
      }

      return allGroups.length + 1;
    },
  });

  if (status === "loading") return 'Loading...'

  if (status === "error") return 'An error has occurred: ' + error.message

  console.log("data", data);

  return (
    <div>


      <Grid templateColumns='repeat(3, 1fr)' gap={4}>
        {
          data.pages.map((group, i) => (
            <React.Fragment key={i}>
              {
                group.map((item) => (
                  <Box w="100%" key={item._id}>
                    <Card item={item} />
                  </Box>
                ))
              }
            </React.Fragment>
          ))
        }

      </Grid>

      <Flex mt="10" justifyContent="center">
        <Button 
          onClick={() => fetchNextPage()}
          isLoading={isFetchingNextPage}
          disabled={!hasNextPage || isFetchingNextPage}
        >
          {isFetchingNextPage
            ? "Loading more..."
            : hasNextPage
              ? "Load More"
              : "Nothing more to load"}
        </Button>
        
      </Flex>
    </div>
  )
}

export default Products