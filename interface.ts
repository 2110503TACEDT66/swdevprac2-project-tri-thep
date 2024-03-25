export interface CompanyItem {
    _id: string,
    name: string,
    address: string,
    district: string,
    province: string,
    postalcode: string,
    tel: string,
    picture: string,
    __v: number,
    id: string
  }
  
 export interface CompanyJson {
    success: boolean,
    count: number,
    pagination: Object,
    data: CompanyItem[]
 }

 export interface BookingItem {
    name: string;
    surname: string;
    id: string;
    company: string;
    bookDate: string;
  }