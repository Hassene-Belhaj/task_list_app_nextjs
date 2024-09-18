import { Todo } from "@prisma/client";
import Link from "next/link";
import StatusBadge from "./StatusBadge";
import { deleteTask } from "@/utils/actions";

const TaskDetails = ({ data }: { data: Todo }) => {
  return (
    <section className="w-full py-16 px-4 sm:px-8">
      <Link href={"/"} className="underline underline-offset-4 p-8 font-semibold">
        {"<<"} Back to tasks table
      </Link>
      <div className="py-8">
        <div className="p-6 max-w-[1200px]  bg-gray-100 mx-auto rounded-md flex flex-col">
          <div className="pb-12 w-full flex justify-end gap-4">
              <Link href={`/task/${data.id}/edit`} className="bg-black w-24 h-10 text-white py-2 px-4 rounded-md active:scale-95 flex justify-center items-center hover:opacity-85">Edit</Link>
            <form action={deleteTask}>
              <input type="hidden" name="id" value={data.id}/>
              <button className="bg-transparent w-24 h-10 border-2  border-black rounded-md active:scale-95 hover:opacity-85">Delete</button>
            </form>
          </div>
          <div className="flex justify-between items-center gap-4 ">
            <h2 className=" text-lg font-semibold capitalize">{data.title}</h2>
            <StatusBadge status={data.status} />
          </div>
          <p className="font-semibold text-sm text-green-600">{new Date(data.createdAt).toDateString()} </p>
          <p className="py-4">{data.description}</p>
        </div>
      </div>
    </section>
  );
};

export default TaskDetails;
