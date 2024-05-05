import { Skeleton } from "@mui/material"
import { Be_Vietnam_Pro } from 'next/font/google';
import { SkeletonCountries } from "./SkeletonCountries";

const BeVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: "500"
})

export const Loader = () => {
  return (
    <div style={{ position: 'sticky', top: '0', zIndex: '999', background: '#1C1D1F' }}>
        <div className="flex space-x-12 text-[#6C727F] border-b-2 border-[#6C727F] mt-5 ml-5">
              <p className="w-[50px] text-left text-xl font-bold text-[#6C727F] bg-transparent border-none pl-0 mb-5">Flag</p>
              <p className="w-40 text-left text-xl font-bold text-[#6C727F] bg-transparent border-none pl-0">
                Name
              </p>
              <p className="w-36 text-left text-xl font-bold text-[#6C727F] bg-transparent border-none pl-0">
                Population
              </p>
              <p className="w-40 text-left text-xl font-bold text-[#6C727F] bg-transparent border-none pl-0">
                Area (km²)
              </p>
              <p className="w-36 text-left text-xl font-bold text-[#6C727F] bg-transparent border-none pl-0">
                Region
              </p>
        </div>
        <div className="flex flex-col items-start ml-5">
            <SkeletonCountries />
            <SkeletonCountries />
            <SkeletonCountries />
            <SkeletonCountries />
            <SkeletonCountries />
            <SkeletonCountries />
            <SkeletonCountries />
            <SkeletonCountries />
        </div>
    </div>
  )
}
