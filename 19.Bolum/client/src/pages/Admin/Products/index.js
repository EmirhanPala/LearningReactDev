import React, { useMemo } from 'react';

import { useMutation, useQuery, useQueryClient } from 'react-query';
import { fetchProductsList, deleteProduct } from '../../../api';

import { Link } from 'react-router-dom';
import { Text } from '@chakra-ui/react';
import { Table, Popconfirm } from 'antd';
/*
useMutation: ile silme ve ekleme gibi işlemleri gerçekleştirebiliyoruz.

useQueryClient: index.js'de en dışta olan queryClient tanımımıza erişmiş oluyoruz.
*/
function Products() {

  const queryClient = useQueryClient();

  const { isLoading, isError, data, error } = useQuery("admin:products", fetchProductsList);

  //İkinci parametrede ne yapmak istiyorsak onu yazıyoruz. 
  //Örnek:
  //Mutation bittikten sonra veya önce tekrardan refect edilecek queryler varmı vs Refresh etmek istediğimiz query vs varsa 
  const deleteMutation = useMutation(deleteProduct, {
    onSuccess: () => queryClient.invalidateQueries("admin:products")
  });

  const columns = useMemo(() => {
    return [
      {
        title: 'Title',
        dataIndex: 'title',
        key: 'title',
      },
      {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
      },
      {
        title: 'Created At',
        dataIndex: 'createdAt',
        key: 'createdAt',
      },
      {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
          <>
            <Link to={`/admin/products/${record._id}`}>Edit</Link>
            <Popconfirm
              title="Are you sure?"
              onConfirm={() => {
                deleteMutation.mutate(record._id, {
                  onSuccess: () => {
                    console.log("deleted");
                  },
                });
              }}
              onCancel={() => console.log("cancelled")}
              okText="Yes"
              cancelText="No"
              placement='left'
            >
              <a href='/#' style={{ marginLeft: 10 }}>Delete</a>
            </Popconfirm>
          </>
        ),
      },
    ];
  }, []);

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error {error.message}</div>;
  }

  //console.log(data);

  return (
    <div>
      <Text fontSize="2xl" p="5">Products</Text>

      <Table dataSource={data} columns={columns} rowKey="_id" />
    </div>
  )
}

export default Products