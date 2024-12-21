<<<<<<< HEAD
/* eslint-disable no-lone-blocks */
=======
>>>>>>> c4f6ccf4a6e57688c3239a0cf32a3c5591b33428
import {
  ModalForm,
  ProForm,
  ProFormText,
  ProFormSwitch,
  ProFormUploadButton,
} from "@ant-design/pro-components";
<<<<<<< HEAD
import { message, notification, App } from "antd";
import React, { useRef, useState } from "react";
import {
  createAdmission,
  updateAdmission,
  uploadFile,
} from "../../../Services/lead";
import Editor from "../../CKEditor/Editor";
=======
import { message, notification } from "antd";
import React, { useRef, useState } from "react";
import {
  createAdmission,updateAdmission, uploadFile } from "../../../Services/lead";
import Editor from "../../CKEditor/Editor";
import _ from "lodash";
>>>>>>> c4f6ccf4a6e57688c3239a0cf32a3c5591b33428
import "../style.css";

function AddEditAdmission({ onSuccess, openModal, data, onOpenChange }) {
  const [listFile, setListFile] = useState([]);
  const [fieldFile, setFieldFile] = useState("");
  const formRef = useRef(null);

<<<<<<< HEAD
  const handleCreateAdmission = async (values) => {
    try {
      const res = await createAdmission(values);
      if (res?.data?.success) {
        message.success("Tạo thông tin thành công");
        onSuccess();
      } else {
        res?.data?.error?.errorDetailList?.forEach((e) =>
          message.error(e.message)
        );
      }
    } catch (error) {
      message.error("Có lỗi xảy ra khi tạo thông tin.");
    }
  };

  const handleUpdateAdmission = async (values) => {
    try {
      const res = await updateAdmission(data?.id, values);
      if (res?.data?.success) {
        message.success("Cập nhật thông tin thành công");
        onSuccess();
      } else {
        res?.data?.error?.errorDetailList?.forEach((e) =>
          message.error(e.message)
        );
      }
    } catch (error) {
      message.error("Có lỗi xảy ra khi cập nhật thông tin.");
    }
  };

  const handleUpload = async (file) => {
    try {
      const res = await uploadFile(file.file);
      if (res?.data?.success) {
        const downloadUrl = res?.data?.data?.downloadUrl;
        setListFile([{ url: downloadUrl }]);
        setFieldFile(downloadUrl);
        notification.success({ message: "Tải file lên thành công" });
      } else {
        notification.error({
          message: "Tải file lên không thành công!",
          description: res?.data?.message || "Vui lòng thử lại.",
        });
      }
    } catch (error) {
      console.error(error);
      notification.error({
        message: "Có lỗi xảy ra khi tải file.",
        description: error?.message || "Vui lòng thử lại sau.",
      });
=======
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
>>>>>>> c4f6ccf4a6e57688c3239a0cf32a3c5591b33428
    }
  };

  return (
<<<<<<< HEAD
    <App>
      <ModalForm
        title={
          data?.id
            ? "Chỉnh sửa thông tin của chương trình"
            : "Thêm Chương Trình"
=======
    <>
      <ModalForm
        title={
          data?.id ? "Chỉnh sửa thông tin chương trình" : "Thêm chương trình"
>>>>>>> c4f6ccf4a6e57688c3239a0cf32a3c5591b33428
        }
        initialValues={data}
        modalProps={{
          destroyOnClose: true,
        }}
        open={openModal}
        onFinish={async (values) => {
          if (data?.id) {
<<<<<<< HEAD
            await handleUpdateAdmission(values);
          } else {
            await handleCreateAdmission(values);
=======
            handleUpdateAdmission(values);
          } else {
            handleCreateAdmission(values);
>>>>>>> c4f6ccf4a6e57688c3239a0cf32a3c5591b33428
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
<<<<<<< HEAD
            placeholder="Tiêu đề chương trình"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập tên chương trình",
              },
            ]}
          />

          <ProFormText
            width="md"
            name="program"
            label="Chương trình đào tạo"
            placeholder="Chương trình đào tạo"
=======
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
>>>>>>> c4f6ccf4a6e57688c3239a0cf32a3c5591b33428
            rules={[
              {
                required: true,
                message: "Vui lòng nhập nội dung chương trình",
              },
            ]}
<<<<<<< HEAD
          />

          <ProFormText
            width="md"
            name="description"
            label="Mô tả"
            placeholder="Mô tả"
          />

          <ProFormUploadButton
            name="image"
            label="Upload Ảnh"
            rules={[
              {
                required: true,
                message: "Vui lòng upload ảnh",
              },
            ]}
            title="Click to upload"
            fileList={listFile}
            fieldProps={{
              listType: "picture-card",
              customRequest: handleUpload,
              multiple: false,
              onRemove: () => {
                setListFile([]);
                setFieldFile("");
              },
            }}
            transform={() => ({
              image: fieldFile || "",
            })}
          />

          <ProFormText
            width="md"
            name="linkRegister"
            label="Link đăng ký"
            placeholder="Link đăng ký"
          />

          <ProForm.Item
            name="admissionForm"
            label="Nội dung của chương trình"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập nội dung của chương trình",
              },
            ]}
          >
            <Editor
              initialValues={data?.admissionForm}
              onChange={(event, editor) => {
                const content = editor.getData();
                formRef?.current?.setFieldsValue({
                  admissionForm: content,
=======
          >
           <Editor
              initialValues={data?.content}
              onChange={(event, editor) => {
                formRef?.current?.setFieldsValue({
                  content: editor.getData(),
>>>>>>> c4f6ccf4a6e57688c3239a0cf32a3c5591b33428
                });
              }}
            />
          </ProForm.Item>
<<<<<<< HEAD

=======
          
>>>>>>> c4f6ccf4a6e57688c3239a0cf32a3c5591b33428
          <ProFormSwitch
            name="status"
            label="Trạng thái hoạt động"
            checkedChildren="Hoạt động"
            unCheckedChildren="Không hoạt động"
            initialValue={data?.status ?? true}
<<<<<<< HEAD
            fieldProps={{
              defaultChecked: data?.status ?? true,
            }}
          />
        </ProForm.Group>
      </ModalForm>
    </App>
=======
          />
        </ProForm.Group>
      </ModalForm>
    </>
>>>>>>> c4f6ccf4a6e57688c3239a0cf32a3c5591b33428
  );
}

export default AddEditAdmission;
