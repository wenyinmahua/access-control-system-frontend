import {ProColumns} from '@ant-design/pro-components';
import {
  EditableProTable,
} from '@ant-design/pro-components';
import {Form, message} from 'antd';
import React, { useState } from 'react';
import {
  deleteUserUsingPost,
  getPageUserUsingPost,
  updateUserUsingPost

} from "@/services/access_control_system/adminController";

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};


export default () => {
  const [editableKeys, setEditableRowKeys] = useState<React.Key[]>([]);
  const [dataSource, setDataSource] = useState<readonly API.UserVO[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [form] = Form.useForm();
  const columns: ProColumns<API.UserVO>[] = [

    {
      title: '用户id',
      dataIndex: 'id',
      valueType: 'text',
    },
    {
      title: '用户姓名',
      dataIndex: 'username',
      valueType: 'text',
    },
    {
      title: '用户年龄',
      dataIndex: 'age',
    },
    {
      title: '用户性别',
      dataIndex: 'gender',
      valueEnum: {
        0:{text:'男'},
        1:{text:'女'}
      }
    },
    {
      title: '用户岗位',
      dataIndex: 'position',
      valueType: 'text',
    },
    {
      title: '修改时间',
      dataIndex: 'updateTime',
      valueType: 'date',
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
  let userList: API.UserVO[] | undefined = [] ;
  return (
    <>
      <EditableProTable<API.UserQueryRequest>
        columns={columns}
        request={async (params ) => {
          // 表单搜索项会从 params 传入，传递给后端接口。
          userList =  await getPageUserUsingPost(params).then(res=>{
            console.log(res)
            // @ts-ignore
            setTotal(res.data.total)
            // @ts-ignore
            return res.data.records;
          })
          console.log(userList)
          return Promise.resolve({
            data: userList,
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
            await updateUserUsingPost(dom).then(res=>{
              if (res.data){
                message.success("修改成功")
              }
            })
          },
          onChange: setEditableRowKeys,
          onDelete: async (row)=>{
            await waitTime(500)
            await deleteUserUsingPost({
              // @ts-ignore
              id:row
            }).then(res=>{
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
