import { TfiArrowLeft } from "react-icons/tfi";


const NotFoundPage = () => {
  return (
    <div>
        <div className="nfp-nav">
            <div className="navbar h-[8vh] w-[100%] bg-[#1C0F06]/98 border-1 border-b-amber-700/30">
                <h3 className="name-logo mr-auto text-lg sm:text-xl lg:text-2xl">Mary G.B.</h3>
                <p className="flex gap-1 text-orange-50/50 font-semibold tracking-wide"><TfiArrowLeft/> BACK TO HOME</p>
            </div>
        </div>
    </div>
  )
}

export default NotFoundPage