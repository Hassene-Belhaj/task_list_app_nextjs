import HomePage from "@/components/HomePage";
import prisma from "@/utils/Db";
import { Todo } from "@prisma/client";



export default async function Home() {
  
  const Data = await prisma.todo.findMany({orderBy : {createdAt : "desc"}}) as Todo []

  return (
    <div>
      <main className="font-Poppins">
        <HomePage data={Data} />
      </main>
    </div>
  );
}
