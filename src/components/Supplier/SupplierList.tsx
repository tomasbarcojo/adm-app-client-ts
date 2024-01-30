import { BoxForm } from 'components/Forms/BoxForm';
import { InputText } from 'components/Inputs/InputText/InputText';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { TableVirtuoso } from 'react-virtuoso';
import axiosInstance from 'utils/axios';
import { useQueryParams } from 'utils/useQueryParams';

const SupplierList = () => {
  const [list, setList] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const filters = useQueryParams() as any;
  const castedFilters: Record<string, string> = {
    search: filters.params.search || ''
  };

  const fetchData = async () => {
    if (isLoading) return;
    setIsLoading(true);
    const newPage = page + 1;
    const res = await axiosInstance.get(`/supplier?page=${newPage}`);
    const result = res.data;
    if (result?.data) {
      const newData = [...list, ...result.data];
      setList(newData);
      setPage(newPage);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    async function fetchData() {
      if (isLoading) return;
      setIsLoading(true);
      const res = await axiosInstance.get(
        `/supplier?page=1&search=${castedFilters.search}`
      );
      const result = res.data;
      if (result?.data) {
        setList(result.data);
      }
      setIsLoading(false);
    }
    fetchData();
  }, [JSON.stringify(castedFilters)]);

  return (
    <BoxForm>
      <div className="inputsContainerForm">
        <div className="inputsForm">
          <div className="oneinput">
            <InputText
              placeHolder="Search"
              inputName="search"
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
            />
          </div>
          <TableVirtuoso
            style={{ height: 'calc(100vh - 397px)' }}
            data={list}
            components={{
              Table: ({ ...props }) => (
                <table
                  {...props}
                  style={{ borderCollapse: 'collapse', width: '100%' }}
                />
              ),
              TableRow: ({ ...props }) => (
                <tr {...props} style={{ borderTop: '1px solid #E0E0E0' }} />
              ),
              TableHead: ({ ...props }) => (
                <thead
                  {...props}
                  style={{
                    zIndex: 2,
                    position: 'sticky',
                    top: 0,
                    background: 'white'
                  }}
                />
              )
            }}
            endReached={() => {
              void fetchData();
            }}
            fixedHeaderContent={() => (
              <tr style={{ textAlign: 'left' }}>
                <th style={{ padding: '10px', minWidth: '50px' }} />
                <th style={{ padding: '10px', minWidth: '50px' }}>Id</th>
                <th style={{ padding: '10px', minWidth: '200px' }}>Name</th>
                <th style={{ padding: '10px', minWidth: '200px' }}>CUIT</th>
                <th style={{ padding: '10px', minWidth: '200px' }}>
                  Bank Account 1
                </th>
                <th style={{ padding: '10px', minWidth: '200px' }}>
                  Bank Account 2
                </th>
                <th style={{ padding: '10px', minWidth: '200px' }}>
                  Bank Account 3
                </th>
                <th style={{ padding: '10px', minWidth: '200px' }}>Phone</th>
                <th style={{ padding: '10px', minWidth: '200px' }}>City</th>
                <th style={{ padding: '10px', minWidth: '200px' }}>Address</th>
              </tr>
            )}
            itemContent={(index, data) => (
              <>
                <td
                  style={{
                    padding: '10px',
                    textAlign: 'center',
                    verticalAlign: 'middle'
                  }}
                >
                  <Link to="/admin/supplier/new">
                    <i className="bx bx-edit bx-sm bx-border"></i>
                  </Link>
                </td>
                <td style={{ padding: '10px' }}>{data.id}</td>
                <td style={{ padding: '10px' }}>{data.businessName}</td>
                <td style={{ padding: '10px' }}>{data.cuit}</td>
                <td style={{ padding: '10px' }}>{data.bankaccount1}</td>
                <td style={{ padding: '10px' }}>{data.bankaccount2}</td>
                <td style={{ padding: '10px' }}>{data.bankaccount3}</td>
                <td style={{ padding: '10px' }}>{data.phone}</td>
                <td style={{ padding: '10px' }}>{data.city}</td>
                <td style={{ padding: '10px' }}>{data.address}</td>
              </>
            )}
          />
        </div>
      </div>
    </BoxForm>
  );
};

export default SupplierList;
