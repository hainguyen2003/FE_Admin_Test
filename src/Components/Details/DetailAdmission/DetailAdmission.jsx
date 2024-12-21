import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getInforAdmission } from "../../../Services/lead"; // Import hàm lấy chi tiết Admission
import { Descriptions, Image, Tag } from "antd";
import moment from "moment";

<<<<<<< HEAD
function DetailAdmission(props) {
  const location = useLocation();
  const [dataAdmission, setDataAdmission] = useState({});
  const amissionInfor = location.pathname.split("/");
  const idPath = amissionInfor[amissionInfor.length - 1];

  const handleGetInforAdmission = async (idPath) => {
    getInforAdmission(idPath).then((res) => {
      if (res.status === 200) {
        setDataAdmission(res?.data?.data);
      }
    });
=======
function DetailAdmission() {
  const location = useLocation();
  const [admissionData, setAdmissionData] = useState({});
  const admissionInfor = location.pathname.split("/");
  const idPath = admissionInfor[admissionInfor.length - 1];

  const handleGetInforAdmission = async (idPath) => {
    getInforAdmission(idPath)
      .then((res) => {
        if (res.status === 200) {
          setAdmissionData(res?.data?.data);
        }
      })
      
>>>>>>> c4f6ccf4a6e57688c3239a0cf32a3c5591b33428
  };

  useEffect(() => {
    handleGetInforAdmission(idPath);
  }, [idPath]);

  return (
    <div>
<<<<<<< HEAD
      <Descriptions>
        <Descriptions.Item label="Tiêu đề chương trình" span={4}>
          {dataAdmission?.title}{" "}
        </Descriptions.Item>
        <Descriptions.Item label="Chương trình đào tạo" span={4}>
          {dataAdmission?.admissionForm}{" "}
        </Descriptions.Item>
        <Descriptions.Item label="Mô tả chương trình" span={4}>
          {dataAdmission?.program}{" "}
        </Descriptions.Item>
        <Descriptions.Item label="Ảnh" span={4}>
          <Image
            src={dataAdmission?.image}
            alt={dataAdmission?.image}
            style={{ width: 250, height: 250 }}
          />
          <Descriptions.Item label="Link đăng ký" span={4}>
            {dataAdmission?.linkRegister}{" "}
          </Descriptions.Item>
        </Descriptions.Item>
        <Descriptions.Item label="Ngày tạo ">
          {dataAdmission?.createdDate}{" "}
        </Descriptions.Item>
        <Descriptions.Item label="Ngày cập nhật" span={2}>
          {dataAdmission?.updateDate}{" "}
        </Descriptions.Item>
        <Descriptions.Item label="Nội dung chương trình">
          <div
            dangerouslySetInnerHTML={{ __html: dataAdmission?.admissionForm }}
          ></div>
        </Descriptions.Item>
        <Descriptions.Item label="Trạng thái" span={3}>
          {dataAdmission?.status ? (
=======
      <Descriptions title="Chi tiết chương trình tuyển sinh" bordered>
        <Descriptions.Item label="Tên chương trình" span={3}>
          {admissionData?.title}
          {""}
        </Descriptions.Item>
        <Descriptions.Item label="Ảnh" span={3}>
          (
          <Image
            src={admissionData?.image}
            alt={admissionData?.title}
            style={{ width: 250, height: 250 }}
          />
          )
        </Descriptions.Item>
        <Descriptions.Item label="Trạng thái" span={3}>
          {admissionData?.status ? (
>>>>>>> c4f6ccf4a6e57688c3239a0cf32a3c5591b33428
            <Tag color="green">Hoạt động</Tag>
          ) : (
            <Tag color="red">Không hoạt động</Tag>
          )}
        </Descriptions.Item>
<<<<<<< HEAD
=======
        <Descriptions.Item label="Ngày tạo" span={3}>
          {admissionData?.createdDate
            ? moment(admissionData.createdDate).format("DD/MM/YYYY HH:mm")
            : "Không có dữ liệu"}
        </Descriptions.Item>
        <Descriptions.Item label="Ngày cập nhật" span={3}>
          {/* {admissionData?.updateDate
            ? moment(admissionData.updateDate).format("DD/MM/YYYY HH:mm")
            : "Không có dữ liệu"} */}
          {admissionData?.createdDate}{" "}
        </Descriptions.Item>
        <Descriptions.Item label="Mô tả chương trình" span={3}>
          {admissionData?.description}
          {""}
        </Descriptions.Item>
        <Descriptions.Item label="Nội dung chương trình" span={3}>
          {/* {admissionData?.admissionForm ? (
            <div
              dangerouslySetInnerHTML={{
                __html: admissionData.admissionForm,
              }}
            ></div>
          ) : (
            "Không có nội dung"
          )} */}
          <div dangerouslySetInnerHTML={{ __html: admissionData?.content }}></div>
        </Descriptions.Item>
        <Descriptions.Item label="Liên kết đăng ký" span={3}>
          {admissionData?.linkRegister ? (
            <a
              href={admissionData.linkRegister}
              target="_blank"
              rel="noopener noreferrer"
            >
              {admissionData.linkRegister}
            </a>
          ) : (
            "Không có liên kết đăng ký"
          )}
        </Descriptions.Item>
>>>>>>> c4f6ccf4a6e57688c3239a0cf32a3c5591b33428
      </Descriptions>
    </div>
  );
}

export default DetailAdmission;
