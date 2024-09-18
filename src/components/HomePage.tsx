"use client";
import { CiCirclePlus } from "react-icons/ci";
import Link from "next/link";
import { Todo } from "@prisma/client";
import StatusBadge from "./StatusBadge";

interface Iprops {
  data: Todo[];
}

const HomePage = ({ data }: Iprops) => {
  return (
    <section className="p-8 md:p-16">
      <div className="flex justify-between items-center gap-4">
        <h1 className="text-4xl font-semibold"> Task List</h1>
        <div className="flex justify-center items-center gap-2">
         <h2 className="font-semibold">New Task</h2>
        <Link href="/task/add">
          <button type="button" name="add task button" className="flex justify-center items-center active:scale-95 transition">
            <CiCirclePlus size={50} />
          </button>
        </Link>
        </div>
      </div>
      <div className="py-16 overflow-x-auto">
        <table className="table-auto sm:w-full md:w-full lg:w-1/2 text-center border-2 border-slate-200 mx-auto">
          <thead>
            <tr>
              <th className="p-4 whitespace-nowrap">#</th>
              <th className="p-4 whitespace-nowrap">Task Title</th>
              <th className="p-4 whitespace-nowrap">Task Status</th>
              <th className="p-4 whitespace-nowrap">Task Details</th>
            </tr>
          </thead>
          <tbody>
            {data.map((t, i) => {
              return (
                <tr key={i} className="border-2 border-gray-200">
                  <td className="p-4 whitespace-nowrap font-semibold">{i + 1}</td>
                  <td className="p-4 whitespace-nowrap">{t.title}</td>
                  <td className="p-4 whitespace-nowrap">
                    <StatusBadge status={t.status.toString()} />
                  </td>
                  <td>
                    <Link href={`/task/${t.id}`} className="bg-slate-500 rounded-md text-white px-2 py-2 text-sm hover:opacity-90 duration-300 ease-in-out">
                      Details
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default HomePage;
