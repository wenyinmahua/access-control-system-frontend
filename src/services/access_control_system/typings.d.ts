declare namespace API {
  type Access = {
    checkInImage?: string;
    checkInStatus?: number;
    checkInTime?: string;
    checkOutImage?: string;
    checkOutStatus?: number;
    checkOutTime?: string;
    flag?: number;
    id?: number;
    userId?: number;
  };

  type AccessQueryDTO = {
    checkInImage?: string;
    checkInStatus?: number;
    checkInTime?: string;
    checkOutImage?: string;
    checkOutStatus?: number;
    checkOutTime?: string;
    current?: number;
    flag?: number;
    id?: number;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
    username?: string;
  };

  type AccessVO = {
    checkInImage?: string;
    checkInStatus?: number;
    checkInTime?: string;
    checkOutImage?: string;
    checkOutStatus?: number;
    checkOutTime?: string;
    flag?: number;
    id?: number;
    username?: string;
  };

  type Admin = {
    age?: number;
    createTime?: string;
    gender?: number;
    id?: number;
    position?: string;
    updateTime?: string;
    userAccount?: string;
    userPassword?: string;
    username?: string;
  };

  type AdminLoginDTO = {
    userAccount?: string;
    userPassword?: string;
  };

  type AdminRegisterDTO = {
    checkPassword?: string;
    userAccount?: string;
    userPassword?: string;
  };

  type BaseResponseAdmin_ = {
    code?: number;
    data?: Admin;
    description?: string;
    message?: string;
  };

  type BaseResponseBoolean_ = {
    code?: number;
    data?: boolean;
    description?: string;
    message?: string;
  };

  type BaseResponseListUserVO_ = {
    code?: number;
    data?: UserVO[];
    description?: string;
    message?: string;
  };

  type BaseResponseLogVO_ = {
    code?: number;
    data?: LogVO;
    description?: string;
    message?: string;
  };

  type BaseResponseLong_ = {
    code?: number;
    data?: number;
    description?: string;
    message?: string;
  };

  type BaseResponsePageAccessVO_ = {
    code?: number;
    data?: PageAccessVO_;
    description?: string;
    message?: string;
  };

  type BaseResponsePageExceptionRecord_ = {
    code?: number;
    data?: PageExceptionRecord_;
    description?: string;
    message?: string;
  };

  type BaseResponsePageUser_ = {
    code?: number;
    data?: PageUser_;
    description?: string;
    message?: string;
  };

  type BaseResponsePageUserVO_ = {
    code?: number;
    data?: PageUserVO_;
    description?: string;
    message?: string;
  };

  type BaseResponseUserVO_ = {
    code?: number;
    data?: UserVO;
    description?: string;
    message?: string;
  };

  type DateQueryDTO = {
    thisDay?: string;
  };

  type DeleteRequest = {
    id?: number;
  };

  type ExceptionRecord = {
    id?: number;
    isAlarm?: number;
    recognitionImage?: string;
    recognitionTime?: string;
  };

  type ExceptionRecordQueryDTO = {
    current?: number;
    id?: number;
    isAlarm?: number;
    pageSize?: number;
    recognitionImage?: string;
    recognitionTime?: string;
    sortField?: string;
    sortOrder?: string;
  };

  type getPageUserUsingPOSTParams = {
    age?: number;
    createTime?: string;
    current?: number;
    gender?: number;
    id?: number;
    pageSize?: number;
    position?: string;
    sortField?: string;
    sortOrder?: string;
    updateTime?: string;
    username?: string;
  };

  type getUserByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type listUserByPageUsingGETParams = {
    createTime?: string;
    current?: number;
    id?: number;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
    updateTime?: string;
    userAccount?: string;
    userName?: string;
    userRole?: number;
  };

  type listUserUsingGETParams = {
    createTime?: string;
    current?: number;
    id?: number;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
    updateTime?: string;
    userAccount?: string;
    userName?: string;
    userRole?: number;
  };

  type LogVO = {
    abnormalNum?: number;
    checkInNum?: Record<string, any>;
    checkOutNum?: Record<string, any>;
    normalAccessNum?: number;
  };

  type OrderItem = {
    asc?: boolean;
    column?: string;
  };

  type PageAccessVO_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: AccessVO[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageExceptionRecord_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: ExceptionRecord[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageUser_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: User[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageUserVO_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: UserVO[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type User = {
    age?: number;
    createTime?: string;
    gender?: number;
    id?: number;
    position?: string;
    updateTime?: string;
    username?: string;
  };

  type UserDemoAddRequest = {
    userAccount?: string;
    userName?: string;
    userPassword?: string;
    userRole?: number;
  };

  type UserDemoLoginRequest = {
    userAccount?: string;
    userPassword?: string;
  };

  type UserDemoRegisterRequest = {
    checkPassword?: string;
    userAccount?: string;
    userPassword?: string;
  };

  type UserDemoUpdateRequest = {
    id?: number;
    userAccount?: string;
    userName?: string;
    userPassword?: string;
    userRole?: number;
  };

  type UserVO = {
    age?: number;
    createTime?: string;
    gender?: number;
    id?: number;
    position?: string;
    updateTime?: string;
    username?: string;
  };
}
