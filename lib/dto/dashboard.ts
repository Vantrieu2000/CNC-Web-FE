export interface DashboardDto {
    userCity: UserCityDto[];
    matchingRatio: number;
    fullToC: number;
    fullToB: number;
    userOnlineInOneWeek: number;
    userOnlineInOneMonth: number;
    ageToC: AgeDto[];
    ratioReply: number;
    typeKenjin: UserTypeKenjinDto[];
    typeToC: UserTypeDto[];
    statisticUserOnlineOnWeekLastMonth: UserOnlineWeekDto[];
    statisticUserOnlineOnWeek: UserOnlineWeekDto[];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string | number]: any;
  }
  
  export interface UserOnlineWeekDto {
    week: number;
    value: string;
  }
  export interface UserCityDto {
    city: string;
    total: string;
  }
  export interface UserTypeKenjinDto {
    type: number;
    total: string;
  }
  export interface UserTypeDto {
    type: string;
    total: string;
  }
  export interface AgeDto {
    age: number;
    total: string;
  }
  