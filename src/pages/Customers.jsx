import React, { useEffect, useState } from "react";

import axios from "axios";

import DataTable from "react-data-table-component";

const Customers = () => {
  const [users, setUsere] = useState([]);
  useEffect(() => {
    loadUsers();
  }, []);
  const loadUsers = async () => {
    await axios({
      method: "GET",
      url: "http://192.168.29.161:4040/api/users/approvalList",
    })
      .then((response) => {
        setUsere(response.data.data);
        console.log(response.data.data);
      })
      .catch((erro) => {
        console.log("error", erro);
      });
  };
  const columns = [
    {
      name: "Index",
      selector:(row, Index) => row = Index + 1,
      sortable: true
    },
    {
      id: 1,
      name: "firstName",
      selector: (row) => row.firstName,
      sortable: true,
      reorder: true,
    },
    {
      id: 2,
      name: "email",
      selector: (row) => row.email,
      sortable: true,
      reorder: true,
    },
    {
      id: 3,
      name: "phone",
      selector: (row) => row.phone,
      sortable: true,
      right: true,
      reorder: true,
    },
    {
      id: 4,
      name: "userType",
      selector: (row) => row.userType,
      sortable: true,
      right: true,
      reorder: true,
    },
  ];
  
  return (
    <>
      <h2 className="page-header">customers</h2>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card__body">
              <div>
                <div className="table-wrapper">
                  <DataTable
                    columns={columns}
                    data={users}
                    pagination
                    defaultSortFieldId={1}
                    // selectableRows
                  />
                  {/* <table>
                  <thead>
                    <tr>
                      <th>Index</th>
                      <th>Name</th>
                      <th>User Type</th>
                      <th>Number</th>
                      <th>Email</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user, index) => (
                      <tr>
                        <th>{index + 1}</th>
                        <td>
                          {user.firstName} {user.lastName}
                        </td>
                        <td>{user.userType}</td>
                        <td>{user.phone}</td>
                        <td>{user.email}</td>
                      </tr>
                    ))}
                  </tbody>
                </table> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Customers;
