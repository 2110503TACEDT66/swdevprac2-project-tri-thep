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
   id: string;
   interviewDate: string;
   company: string;
   user: string
   createdAt: string
}