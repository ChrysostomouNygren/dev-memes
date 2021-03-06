import React, { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { memes } from "../components/memes.json";
import { Modal, Button, Container, Row, Col } from "react-bootstrap";

import { pictureState } from "../recoil/pictures/atom";
import { useRecoilState } from "recoil";

import "../styles/all.css";

function All() {
  // const randomMemeArray = memes.sort(() => Math.random() - 0.5);
  const [modalShow, setModalShow] = useState(false);
  const [url, setUrl] = useRecoilState(pictureState);

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <img src={url} width={"765px"} />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  return (
    <div>
      <Header />
      <h2>MEMEZ 4 PEPZ</h2>
      <h5>(click pic 4 fullsize)</h5>
      <Container>
        <Row xs={"auto"} md={"auto"} lg={"auto"}>
          <Col>
            <div className="box">
              {memes.map((item) => (
                <img
                  src={item.url}
                  onClick={() => {
                    setModalShow(true), setUrl(item.url);
                  }}
                  width={"200px"}
                />
              ))}
            </div>
            <MyVerticallyCenteredModal
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default All;
