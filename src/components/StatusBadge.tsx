interface Iprops {
    status : string
}


const StatusBadge = ({status} : Iprops) => {
   
const StatusColor = status === "TODO" ? "bg-red-300" : status === "IN_PROGRESS" ? "bg-yellow-200" : "bg-green-400" ;


  return (
    <div className={`${StatusColor} p-2 rounded-md font-semibold text-sm`}>{status}</div>
  )
}

export default StatusBadge