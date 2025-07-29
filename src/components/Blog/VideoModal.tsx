import { X } from "lucide-react";
import { useEffect, useState } from "react";
import Loading from "../loading-spiner/loading";

interface VideoModalProps {
    isOpen: boolean;
    onClose: () => void;
    video: {
        id: number;
        title: string;
        src: string;
        thumbnail: string;
    }
}
const VideoModal = ({ isOpen, onClose, video }: VideoModalProps) => {
    const [loading, setLoading] = useState<boolean>(true);
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'; // ngăn chặn cuộn trang khi mở modal
            setLoading(true);
        } else {
            document.body.style.overflow = 'unset'; // cho phép cuộn lại khi đóng modal
        }
        return () => {
            document.body.style.overflow = 'unset'; // đảm bảo cuộn lại khi component unmount
        }
    }, [isOpen])

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') return onClose();
        }

        return () => {
            window.removeEventListener('keydown', handleEscape);
        }
    }, [onClose])
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 z-50 bg-black/80  transition-opacity flex items-center justify-center">
            <div className="relative w-full max-w-4xl p-6">

                <button
                    onClick={onClose}
                    className="group absolute -top-12 right-0 z-10 rounded-full bg-honey-200 hover:bg-honey-400 transform transition-colors  p-2 my-4"
                >
                    <X size={24} className="text-honey-600 group-hover:text-white" />
                </button>

                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="relative pb-[56.25%] h-0">
                        {loading && (
                            <Loading />
                        )}
                        <iframe
                            width="100%"
                            height="700"
                            src={video.src}
                            title={video.title}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="absolute top-0 left-0 w-full h-full"
                        >
                        </iframe>
                    </div>
                    <div className="p-4">
                        <h2 className="text-2xl font-bold text-gray-900 p-4">{video.title}</h2>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default VideoModal;