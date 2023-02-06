import home from "@/assets/icons/home.png"
import search from "@/assets/icons/search.png"
import teamMatch from "@/assets/icons/team-match.png"
import totalList from "@/assets/icons/total-list.png"

export default function Footer() {
    return (
        <div className="w-full h-[55px] pl-28 pr-28 flex justify-between items-center border-t-1 fixed bottom-0 border-gray-600 bg-white ">
            <div className="w-30 h-25 flex flex-col justify-center items-center">
                <img className="w-17 h-17" src={home}></img>
                <div className="text-8 text-gray-700 mt-3">홈</div>
            </div>
            <div className="w-30 h-25 flex flex-col justify-center items-center">
                <img className="w-17 h-17 mt-3" src={search}></img>
                <div className="text-8 text-gray-700 mt-3">매칭</div>
            </div>
            <div className="w-30 h-30 flex flex-col justify-center items-center">
                <img className="w-20 h-20" src={teamMatch}></img>
                <div className="text-8 text-gray-700 mt-3">팀매칭</div>
            </div>
            <div className="w-30 h-30 flex flex-col justify-center items-center">
                <img className="w-23 h-23" src={totalList}></img>
                <div className="text-8 text-gray-700">전체</div>
            </div>
        </div>
    )
}