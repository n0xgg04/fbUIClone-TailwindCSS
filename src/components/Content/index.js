import '../../styles/tailwind.scss'
export default function Content({children}){
    return (
        <>
            <div className="bg-[#18191a] w-full h-full grid grid-cols-3">
                {children}
            </div>
        </>
    )
}