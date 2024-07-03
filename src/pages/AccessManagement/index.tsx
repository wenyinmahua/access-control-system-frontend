import {ProColumns} from '@ant-design/pro-components';
import {
  EditableProTable,
} from '@ant-design/pro-components';
import {Form, message} from 'antd';
import React, { useState } from 'react';
// @ts-ignore
import {deleteAccessByIdUsingPost, getPageAccessUsingPost, updateAccessUsingPost,} from "@/services/access_control_system/adminController";

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};


export default () => {
  const [editableKeys, setEditableRowKeys] = useState<React.Key[]>([]);
  const [dataSource, setDataSource] = useState<readonly API.Access[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [form] = Form.useForm();
  const columns: ProColumns<API.Access>[] = [

    {
      title: '出入表id',
      dataIndex: 'id',
      valueType: 'text',
    },
    {
      title: '用户姓名',
      dataIndex: 'username',
      valueType: 'text',
    },

    {
      title: '签到状态',
      dataIndex: 'checkInStatus',
      valueEnum: {
        0:{text:'未签到',status: 'Default'},
        1:{text:'已签到', status: 'Success'},
      }
    },
    {
      title: '签到时间',
      dataIndex: 'checkInTime',
      valueType: 'dateTime'
    },
    {
      title: '签到图片',
      dataIndex: 'checkInImage',
      valueType: 'image'
    },

    {
      title: '签退状态',
      dataIndex: 'checkOutStatus',
      valueEnum: {
        0:{text:'未签退',status: 'Default'},
        1:{text:'已签退',status: 'Success'},
      }
    },
    {
      title: '签退时间',
      dataIndex: 'checkOutTime',
      valueType: 'dateTime'
    },
    {
      title: '签退图片',
      dataIndex: 'checkOutImage',
      valueType: 'image'
    },

    {
      title: '操作',
      valueType: 'option',
      width: 250,
      fixed: 'right',
      render: (text, record, _, action) => [
          <a
            key="edit"
            onClick={() => {
              // @ts-ignore
              action?.startEditable?.(record.id);
              // action?.startEditable?.(record.id);
            }}
          >
            编辑
          </a>,

      ],
    },
  ];
  let accessList: API.Access[] | undefined = [] ;
  return (
    <>
      <EditableProTable<API.AccessQueryDTO>
        columns={columns}
        request={async (params ) => {
          // 表单搜索项会从 params 传入，传递给后端接口。
          accessList =  await getPageAccessUsingPost(params).then((res: { data: { total: React.SetStateAction<number>; records: any; }; })=>{
            console.log(res)
            setTotal(res.data.total)
            return res.data.records;
          })
          console.log(accessList)
          return Promise.resolve({
            data: accessList,
            success: true,
            // total: total,
          });
        }}
        rowKey="id"
        scroll={{
          x: 960,
        }}
        headerTitle="用户管理"
        // 关闭默认的新建按钮
        recordCreatorProps={false}
        value={dataSource}
        onChange={setDataSource}
        editable={{
          type: 'multiple',
          form,
          editableKeys,
          onSave: async (row, dom) => {
            await waitTime(500)
            await updateAccessUsingPost(dom).then((res: { data: any; })=>{
              if (res.data){
                message.success("修改成功")
              }
            })
          },
          onChange: setEditableRowKeys,
          onDelete: async (row)=>{
            await waitTime(500)
            await deleteAccessByIdUsingPost({
              id:row
            }).then((res: { data: any; })=>{
              if(res.data){
                message.success("删除成功")
              }
            });
          },
        }}
        pagination={{
          showQuickJumper: true,
          pageSize: 5,
          total:total,
        }}
        search={{
          layout: 'vertical',
          defaultCollapsed: true,
        }}
      />
    </>
  );
};
