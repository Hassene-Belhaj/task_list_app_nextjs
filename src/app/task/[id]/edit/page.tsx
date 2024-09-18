import FormEditTask from "@/components/FormEditTask";
import prisma from "@/utils/Db";
import Link from "next/link";
import { notFound } from "next/navigation";

interface Iparams {
  params: {
    id: string;
  };
}

const page = async ({ params }: Iparams) => {
  const { id } = params;
  const task = await prisma.todo.findUnique({ where: { id: parseInt(id) } });
  if (!task) notFound();
  return (
    <section className="w-full py-16 px-4 sm:px-8">
      <Link href={`/task/${id}`} className="underline underline-offset-4 p-8 font-semibold">
        {"<<"} Back to task details
      </Link>
      <div className="py-8">
        <div className="p-6 max-w-[800px]  bg-gray-200 mx-auto rounded-md flex flex-col">
          <h2 className="pt-4 pb-12 text-2xl font-semibold">EDIT TASK</h2>
          <FormEditTask task={task}/>
        </div>
      </div>
    </section>
  );
};

export default page;
