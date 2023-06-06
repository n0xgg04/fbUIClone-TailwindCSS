import '../../styles/tailwind.scss'

export default function LeftBar(){
    return (
        <>
            <div className="bg-[#242526] w-full h-full col-span-1">
                <div className="flex flex-col items-center justify-center">
                    <div className="flex flex-col items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-[#3a3b3c]"></div>
                        <div className="text-white text-lg font-bold mt-2">John Doe</div>
                        <div className="text-gray-400 text-sm">Software Engineer</div>
                    </div>
                    <div className="flex flex-col items-center justify-center mt-4">
                        <div className="flex flex-row items-center justify-center">
                            <div className="w-4 h-4 rounded-full bg-[#3a3b3c]"></div>
                            <div className="text-white text-sm font-bold ml-2">John Doe</div>
                        </div>
                        <div className="flex flex-row items-center justify-center mt-2">
                            <div className="w-4 h-4 rounded-full bg-[#3a3b3c]"></div>
                            <div className="text-white text-sm font-bold ml-2">John Doe</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}