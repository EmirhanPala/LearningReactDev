import React from 'react';

import { Table, Modal, Button, Thead, Tbody, Tr, Th, Td, TableCaption, Text, useDisclosure, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Box } from '@chakra-ui/react';
import { useQuery } from 'react-query';
import { fetchOrders } from '../../../api';
import { Link } from 'react-router-dom';

function Orders() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { isLoading, isError, data, error } = useQuery("admin:orders", fetchOrders);

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error {error.message}</div>
  }

  //console.log(data);

  return (
    <div>


      <Text fontSize="2xl" p={5}>Orders</Text>

      <Table variant="simple">
        <TableCaption>Test</TableCaption>
        <Thead>
          <Tr>
            <Th>User</Th>
            <Th>Address</Th>
            <Th isNumeric>Items</Th>
            <Th>Item List</Th>
          </Tr>
        </Thead>
        <Tbody>
          {
            data.map((item) => (
              <Tr key={item._id}>
                <Td>{item.user.email}</Td>
                <Td>{item.adress}</Td>
                <Td isNumeric>{item.items.length}</Td>
                <Td>
                  <Button onClick={onOpen}>
                    <Link to={`/admin/orders/${item._id}`}>
                      Open List
                    </Link>
                  </Button>
                  <Modal onClose={onClose} isOpen={isOpen} isCentered>
                    <ModalOverlay />
                    <ModalContent>
                      <ModalHeader>Item List</ModalHeader>
                      <ModalCloseButton />
                      <ModalBody>
                        {item.items.map((veri) => (
                          <>
                          test
                          </>
                        ))}
                      </ModalBody>
                      <ModalFooter>
                        <Button onClick={onClose}>Close</Button>
                      </ModalFooter>
                    </ModalContent>
                  </Modal>
                </Td>
              </Tr>
            ))
            /*
            {item.items.map((veri) => (
                    <>
                      
                    </>
                  ))}
            */
            //<code>{JSON.stringify([item.items])}</code>
          }
        </Tbody>
      </Table>

    </div>

  )
}

export default Orders