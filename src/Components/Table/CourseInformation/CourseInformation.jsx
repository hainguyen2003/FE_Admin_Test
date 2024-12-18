import {
  CloseOutlined,
  DeleteOutlined,
  DownloadOutlined,
  EditOutlined,
  FilterOutlined,
  SolutionOutlined,
} from "@ant-design/icons";
import { PageContainer } from "@ant-design/pro-components";
import { Button, Drawer, Input, Modal, Popover, Space, Table } from "antd";
import React, { useEffect, useState } from "react";
import {
  delAllConsultingRegister1,
  deleteConsultingRegister1,
  filterConsultingRegister1,
  getListConsultingRegister1,
} from "../../../Services/lead";

import { useNavigate } from "react-router-dom";
import { utils, writeFileXLSX } from "xlsx";
import EditConsultingRegister1 from "../../AddEdit/EditCourseInformation/EditCourseInformation";
import DetailConsultingRegister1 from "../../Details/CourseInformation/CourseInformation";

function ConsultingRegister1(props) {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [currentCR, setCurrentCR] = useState({});
  const [openDrawer, setOpenDrawer] = useState();
  const [loading, setLoading] = useState(true);
  const [openModal, setOpenModal] = useState();
  const [clicked, setClicked] = useState(false);
  const [searchData, setSearchData] = useState();
  const [data, setData] = useState([]);
  const [total, setTotal] = useState();

  const navigate = useNavigate();
  const { confirm } = Modal;

  const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const showhowConfirm = () => {
    confirm({
      title: "Xoá thí sinh ",
      content:
        "Việc này sẽ xóa thí sinh được chọn. Bạn có chắc chắn muốn xóa?",
      onOk: handleDeleteAll,
      onCancel() {
        console.log("Cancel");
      },
    });
  };

  const hide = () => {
    setClicked(false);
  };

  const handleClick = (open) => {
    setClicked(open);
  };

  const renameColumn = data.map((item) => ({
    "Tên thí sinh": item.name,
    "Số điện thoại": item.phone,
    Email: item.email,
    "Khóa học đăng kí": item.information,
    "Trạng thái ": item.status,
    "Ngày tạo": item.createdDate,
    "Ngày cập nhật": item.updateDate,
  }));

  const hanldeExportFile = () => {
    const ws = utils.json_to_sheet(renameColumn);
    const wb = utils.book_new();
    utils.book_append_sheet(wb, ws, "Thí sinh");
    writeFileXLSX(wb, "Danh sách thí sinh đăng ký khóa học.xlsx");
  };

  const handleGetCR = () => {
    getListConsultingRegister1().then((res) => {
      const data1 = res.data?.data?.items;
      const sortedData = data1.sort((a, b) => b.id - a.id);
      setData(sortedData);
      setTotal(res?.data?.data?.total);
    });
  };

  const handleDelCR = (id) => {
    deleteConsultingRegister1(id).then((res) => {
      if (res.status === 200) {
        handleGetCR();
      }
    });
  };
  const hasSelected = selectedRowKeys.length > 0;
  const handleDeleteAll = () => {
    delAllConsultingRegister1(selectedRowKeys)
      .then((res) => {
        if (res?.data?.success === true) {
          handleGetCR();
          setSelectedRowKeys([]);
        }
      })
      .catch((error) => {
        console.error("Lỗi xóa thí sinh", error);
      });
  };

  const handleSearch = (e) => {
    setSearchData(e.target.value);
  };

  const handleSearchConsulting = (values) => {
    filterConsultingRegister1({
      name: values,
    }).then((res) => {
      if (res.status === 200) {
        setData(res?.data?.data?.items);
      }
    });
  };

  const handleFilter = (values) => {
    filterConsultingRegister1(values).then((res) => {
      if (res?.status === 200) {
        setData(res?.data?.data?.items);
      }
    });
  };

  const columns = [
    {
      title: "Tên thí sinh",
      dataIndex: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Số điện thoại",
      dataIndex: "phone",
    },
    {
      title: "Địa chỉ",
      dataIndex: "address",
    },
    {
      title: "Nội dung đăng kí",
      dataIndex: "information",
    },
    {
      title: "Trạng thái ",
      dataIndex: "status",
    },
    {
      title: "Action",
      key: "action",
      render: (e, record, idx) => (
        <Space>
          <Button
            className="update"
            icon={<EditOutlined />}
            onClick={() => {
              setCurrentCR(record);
              setOpenModal(true);
            }}
          ></Button>
          <Button
            className="delete"
            icon={<DeleteOutlined />}
            onClick={() => {
              handleDelCR(record.id);
            }}
          ></Button>
          <Button
            className="detail"
            icon={<SolutionOutlined />}
            onClick={() => {
              setOpenDrawer(true);
              navigate(
                `/adminpage/courseRegister1/detailCourseRegister1/${record.id}`
              );
            }}
          ></Button>
        </Space>
      ),
    },
  ];

  useEffect(() => {
    handleGetCR();
    setLoading(false);
  }, []);
  return (
    <>
      <PageContainer
        title={`Thí sinh đăng kí khóa học:  ${total} thí sinh`}
        extra={[
          <Space>
            <Input.Search
              placeholder="Nhập tên thí sinh"
              onChange={handleSearch}
              value={searchData}
              defaultValue={""}
              onSearch={(values) => {
                handleSearchConsulting(values);
              }}
            />
            <Button
              icon={<DownloadOutlined />}
              onClick={hanldeExportFile}
              className="border-1677ff text-1677ff mr-[10px]"
            >
              Export Excel
            </Button>
            <Popover
              content={
                <filterConsultingRegister1
                  onSearch={(values) => {
                    handleFilter(values);
                  }}
                  hide={hide}
                />
              }
              trigger="click"
              open={clicked}
              onOpenChange={handleClick}
            >
              <Button className="border-1677ff text-1677ff">
                <FilterOutlined />
                Lọc
              </Button>
            </Popover>
          </Space>,
        ]}
      >
        <EditConsultingRegister1
          onSuccess={() => {
            handleGetCR();
            setOpenModal(false);
          }}
          openModal={openModal}
          onOpenChange={(open) => {
            if (!open) {
              setOpenModal(false);
              setCurrentCR({});
            }
          }}
          data={currentCR}
        />
        <Drawer
          title="Thông tin chi tiết thí sinh"
          width={500}
          open={openDrawer}
          onClose={() => {
            navigate("/adminpage/courseRegister1");
            setOpenDrawer(false);
          }}
        >
          <DetailConsultingRegister1 />
        </Drawer>
        <Table
          rowKey={"id"}
          rowSelection={rowSelection}
          columns={columns}
          dataSource={data}
          size="middle"
          pagination={{
            pageSize: 7,
          }}
          loading={loading}
        />
        <div
          className="absolute bottom-6"
          style={{ display: hasSelected ? "block" : "none" }}
        >
          <>Đã chọn {selectedRowKeys.length}</>
          <Button
            className="bg-white ml-2.5 py-1 px-2.5"
            onClick={() => {
              showhowConfirm();
            }}
            disabled={selectedRowKeys.length === 0}
          >
            <CloseOutlined />
            Xoá
          </Button>
        </div>
      </PageContainer>
    </>
  );
}

export default ConsultingRegister1;
