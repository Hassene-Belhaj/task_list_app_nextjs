import TaskDetails from "@/components/TaskDetails"
import prisma from "@/utils/Db"
import { notFound } from "next/navigation"

interface Iparams {
    params : {
        id : string
    }
}


const page = async({params} : Iparams) => {
    const {id} = params ;
    const Data = await prisma.todo.findUnique({where : {id : parseInt(id)  }})
    
    if(!Data) notFound()
    
  return (
    <TaskDetails data={Data} />
  )
}

export default page