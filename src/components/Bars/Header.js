import React, { useState } from "react";

// Custom Components
import { Modal, Button, PageHeader } from "antd";
import AddToCardModal from "../Modal/AddToCardModal";

const Header = () => {
  const [show, setShow] = useState(false);

  const showModal = () => {
    setShow(true);
  };

  const handleOk = () => {
    setShow(false);
  };

  const handleCancel = () => {
    setShow(false);
  };

  return (
    <div>
      <div className="header">
        <PageHeader
          ghost={false}
          backIcon={false}
          title="Food Gallery"
          extra={[
            <Button type="primary" onClick={showModal}>
              Your Cart
            </Button>,
          ]}
        ></PageHeader>
      </div>

      <Modal
        closable={false}
        footer={null}
        title="Your Cart"
        visible={show}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <AddToCardModal handleCancel={handleCancel} />
      </Modal>
    </div>
  );
};

export default Header;
