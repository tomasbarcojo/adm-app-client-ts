import { BoxForm } from 'components/Forms/BoxForm';
import { InputText } from 'components/Inputs/InputText/InputText';
import React, { type ChangeEvent, useEffect, useState } from 'react';
import { TableVirtuoso } from 'react-virtuoso';
import axiosInstance from 'utils/axios';
import { useQueryParams } from 'utils/useQueryParams';

const ListTest = () => {
  const [listProducts, setListProducts] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const filters = useQueryParams() as any;
  const castedFilters: Record<string, string> = {
    search: filters.params.search || ''
  };

  const fetchProducts = async () => {
    if (isLoading) return;
    setIsLoading(true);
    const newPage = page + 1;
    const res = await axiosInstance.get(`/product?page=${newPage}`);
    const result = res.data;
    if (result?.data) {
      const newProducts = [...listProducts, ...result.data];
      setListProducts(newProducts);
      setPage(newPage);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    async function fetchData() {
      if (isLoading) return;
      setIsLoading(true);
      const res = await axiosInstance.get(
        `/product?page=1&search=${castedFilters.search}`
      );
      const result = res.data;
      if (result?.data) {
        setListProducts(result.data);
      }
      setIsLoading(false);
    }
    fetchData();
  }, [JSON.stringify(castedFilters)]);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    console.log(event);
  };

  return (
    <BoxForm>
      <div className="inputsContainerForm">
        <div className="inputsForm">
          <div className="oneinput">
            <InputText
              placeHolder="Name"
              inputName="name"
              onInputChange={handleChange}
            />
          </div>
          <div className="oneinput">
            <InputText
              placeHolder="Name"
              inputName="name"
              onInputChange={handleChange}
            />
          </div>
          <div className="oneinput">
            <InputText
              placeHolder="Name"
              inputName="name"
              onInputChange={handleChange}
            />
          </div>
          <TableVirtuoso
            useWindowScroll
            data={listProducts}
            components={{
              Table: ({ ...props }) => (
                <table
                  {...props}
                  style={{ borderCollapse: 'collapse', width: '100%' }}
                />
              ),
              TableRow: ({ ...props }) => (
                <tr {...props} style={{ borderTop: '2px solid #E0E0E0' }} />
              )
            }}
            endReached={() => {
              void fetchProducts();
            }}
            fixedHeaderContent={() => (
              <tr style={{ textAlign: 'left' }}>
                <th style={{ padding: '10px' }}>Id</th>
                <th style={{ padding: '10px' }}>Name</th>
                <th style={{ padding: '10px' }}>Price</th>
                <th style={{ padding: '10px' }}>Description</th>
                <th style={{ padding: '10px' }}>Stock</th>
              </tr>
            )}
            itemContent={(index, product) => (
              <>
                <td style={{ padding: '10px' }}>{product.id}</td>
                <td style={{ padding: '10px' }}>{product.name}</td>
                <td style={{ padding: '10px' }}>{product.price}</td>
                <td style={{ padding: '10px' }}>{product.obs}</td>
                <td style={{ padding: '10px' }}>{product.stock}</td>
              </>
            )}
          />
        </div>
        {/* <input
          className="searchInput"
          type="search"
          placeholder="Buscar..."
          defaultValue={filters.params.search}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              const event = e.target as HTMLInputElement;
              filters.setParam('search', event.value);
            }
          }}
          onBlur={(e) => {
            const event = e.target as HTMLInputElement;
            filters.setParam('search', event.value);
          }}
        /> */}
      </div>
    </BoxForm>
  );
};

export default ListTest;
