import { Status } from "@prisma/client";

export interface IcreateTask {
  title: string;
  description: string;
}




export interface IeditTask {
  id: string;
  title: string;
  description: string;
  status: Status;
}

