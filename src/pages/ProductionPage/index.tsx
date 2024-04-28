import TopChart from '../../components/Chart/TopChart'
import NavBar from '../../components/NavBar'
import Score from '../../components/Score'
import SelectBox from '../../components/SelectBox'
import SideBar from '../../components/SideBar/SideBar'

const ProductionPage = () => {
  return (
    <div className='text-center mx-auto max-w-[1700px] bg-mainBgColor h-[1301px] flex'>
      <SideBar />
      <div>
        <NavBar text="Real-Time Production" />
        <div className='m-6 flex items-center gap-4'>
          <SelectBox Value='SJA' />
          <SelectBox Value='A-1' />
          <div className='p-[7px] border border-2 rounded-lg bg-gray-50 relative'>
            <span className='p-2 font-semibold'>
              <span className="before:absolute before:left-[-10px] before:h-7 before:w-[2px] before:bg-gray-200" />
              WL02Y018-RE2-001
            </span>
          </div>
        </div>
        <Score />
        <TopChart />
      </div>
    </div>
  )
}

export default ProductionPage
