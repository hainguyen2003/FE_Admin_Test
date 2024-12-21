import { PageContainer } from "@ant-design/pro-components";
import { Button, Drawer, Input, Modal, Popover, Space, Table, Tag } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  CloseOutlined,
  DeleteOutlined,
  EditOutlined,
  FilterOutlined,
  SolutionOutlined,
} from "@ant-design/icons";
import AddEditAdmission from "../../AddEdit/AddEditAdmission/AddEditAdmission";
import {
  delAllAdmissions,
  deleteAdmission,
  filterAdmissions,
  getListAdmissions,
} from "../../../Services/lead";
<<<<<<< HEAD
import FilterAdmissions from "../../FormFilter/FilterAdmission";
import DetailAdmission from "../../Details/DetailAdmission/DetailAdmission";


function TableAdmissions(props) {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [loading, setLoading] = useState(true);
  const [dataAdmission, setDataAdmission] = useState([]);
  const [openModal, setOpenModal] = useState();
  const [currentAdmission, setCurrentAdmission] = useState({});
  const [openDrawer, setOpenDrawer] = useState();
  const [searchData, setSearchData] = useState();
=======
import DetailAdmission from "../../Details/DetailAdmission/DetailAdmission";
import FilterAdmissions from "../../FormFilter/FilterAdmission";

function TableAdmissions() {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [loading, setLoading] = useState(true);
  const [dataAdmissions, setDataAdmissions] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [currentAdmission, setCurrentAdmission] = useState({});
  const [openDrawer, setOpenDrawer] = useState(false);
  const [searchData, setSearchData] = useState("");
>>>>>>> c4f6ccf4a6e57688c3239a0cf32a3c5591b33428
  const [clicked, setClicked] = useState(false);
  const navigate = useNavigate();
  const { confirm } = Modal;

<<<<<<< HEAD
=======
  // const rowSelection = {
  //   selectedRowKeys,
  //   onChange: (newSelectedRowKeys) => setSelectedRowKeys(newSelectedRowKeys),
  // };

>>>>>>> c4f6ccf4a6e57688c3239a0cf32a3c5591b33428
  const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
<<<<<<< HEAD

  const showhowConfirm = () => {
    confirm({
      title: "Xoá chương trình ",
      content: "Việc này sẽ xóa chương trình được chọn. Bạn có chắc chắn muốn xóa?",
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

  // Hàm lấy thông tin Tin Tức
  const handleGetAdmission = () => {
    setLoading(true);
    getListAdmissions().then((res) => {
      setDataAdmission(res?.data?.data?.items);
    });
  };

=======
  

  // const handleGetAdmissions = () => {
  //   setLoading(true);
  //   getListAdmissions()
  //     .then((res) => {
  //       setDataAdmissions(res?.data?.data?.items || []);
  //       setLoading(false);
  //     })
  //     .catch(() => setLoading(false));
  // };

  // const handleDelAdmission = (id) => {
  //   confirm({
  //     title: "Xác nhận xóa",
  //     content: "Bạn có chắc chắn muốn xóa chương trình này?",
  //     onOk: () => {
  //       deleteAdmission(id).then((res) => {
  //         if (res.status === 200) handleGetAdmissions();
  //       });
  //     },
  //   });
  // };

  // const handleDeleteAll = () => {
  //   confirm({
  //     title: "Xóa các mục đã chọn",
  //     content: "Bạn có chắc chắn muốn xóa các chương trình đã chọn?",
  //     onOk: () => {
  //       delAllAdmissions(selectedRowKeys)
  //         .then((res) => {
  //           if (res?.data?.success === true) {
  //             handleGetAdmissions();
  //             setSelectedRowKeys([]);
  //           }
  //         })
  //         .catch((error) => console.error("Lỗi xóa chương trình", error));
  //     },
  //   });
  // };

  // const handleSearch = (value) => {
  //   filterAdmissions({ title: value }).then((res) => {
  //     if (res?.status === 200) {
  //       setDataAdmissions(res?.data?.data?.items || []);
  //     }
  //   });
  // };

  // const handleFilter = (values) => {
  //   filterAdmissions(values).then((res) => {
  //     if (res?.status === 200) {
  //       setDataAdmissions(res?.data?.data?.items || []);
  //     }
  //   });
  // };

  // useEffect(() => {
  //   handleGetAdmissions();
  // }, []);

  // const columns = [
  //   {
  //     title: "Tên chương trình",
  //     dataIndex: "title",
  //   },
  //   {
  //     title: "Ảnh",
  //     dataIndex: "image",
  //     render: (imageURL) => (
  //       <img src={imageURL} alt="Program" style={{ width: 150, height: 150 }} />
  //     ),
  //   },
  //   {
  //     title: "Mô tả",
  //     dataIndex: "description",
  //     ellipsis: true,
  //   },
  //   {
  //     title: "Trạng thái",
  //     dataIndex: "status",
  //     render: (status) =>
  //       status ? (
  //         <Tag color="green">Hoạt động</Tag>
  //       ) : (
  //         <Tag color="red">Không hoạt động</Tag>
  //       ),
  //   },
  //   {
  //     title: "Ngày tạo",
  //     dataIndex: "createdDate",
  //   },
  //   {
  //     title: "Ngày cập nhật",
  //     dataIndex: "updateDate",
  //   },
  //   {
  //     title: "Hành động",
  //     key: "action",
  //     render: (_, record) => (
  //       <Space>
  //         <Button
  //           icon={<EditOutlined />}
  //           onClick={() => {
  //             setCurrentAdmission(record);
  //             setOpenModal(true);
  //           }}
  //         />
  //         <Button
  //           icon={<DeleteOutlined />}
  //           onClick={() => handleDelAdmission(record.id)}
  //         />
  //         <Button
  //           icon={<SolutionOutlined />}
  //           onClick={() => {
  //             setOpenDrawer(true);
  //             navigate(`/adminpage/admissions/detailadmission/${record.id}`);
  //           }}
  //         />
  //       </Space>
  //     ),
  //   },
  // ];

  // return (
  //   <PageContainer
  //     title="Danh sách chương trình"
  //     extra={[
  //       <Space key="controls">
  //         <Button
  //           type="primary"
  //           onClick={() => {
  //             setOpenModal(true);
  //             setCurrentAdmission({});
  //           }}
  //         >
  //           + Thêm chương trình
  //         </Button>
  //         <Input.Search
  //           placeholder="Nhập tên chương trình"
  //           onSearch={handleSearch}
  //         />
  //         <Popover
  //           content={
  //             <FilterAdmissions
  //               onSearch={handleFilter}
  //               hide={() => setClicked(false)}
  //             />
  //           }
  //           trigger="click"
  //           open={clicked}
  //           onOpenChange={setClicked}
  //         >
  //           <Button icon={<FilterOutlined />}>Lọc</Button>
  //         </Popover>
  //       </Space>,
  //     ]}
  //   >
  //     <Table
  //       rowKey="id"
  //       rowSelection={rowSelection}
  //       columns={columns}
  //       dataSource={dataAdmissions}
  //       loading={loading}
  //       pagination={{ pageSize: 5 }}
  //     />
  //     <AddEditAdmission
  //       openModal={openModal}
  //       data={currentAdmission}
  //       onSuccess={() => {
  //         setOpenModal(false);
  //         handleGetAdmissions();
  //       }}
  //       onOpenChange={(open) => setOpenModal(open)}
  //     />
  //     <Drawer
  //       title="Chi tiết chương trình"
  //       width={600}
  //       open={openDrawer}
  //       onClose={() => {
  //         navigate("/adminpage/admissions");
  //         setOpenDrawer(false);
  //       }}
  //     >
  //       <DetailAdmission />
  //     </Drawer>
  //     {selectedRowKeys.length > 0 && (
  //       <div className="absolute bottom-6">
  //         <span>Đã chọn {selectedRowKeys.length}</span>
  //         <Button onClick={handleDeleteAll} icon={<CloseOutlined />} danger>
  //           Xóa tất cả
  //         </Button>
  //       </div>
  //     )}
  //   </PageContainer>
  // );

   const showhowConfirm = () => {
     confirm({
       title: "Xoá chương trình ",
       content: "Việc này sẽ xóa chương trình  được chọn. Bạn có chắc chắn muốn xóa?",
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
   // Hàm lấy thông tin chương trình
  const handleGetAdmissions= () => {
    setLoading(true);
    getListAdmissions().then((res) => {
      setDataAdmissions(res?.data?.data?.items);
    });
  };
>>>>>>> c4f6ccf4a6e57688c3239a0cf32a3c5591b33428
  // delete each admission
  const handleDelAdmission = (id) => {
    deleteAdmission(id).then((res) => {
      if (res.status === 200) {
<<<<<<< HEAD
        handleGetAdmission();
=======
        handleGetAdmissions();
>>>>>>> c4f6ccf4a6e57688c3239a0cf32a3c5591b33428
      }
    });
  };
  const hasSelected = selectedRowKeys.length > 0;
  const handleDeleteAll = () => {
    delAllAdmissions(selectedRowKeys)
      .then((res) => {
        if (res?.data?.success === true) {
<<<<<<< HEAD
          handleGetAdmission();
=======
          handleGetAdmissions();
>>>>>>> c4f6ccf4a6e57688c3239a0cf32a3c5591b33428
          setSelectedRowKeys([]);
        }
      })
      .catch((error) => {
        console.error("Lỗi xóa chương trình", error);
      });
  };
<<<<<<< HEAD

=======
>>>>>>> c4f6ccf4a6e57688c3239a0cf32a3c5591b33428
  const handleSearch = (e) => {
    setSearchData(e.target.value);
  };

  const handleSearchAdmission = (values) => {
    filterAdmissions({
      username: values,
<<<<<<< HEAD
      name: values,
    }).then((res) => {
      if (res.status === 200) {
        setDataAdmission(res?.data?.data?.items);
      }
    });
  };

=======
      title: values,
    }).then((res) => {
      if (res.status === 200) {
        setDataAdmissions(res?.data?.data?.items);
      }
    });
  };
  
>>>>>>> c4f6ccf4a6e57688c3239a0cf32a3c5591b33428
  // Hàm lọc người dùng
  const handleFilter = (values) => {
    console.log("values:: ", values);
    filterAdmissions(values).then((res) => {
      console.log("res", res);
      if (res?.status === 200) {
<<<<<<< HEAD
        setDataAdmission(res?.data?.data?.items);
      }
    });
  };

  useEffect(() => {
    handleGetAdmission();
    setLoading(false);
  }, []);

  const columns = [
    {
      title: "Tiêu đề chương trình",
      dataIndex: "title",
    },
    {
      title: "Chương trình đào tạo",
      dataIndex: "program",
    },
    {
      title: "Mô tả nội dung",
      dataIndex: "description",
      ellipsis: true,
    },

    {
      title: "Ảnh",
      dataIndex: "image",
      render: (imageURL) => (
        <img
          src={imageURL}
          alt={imageURL}
          style={{ width: "150px", height: "150px" }}
        />
      ),
    },
    {
      title: "Link đăng ký",
      dataIndex: "linkRegister",
      ellipsis: true,
    },
    {
      title: "Nội dung",
      dataIndex: "admissionForm",
      ellipsis: true,
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      render: (status) =>
        status ? (
          <Tag color="green">Hoạt động</Tag>
        ) : (
          <Tag color="red">Không hoạt động</Tag>
        ),
    },
    {
      title: "Ngày tạo",
      dataIndex: "createdDate",
    },
    {
      title: "Ngày cập nhật",
      dataIndex: "updateDate",
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
              setCurrentAdmission(record);
              setOpenModal(true);
            }}
          ></Button>
          <Button
            className="delete"
            icon={<DeleteOutlined />}
            onClick={() => {
              handleDelAdmission(record.id);
            }}
          ></Button>
          <Button
            className="detail"
            icon={<SolutionOutlined />}
            onClick={() => {
              setOpenDrawer(true);
              navigate(`/adminpage/admissions/detailadmission/${record.id}`);
            }}
          ></Button>
        </Space>
      ),
    },
  ];
  return (
    <div>
      <PageContainer
        title="Chương trình"
        extra={[
          <Space>
            <Button
              className="bg-1677ff text-white hover:bg-white"
              onClick={() => {
                setOpenModal(true);
              }}
            >
              + Thêm chương trình
            </Button>
            ,
            <Input.Search
              placeholder="Nhập tiêu đề chương trình"
              onChange={handleSearch}
              value={searchData}
              defaultValue={null}
              onSearch={(values) => {
                handleSearchAdmission(values);
              }}
            />
            <Popover
              content={
                <FilterAdmissions
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
        {/* Hàm tạo + Edit */}
        <AddEditAdmission
          onSuccess={() => {
            handleGetAdmission();
            setOpenModal(false);
          }}
          openModal={openModal}
          onOpenChange={(open) => {
            if (!open) {
              setOpenModal(false);
              setCurrentAdmission({});
            }
          }}
          data={currentAdmission}
        />
        <Table
          rowKey={"id"}
          rowSelection={rowSelection}
          columns={columns}
          dataSource={dataAdmission}
          size="middle"
          pagination={{
            pageSize: 3,
          }}
          scroll={{
            y: 413,
          }}
          // loading={loading}
        />
        <Drawer
          title="Thông tin chi tiết chương trình "
          width={1000}
          open={openDrawer}
          onClose={() => {
            navigate("/adminpage/admissions");
            setOpenDrawer(false);
          }}
        >
          <DetailAdmission />
        </Drawer>
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
    </div>
  );
=======
        setDataAdmissions(res?.data?.data?.items);
      }
    });
  };
    useEffect(() => {
      handleGetAdmissions();
      setLoading(false);
    }, []);
     const columns = [
       {
         title: "Tên Chương trình ",
         dataIndex: "title",
       },
       {
         title: "Ảnh",
         dataIndex: "image",
         render: (imageURL) => (
           <img
             src={imageURL}
             alt={imageURL}
             style={{ width: "150px", height: "150px" }}
           />
         ),
       },
       {
         title: "Chương trình",
         dataIndex: "program",
         ellipsis: true,
       },
       {
         title: "Mô tả",
         dataIndex: "description",
         ellipsis: true,
       },
       {
         title: "Trạng thái",
         dataIndex: "status",
         render: (status) =>
           status ? (
             <Tag color="green">Hoạt động</Tag>
           ) : (
             <Tag color="red">Không hoạt động</Tag>
           ),
       },

       {
         title: "Ngày tạo",
         dataIndex: "createdDate",
       },
       {
         title: "Ngày cập nhật",
         dataIndex: "updateDate",
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
                 setCurrentAdmission(record);
                 setOpenModal(true);
               }}
             ></Button>
             <Button
               className="delete"
               icon={<DeleteOutlined />}
               onClick={() => {
                 handleDelAdmission(record.id);
               }}
             ></Button>
             <Button
               className="detail"
               icon={<SolutionOutlined />}
               onClick={() => {
                 setOpenDrawer(true);
                 navigate(`/adminpage/admissions/detailadmission/${record.id}`);
               }}
             ></Button>
           </Space>
         ),
       },
     ];
      return (
        <div>
          <PageContainer
            title="Danh sách chương trình"
            extra={[
              <Space>
                <Button
                  className="bg-1677ff text-white hover:bg-white"
                  onClick={() => {
                    setOpenModal(true);
                  }}
                >
                  + Thêm chương trình
                </Button>
                ,
                <Input.Search
                  placeholder="Nhập tên chương trình"
                  onChange={handleSearch}
                  value={searchData}
                  defaultValue={null}
                  onSearch={(values) => {
                    handleSearchAdmission(values);
                  }}
                />
                <Popover
                  content={
                    <FilterAdmissions
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
            {/* Hàm tạo + Edit */}
            <AddEditAdmission
              onSuccess={() => {
                handleGetAdmissions();
                setOpenModal(false);
              }}
              openModal={openModal}
              onOpenChange={(open) => {
                if (!open) {
                  setOpenModal(false);
                  setCurrentAdmission({});
                }
              }}
              data={currentAdmission}
            />
            <Table
              rowKey={"id"}
              rowSelection={rowSelection}
              columns={columns}
              dataSource={dataAdmissions}
              size="middle"
              pagination={{
                pageSize: 5,
              }}
              scroll={{
                y: 413,
              }}
              // loading={loading}
            />
            <Drawer
              title="Thông tin chi tiết chương trình "
              width={600}
              open={openDrawer}
              onClose={() => {
                navigate("/adminpage/admissions");
                setOpenDrawer(false);
              }}
            >
              <DetailAdmission />
            </Drawer>
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
        </div>
      );




>>>>>>> c4f6ccf4a6e57688c3239a0cf32a3c5591b33428
}

export default TableAdmissions;
