export default function LoadingSpinner() {

    return (
       <div className="fixed inset-0 z-50 flex flex-col justify-center items-center bg-black backdrop-blur-md bg-opacity-30">
            <div className="bg-zinc-900 p-8 rounded-lg shadow-xl flex flex-col justify-center items-center gap-4">
                <div className="h-12 w-12 border-red-500 border-2 rounded-full border-t-transparent animate-spin"></div>
                <p className="font-lg text-center">Loading...</p>
            </div>
       </div>
    )
}