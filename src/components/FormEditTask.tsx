"use client";

import { editTask } from "@/utils/actions";
import { zValidation } from "@/utils/Zvalidation";
import { Status, Todo } from "@prisma/client";
import toast from "react-hot-toast";

const FormEditTask = ({ task }: { task: Todo }) => {
  
    const actionClientEdit = async (formData: FormData) => {
        const title = formData.get("title")?.toString();
        const description = formData.get("description")?.toString();
        const id = formData.get("id")?.toString() ;
        const status = formData.get("status")?.toString() as Status ;
        if(!id || !title || !description || !status) return toast.error("please fill all required fields")
        const validation = zValidation.safeParse({title, description });
        if (!validation.success) {
          return toast.error(validation.error.errors[0].message);
        }
        await editTask({id,title , description , status})
        toast.success("task edited with success")
      };


  return (
    <form action={actionClientEdit} className="flex flex-col gap-4">
      <input type="hidden" name="id" defaultValue={task.id} />
      <input defaultValue={task.title} name="title" type="text" placeholder="title" className="h-12 w-full pl-2 outline-none border-2 border-slate-400 rounded-xl focus:border-slate-600 duration-300 ease-in-out" />
      <select name="status" defaultValue={task.status} className="pl-2 h-10 rounded-lg border-2 border-slate-400 focus:border-slate-600 duration-300 ease-in-out">
        <option value="TODO">TODO</option>
        <option value="IN_PROGRESS">IN_PROGRESS</option>
        <option value="COMPLETED">COMPLETED</option>
      </select>
      <textarea defaultValue={task.description} name="description" placeholder="Task description" rows={8} className="resize-none p-2 outline-none border-2 border-slate-400 rounded-xl focus:border-slate-600 duration-300 ease-in-out"></textarea>
      <button className="w-full h-12 bg-black text-white rounded-lg hover:opacity-85 duration-300 ease-in-out" type="submit">
        Edit Task
      </button>
    </form>
  );
};

export default FormEditTask;
