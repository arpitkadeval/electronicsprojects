import React, { useEffect, useState } from "react";
import axios from "axios";
import "../assets/css/request.css";
import "../assets/css/grid.css";
import "../components/table/table.css";
const Request = () => {
  const [users, setUsere] = useState([]);
  const [users1, setUsere1] = useState();

  useEffect(() => {
    loadUsers();
  }, []);
  const loadUsers = async () => {
    await axios({
      method: "GET",
      url: "http://192.168.29.161:4040/api/users/pandingRequestUser",
    })
      .then((response) => {
        console.log(response.data.data);
        setUsere(response.data.data);
        let totalData = response.data.data?.length;
        setUsere1(totalData);
      })
      .catch((erro) => {
        console.log("error", erro);
      });
  };

  const deleteUser = async (_id) => {
    let arpit = {
      userId: _id,
      approval: -1,
    };
    await axios({
      method: "PUT",
      url: "http://192.168.29.161:4040/api/users/registrationApproval",
      data: arpit,
    })
      .then((response) => {
        console.log(response.data);
        loadUsers();
      })
      .catch((erro) => {
        console.log("error", erro);
      });
  };
  const editUser = async (_id) => {
    let arpit = {
      userId: _id,
      approval: 1,
    };
    await axios({
      method: "PUT",
      url: "http://192.168.29.161:4040/api/users/registrationApproval",
      data: arpit,
    })
      .then((response) => {
        console.log(response.data);
        loadUsers();
      })
      .catch((erro) => {
        console.log("error", erro);
      });
  };

  return (
    <>
      <h2 className="page-header">Request</h2>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card__body">
              <div>
                <div className="table-wrapper">
                  <table>
                    <thead>
                      <tr>
                        <th>Index</th>
                        <th>Name</th>
                        <th>User Type</th>
                        <th>Number</th>
                        <th>Email</th>
                        <th>Action</th>
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
                          <td className="btnset">
                            <div
                              className="approve__pagination-item"
                              to={`/request`}
                              onClick={() => editUser(user._id)}
                            >
                              ✓
                            </div>

                            <div
                              className="reject__pagination-item"
                              to={`/request`}
                              onClick={() => deleteUser(user._id)}
                            >
                              ✕
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="table__pagination">
                  <div className="table__pagination-item active">1</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Request;
