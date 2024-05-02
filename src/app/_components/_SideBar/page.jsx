import Region from '../_Region/page'
import Sort from './_components/page'

const SideBar = () => {
  return (
    <div className='flex flex-col ml-6 mr-4'>
      <Sort />
      <Region />
    </div>
  )
}

export default SideBar