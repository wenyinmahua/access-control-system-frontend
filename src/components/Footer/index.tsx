import { DefaultFooter } from '@ant-design/pro-components';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <DefaultFooter
      style={{
        background: 'none',
      }}
      links={[
        {
          key: '人脸识别门禁系统',
          title: '人脸识别门禁系统',
          href: '/welcome',
          blankTarget: true,
        },
      ]}
    />
  );
};

export default Footer;
