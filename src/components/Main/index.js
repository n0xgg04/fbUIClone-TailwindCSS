import '../../styles/tailwind.scss'

export default function Main(){
    return (
        <>
            <div className="bg-[#242526] w-full h-full col-span-2">
                <div className="flex flex-col items-center justify-center">
                    <div className="flex flex-col items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-[#3a3b3c]"></div>
                        <div className="text-white text-lg font-bold mt-2">John Doe</div>
                        <div className="text-gray-400 text-sm">Software Engineer</div>
                    </div>
                </div>
            </div>
        </>
    )
}