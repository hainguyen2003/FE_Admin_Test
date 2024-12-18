import React from "react";
import {
  ProForm,
  ProFormDatePicker,
  ProFormText,
  ProFormSelect,
} from "@ant-design/pro-components";
import { Button, Form } from "antd";
import moment from "moment";
import { useForm } from "antd/lib/form/Form";

function FilterAdmissions({ onSearch, hide }) {
  const [form] = useForm();

  const handleFilterAdmissions = (values) => {
    const filterValues = {
      ...values,
      dateFrom: values.dateFrom
        ? moment(values.dateFrom).format("YYYY-MM-DD")
        : undefined,
      dateTo: values.dateTo
        ? moment(values.dateTo).format("YYYY-MM-DD")
        : undefined,
    };
    onSearch(filterValues); // Truyền giá trị lọc lên component cha
    hide(); // Ẩn modal hoặc form lọc
    form.resetFields(); // Reset các trường trong form
  };

  return (
    <>
      <ProForm submitter={false} onFinish={handleFilterAdmissions} form={form}>
        {/* Lọc theo tên chương trình */}
        <ProFormText
          width="md"
          name="title"
          label="Tên chương trình"
          placeholder="Nhập tên chương trình"
        />

        {/* Lọc theo ngày tạo */}
        <h2>Lọc theo ngày tạo - cập nhật:</h2>
        <ProFormDatePicker
          label="Ngày bắt đầu"
          width="md"
          name="dateFrom"
          fieldProps={{
            format: "DD/MM/YYYY",
          }}
        />
        <ProFormDatePicker
          label="Ngày kết thúc"
          width="md"
          name="dateTo"
          fieldProps={{
            format: "DD/MM/YYYY",
          }}
        />

        {/* Lọc theo trạng thái */}
        <ProFormSelect
          width="md"
          name="status"
          label="Trạng thái"
          placeholder="Chọn trạng thái"
          options={[
            { label: "Hoạt động", value: true },
            { label: "Không hoạt động", value: false },
          ]}
        />

        {/* Nút hành động */}
        <Form.Item>
          <Button
            style={{ border: "1px solid #d9d9d9" }}
            type="primary"
            htmlType="submit"
          >
            Lọc
          </Button>{" "}
          <Button
            style={{
              border: "1px solid #d9d9d9",
              backgroundColor: "#fff",
              color: "black",
            }}
            type="default"
            onClick={() => {
              form.resetFields(); // Reset tất cả các trường
              hide(); // Đóng form
            }}
          >
            Hủy
          </Button>
        </Form.Item>
      </ProForm>
    </>
  );
}

export default FilterAdmissions;
