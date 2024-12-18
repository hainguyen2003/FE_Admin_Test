import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  getInforConsultingRegister1,
  getInforService,
} from "../../../Services/lead";
import { Descriptions, Image } from "antd";

function DetailConsultingRegister1(props) {
  const location = useLocation();
  const [detailCR, setDetailCR] = useState({});
  const consultingRegisterInfor1 = location.pathname.split("/");
  const idPath = consultingRegisterInfor1[consultingRegisterInfor1.length - 1];

  const handleGetInforConsultingRegister1 = async (idPath) => {
    getInforConsultingRegister1(idPath).then((res) => {
      if (res.status === 200) {
        setDetailCR(res?.data?.data);
      }
    });
  };

  useEffect(() => {
    handleGetInforConsultingRegister1(idPath);
  }, [idPath]);

  return (
    <div>
      <Descriptions>
        <Descriptions.Item label="Tên khách hàng" span={4}>
          {detailCR?.name}
        </Descriptions.Item>
        <Descriptions.Item label="Số điện thoại" span={4}>
          {detailCR?.phone}
        </Descriptions.Item>
        <Descriptions.Item label="Email" span={4}>
          {detailCR?.email}
        </Descriptions.Item>
        <Descriptions.Item label="Địa chỉ" span={4}>
          {detailCR?.address}
        </Descriptions.Item>
        <Descriptions.Item label="Trạng thái đăng ký " span={4}>
          {detailCR?.status}
        </Descriptions.Item>
        <Descriptions.Item label="Khóa học đăng ký  " span={4}>
          {detailCR?.contentAdvice}
        </Descriptions.Item>
        <Descriptions.Item label="Ngày tạo" span={4}>
          {detailCR?.createdDate}
        </Descriptions.Item>
        <Descriptions.Item label="Ngày cập nhật" span={4}>
          {detailCR?.updateDate}
        </Descriptions.Item>
      </Descriptions>
    </div>
  );
}

export default DetailConsultingRegister1;
