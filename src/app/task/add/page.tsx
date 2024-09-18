import FormAddTask from "@/components/FormAddTask";
import Link from "next/link";



const page = () => {
  return (
    <section className="w-full py-16 px-4 sm:px-8">
      <Link href={"/"} className="underline underline-offset-4 p-8 font-semibold">
        {"<<"} Back to tasks table
      </Link>
      <div className="min-w-[300px] mt-16 p-12 px-8 sm:w-3/4 xl:w-2/3 flex flex-col mx-auto gap-4 bg-gray-200 rounded-xl shadow-xl">
        <h1 className="text-2xl font-medium">Add You Task</h1>
        <FormAddTask />
      </div>
    </section>
  );
};

export default page;
