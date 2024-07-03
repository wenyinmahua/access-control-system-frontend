import {ProColumns} from '@ant-design/pro-components';
import {
  EditableProTable,
} from '@ant-design/pro-components';
import {Form, message} from 'antd';
import React, { useState } from 'react';
// @ts-ignore
import {deleteExceptionRecordUsingPost,getPageExceptionRecordUsingPost,updateExceptionRecordUsingPost,} from "@/services/access_control_system/adminController";

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
      title: '异常记录id',
      dataIndex: 'id',
      valueType: 'text',
    },
    {
      title: '识别时间',
      dataIndex: 'recognitionTime',
      valueType: 'dateTime',
    },
    {
      title: '识别图片',
      dataIndex: 'recognitionImage',
      valueType: 'image'
    },

    {
      title: '异常状态',
      dataIndex: 'isAlarm',
      valueEnum: {
        1:{text:'报警',status: 'Warning'},
        2:{text:'记录', status: 'Default'},
      }
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
  let accessList: API.ExceptionRecord[] | undefined = [] ;
  return (
    <>
      <EditableProTable<API.ExceptionRecordQueryDTO>
        columns={columns}
        request={async (params ) => {
          // 表单搜索项会从 params 传入，传递给后端接口。
          accessList =  await getPageExceptionRecordUsingPost(params).then((res: { data: { total: React.SetStateAction<number>; records: any; }; })=>{
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
            await updateExceptionRecordUsingPost(dom).then((res: { data: any; })=>{
              if (res.data){
                message.success("修改成功")
              }
            })
          },
          onChange: setEditableRowKeys,
          onDelete: async (row)=>{
            await waitTime(500)
            await deleteExceptionRecordUsingPost({
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
