import { Skeleton } from '@mui/material'

export const SkeletonCountries = () => {
  return (
    <div className="flex flex-row items-center gap-10"> 
        <Skeleton className="w-14 h-20 bg-[#6C727F]"></Skeleton>
        <Skeleton className="w-24 h-7 bg-[#6C727F] rounded-xl"></Skeleton>
        <Skeleton className="w-24 h-7 bg-[#6C727F] rounded-xl ml-20"></Skeleton>
        <Skeleton className="w-24 h-7 bg-[#6C727F] rounded-xl ml-10"></Skeleton>
        <Skeleton className="w-24 h-7 bg-[#6C727F] rounded-xl ml-20"></Skeleton>
    </div>
  )
}
