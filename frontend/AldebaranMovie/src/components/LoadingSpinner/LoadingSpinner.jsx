export default function LoadingSpinner() {
    return (
        <div className="fixed top-20 left-0 right-0 flex justify-center items-center">
            <div className="mt-4 w-8 h-8 border-red-500 border-4 border-t-transparent rounded-full animate-spin"></div>
        </div>  
    )
}