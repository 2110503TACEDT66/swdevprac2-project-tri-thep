export interface CompanyItem {
   _id: string,
   name: string,
   address: string,
   website: string,
   description: string,
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

export interface InterviewItem {
   _id:string
   id: string;
   interviewDate: string;
   company: CompanyItem;
   user: string
   createdAt: string
}