declare namespace API {
  type AdminUserRegisterRequest = {
    userAccount?: string;
    username?: string;
    stuId?: string;
  };

  type BaseResponse = {
    code?: number;
    data?: Record<string, any>;
    message?: string;
    description?: string;
  };

  type BaseResponseBoolean = {
    code?: number;
    data?: boolean;
    message?: string;
    description?: string;
  };

  type BaseResponseInteger = {
    code?: number;
    data?: number;
    message?: string;
    description?: string;
  };

  type BaseResponseIPageUser = {
    code?: number;
    data?: IPageUser;
    message?: string;
    description?: string;
  };

  type BaseResponseListUser = {
    code?: number;
    data?: User[];
    message?: string;
    description?: string;
  };

  type BaseResponseListUserVO = {
    code?: number;
    data?: UserVO[];
    message?: string;
    description?: string;
  };

  type BaseResponseLong = {
    code?: number;
    data?: number;
    message?: string;
    description?: string;
  };

  type BaseResponsePageTeamUserVO = {
    code?: number;
    data?: PageTeamUserVO;
    message?: string;
    description?: string;
  };

  type BaseResponsePageUserVO = {
    code?: number;
    data?: PageUserVO;
    message?: string;
    description?: string;
  };

  type BaseResponseString = {
    code?: number;
    data?: string;
    message?: string;
    description?: string;
  };

  type BaseResponseTeam = {
    code?: number;
    data?: Team;
    message?: string;
    description?: string;
  };

  type BaseResponseUser = {
    code?: number;
    data?: User;
    message?: string;
    description?: string;
  };

  type deleteTeamParams = {
    id: number;
  };

  type deleteUsingPOSTParams = {
    id: number;
  };

  type getTeamListByIdParams = {
    id: number;
  };

  type getUserByPageParams = {
    userQueryRequest: UserQueryRequest;
  };

  type IPageUser = {
    size?: number;
    total?: number;
    records?: User[];
    current?: number;
    pages?: number;
  };

  type matchUsersParams = {
    num: number;
  };

  type myCreateTeamListParams = {
    teamQuery: TeamQuery;
  };

  type myJoinTeamListParams = {
    teamQuery: TeamQuery;
  };

  type OrderItem = {
    column?: string;
    asc?: boolean;
  };

  type PageTeamUserVO = {
    records?: TeamUserVO[];
    total?: number;
    size?: number;
    current?: number;
    orders?: OrderItem[];
    optimizeCountSql?: boolean;
    searchCount?: boolean;
    optimizeJoinOfCountSql?: boolean;
    maxLimit?: number;
    countId?: string;
    pages?: number;
  };

  type PageUserVO = {
    records?: UserVO[];
    total?: number;
    size?: number;
    current?: number;
    orders?: OrderItem[];
    optimizeCountSql?: boolean;
    searchCount?: boolean;
    optimizeJoinOfCountSql?: boolean;
    maxLimit?: number;
    countId?: string;
    pages?: number;
  };

  type quitTeamParams = {
    id: number;
  };

  type recommendUsersParams = {
    pageSize: number;
    pageNum: number;
  };

  type registerUserMultipleParams = {
    file: string;
  };

  type searchUsersByTagsParams = {
    pageSize: number;
    pageNum: number;
    tagNameList?: string[];
  };

  type searchUsersParams = {
    username: string;
  };

  type Team = {
    id?: number;
    name?: string;
    description?: string;
    avatarUrl?: string;
    maxNum?: number;
    teamPassword?: string;
    expireTime?: string;
    userId?: number;
    category?: string;
    status?: number;
    createTime?: string;
    updateTime?: string;
    isDelete?: number;
  };

  type TeamJoinRequest = {
    teamId?: number;
    teamPassword?: string;
  };

  type teamListParams = {
    teamQuery: TeamQuery;
  };

  type TeamQuery = {
    id?: number;
    idList?: number[];
    searchText?: string;
    name?: string;
    maxNum?: number;
    description?: string;
    expireTime?: string;
    userId?: number;
    category?: string;
    status?: number;
    pageSize?: number;
    pageNum?: number;
  };

  type TeamRequest = {
    name?: string;
    description?: string;
    avatarUrl?: string;
    maxNum?: number;
    teamPassword?: string;
    expireTime?: string;
    userId?: number;
    category?: string;
    status?: number;
  };

  type TeamUpdateRequest = {
    id?: number;
    name?: string;
    description?: string;
    teamPassword?: string;
    expireTime?: string;
    status?: number;
  };

  type TeamUserVO = {
    id?: number;
    name?: string;
    description?: string;
    avatarUrl?: string;
    maxNum?: number;
    expireTime?: string;
    userId?: number;
    category?: string;
    status?: number;
    createTime?: string;
    updateTime?: string;
    createUser?: UserVO;
    hasJoinNum?: number;
    hasJoin?: boolean;
  };

  type uploadParams = {
    file: string;
  };

  type User = {
    id?: number;
    username?: string;
    userAccount?: string;
    avatarUrl?: string;
    gender?: number;
    userPassword?: string;
    phone?: string;
    email?: string;
    major?: string;
    userStatus?: number;
    createTime?: string;
    updateTime?: string;
    isDelete?: number;
    userRole?: number;
    stuId?: string;
    tags?: string;
    profile?: string;
  };

  type UserLoginRequest = {
    userAccount?: string;
    userPassword?: string;
  };

  type UserQueryRequest = {
    pageSize?: number;
    current?: number;
    id?: number;
    username?: string;
    userAccount?: string;
    avatarUrl?: string;
    gender?: number;
    phone?: string;
    email?: string;
    major?: string;
    userStatus?: number;
    userRole?: number;
    stuId?: string;
    tags?: string;
    profile?: string;
  };

  type UserRegisterRequest = {
    userAccount?: string;
    userPassword?: string;
    checkPassword?: string;
    stuId?: string;
  };

  type UserUpdatePasswordRequest = {
    oldPassword?: string;
    newPassword?: string;
    checkPassword?: string;
  };

  type UserVO = {
    id?: number;
    username?: string;
    userAccount?: string;
    avatarUrl?: string;
    gender?: number;
    phone?: string;
    email?: string;
    major?: string;
    userStatus?: number;
    userRole?: number;
    stuId?: string;
    tags?: string;
    profile?: string;
  };
}
