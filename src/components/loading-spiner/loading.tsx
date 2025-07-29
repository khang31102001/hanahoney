const Loading = ()=>{
    return(
        <div className="absolute inset-0 flex items-center justify-center bg-black opacity-70">
            <div className="w-12 h-12 border-4 border-honey-600 border-t-transparent rounded-full animate-spin"></div>
            <span className="sr-only">Loading...</span>
        </div>
    )

}
export default Loading