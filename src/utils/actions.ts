"use server" ;

import prisma from "@/utils/Db";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { IcreateTask, IeditTask } from "./Dtos";
import { Status } from "@prisma/client";



export async function createTask({title , description} : IcreateTask) {
    if(typeof title !== "string" || title.length < 2) return ;
    if(typeof description !== "string" || description.length < 4) return ;
    try {
      await prisma.todo.create({
        data: {
          title ,
          description 
        },
      });
    } catch (error) {
      throw new Error("can not create the task , please try again later")
    }
    revalidatePath("/")
    redirect("/");
  }


  export async function deleteTask (formData : FormData) {
    const id = formData.get("id")?.toString();
    if(!id) return ;
    try {
      await prisma.todo.delete({where : {id : parseInt(id)}})
    } catch (error) {
      throw new Error("can not delete this task , please try again later")
    }
    revalidatePath("/") ;
    redirect("/")
  }

export async function editTask({id,title,description , status} : IeditTask) {
  
    if(typeof title !== "string" || title.length <= 2) return ;  
    if(typeof description !== "string" || description.length <= 2) return ;  
     if(!status) return ;
    if(typeof id !== "string" ) return ;
    
  try {
    await prisma.todo.update({
      where : {id : parseInt(id)} , 
      data : { title , description , status}})
  } catch (error) {
    throw new Error(" can not update the task , please try again later")
  }
  revalidatePath("/");
  revalidatePath(`/task/${id}`);
  redirect(`/task/${id}`);
}  