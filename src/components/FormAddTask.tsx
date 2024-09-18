"use client";
import { createTask } from "@/utils/actions";
import { IcreateTask } from "@/utils/Dtos";
import { zValidation } from "@/utils/Zvalidation";
import toast from "react-hot-toast";

function FormAddTask() {

  const actionClient = async (formData: FormData) => {
    const title = formData.get("title")?.toString();
    const description = formData.get("description")?.toString();
    const validation = zValidation.safeParse({ title, description });
    if (!validation.success) {
      return toast.error(validation.error.errors[0].message);
    }
    await createTask({title , description} as IcreateTask)
    toast.success("task created with success")
  };

  return (
    <form action={actionClient} className="flex flex-col gap-4">
      <input name="title" type="text" placeholder="Task title" className="h-12 w-full pl-2 outline-none border-2 border-slate-400 rounded-xl focus:border-slate-600 duration-300 ease-in-out" />
      <textarea name="description" placeholder="Task description" rows={8} className="resize-none p-2 outline-none border-2 border-slate-400 rounded-xl focus:border-slate-600 duration-300 ease-in-out"></textarea>
      <div className="py-4">
        <button type="submit" className="bg-slate-800 text-white h-12 w-full rounded-full hover:opacity-90 duration-300 ease-in-out">
          Submit
        </button>
      </div>
    </form>
  );
}

export default FormAddTask;
