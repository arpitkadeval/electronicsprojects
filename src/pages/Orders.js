import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Dialog, DialogActions, DialogContent } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Tilta from "react-vanilla-tilt";
const Orders = () => {
  const [open, setOpen] = useState(false);
  const [users, setUsere] = useState([]);
  const [alluser, setUser] = useState({
    imageName: "",
    image: "",
  });
  const { imageName, image } = alluser;
  useEffect(() => {
    loadUsers();
  }, []);
  const loadUsers = async () => {
    await axios({
      method: "GET",
      url: "http://192.168.29.161:4040/api/gallery",
    })
      .then((response) => {
        console.log(response.data.data);
        setUsere(response.data.data);
      })
      .catch((erro) => {
        console.log("error", erro);
      });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onInputChange = (e, key) => {
    setUser({ ...alluser, [e.target.name]: e.target.value });
  };
  const onSubmit = async () => {
    await axios({
      method: "POST",
      url: "http://192.168.29.161:4040/api/gallery",
      data: alluser,
    })
      .then((response) => {
        console.log(response.data.data);
        setUsere(response.data.data);
      })
      .catch((erro) => {
        console.log("error", erro);
      });
  };
  const submit = async () => {
    await axios({
      method: "POST",
      url: "http://192.168.29.161:4040/api/gallery",
      data: alluser,
    })
      .then((response) => {
        console.log(response.data.data);
        setUsere(response.data.data);
      })
      .catch((erro) => {
        console.log("error", erro);
      });
  };
  return (
    <>
      <div
        className="gallery_addimg"
        style={{
          display: "flex",
          "justify-content": "flex-end",
          margin: " 0 40px 12px 0px",
        }}
      >
        <Button variant="outlined" onClick={handleClickOpen}>
          <AddIcon />
          <span>upload img</span>
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogContent>
            <form className="mx-1 my-1" onSubmit={(e) => onSubmit(e)}>
              <div className="form-group">
                <label for="inputAddress2">title</label>
                <input
                  type="text"
                  className="form-control"
                  name="imageName"
                  placeholder="Apartment, studio, or floor"
                  value={imageName}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <br />
              <div className="form-group">
                <label for="inputAddress2">title</label>
                <input
                  type="file"
                  className="form-control"
                  placeholder="file"
                  name="image"
                  value={image}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <button
                onClick={submit}
                type="submit"
                className="btn btn-success my-3 mx-3"
              >
                Add Users
              </button>
            </form>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
            </DialogActions>
          </DialogContent>
        </Dialog>

        <hr style={{ "margin-bottom": "20px" }} />
      </div>
      <div className="row">
        <div className="col-12 col-lg-12 col-md-12 col-sm-1">
          <div className="row">
            {users.map((item, index) => (
              <div className="col-3 col-lg-3 col-md-6 col-sm-12" key={index}>
                <div className="cards">
                  <div className="container-fluid">
                    <div className="container">
                      <div className="row">
                        <div className="col">
                          <Tilta className="showbackcolow">
                            <div className="container">
                              <div className="peddina">
                                <div className="card">
                                  <div className="animashn">
                                    <h3 className="card_tital">{item.Sname}</h3>
                                  </div>
                                  <img
                                    src={item.imgsrc}
                                    alt="not img"
                                    className="img_card"
                                  />
                                  <div className="card_info">
                                    <span className="card_categry">
                                      {item.tital}
                                    </span>
                                    <a
                                      href={item.link}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                    ></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Tilta>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Orders;
