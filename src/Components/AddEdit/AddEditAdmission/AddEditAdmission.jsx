import {
  ModalForm,
  ProForm,
  ProFormText,
  ProFormSwitch,
  ProFormUploadButton,
} from "@ant-design/pro-components";
import { message, notification } from "antd";
import React, { useRef, useState } from "react";
import {
  createAdmission,updateAdmission, uploadFile } from "../../../Services/lead";
import Editor from "../../CKEditor/Editor";
import _ from "lodash";
import "../style.css";

function AddEditAdmission({ onSuccess, openModal, data, onOpenChange }) {
  const [listFile, setListFile] = useState([]);
  const [fieldFile, setFieldFile] = useState("");
  const formRef = useRef(null);

  // Hàm tạo Admission
  const handleCreateAdmission = (values) => {
    createAdmission(values).then((res) => {
      if (res?.data?.success === true) {
        message.success("Tạo chương trình thành công");
        onSuccess();
      } else if (res?.data?.error?.statusCode === 2) 
      {
        res?.data?.error?.errorDetailList.map((e) =>
          message.open({
            type: "error",
            content: e.message,
            duration: 8,
          })
        );
      }
    });
  };

  // Hàm cập nhật Admission
  const handleUpdateAdmission = (values) => {
    updateAdmission(data?.id, values).then((res) => {
      if (res?.data?.success === true) {
        message.success("Cập nhật chương trình thành công");
        onSuccess();
      } else if (res?.data?.error?.statusCode === 2) 
      {
        res?.data?.error?.errorDetailList.map((e) =>
          message.open({
            type: "error",
            content: e.message,
            duration: 20,
          })
        );
      }
    });
  };

  const handleUpload = async (file) => {
    const res = await uploadFile(file.file);

    if (res?.data?.success) {
      setListFile([{ url: res?.data?.data?.downloadUrl }]);
      setFieldFile(res?.data?.data?.downloadUrl);
      notification.success({ message: "Tải file lên thành công" });
    } else {
      notification.error({ message: "Tải file lên không thành công!" });
    }
  };

  return (
    <>
      <ModalForm
        title={
          data?.id ? "Chỉnh sửa thông tin chương trình" : "Thêm chương trình"
        }
        initialValues={data}
        modalProps={{
          destroyOnClose: true,
        }}
        open={openModal}
        onFinish={async (values) => {
          if (data?.id) {
            handleUpdateAdmission(values);
          } else {
            handleCreateAdmission(values);
          }
        }}
        onOpenChange={onOpenChange}
        formRef={formRef}
      >
        <ProForm.Group>
          <ProFormText
            width="md"
            name="title"
            label="Tiêu đề chương trình"
            placeholder="Nhập tiêu đề chương trình"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập tiêu đề chương trình",
              },
            ]}
          />
          <ProFormText
            width="md"
            name="program"
            label="Chương trình"
            placeholder=" chương trình"
          />
          <ProFormText
            width="md"
            name="description"
            label="Mô tả"
            placeholder="Mô tả chương trình"
          />

          <ProFormUploadButton
            name="image"
            label="Upload Ảnh"
            // rules={[
            //   {
            //     required: true,
            //     message: "Vui lòng upload ảnh",
            //   },
            // ]}
            title="Click to upload"
            fileList={listFile}
            transform={(value) => {
              return {
                image: fieldFile || "", // cập nhật không upload file mới thì lấy giá trị value trong form
              };
            }}
            fieldProps={{
              listType: "picture-card",
              method: "POST",
              name: "file",
              customRequest: handleUpload,
              multiple: true,
              onRemove: () => setListFile([]),
              openFileDialogOnClick: true,
              onChange: (file) => {
                console.log("file:: ", file);
              },
            }}
            action="process.env.BASE_URL/file/upload"
          />

          <ProFormText
            width="md"
            name="linkRegister"
            label="Liên kết đăng ký"
            placeholder="Nhập liên kết đăng ký"
            rules={[
              {
                required: true,
                type: "url",
                message: "Vui lòng nhập liên kết hợp lệ",
              },
            ]}
          />

          <ProForm.Item
            width="md"
            name="admissionForm"
            label="Nội dung chương trình"
            placeholder="Nội dung chương trình"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập nội dung chương trình",
              },
            ]}
          >
           <Editor
              initialValues={data?.content}
              onChange={(event, editor) => {
                formRef?.current?.setFieldsValue({
                  content: editor.getData(),
                });
              }}
            />
          </ProForm.Item>
          
          <ProFormSwitch
            name="status"
            label="Trạng thái hoạt động"
            checkedChildren="Hoạt động"
            unCheckedChildren="Không hoạt động"
            initialValue={data?.status ?? true}
          />
        </ProForm.Group>
      </ModalForm>
    </>
  );
}

export default AddEditAdmission;
