
type Props = {
    title: string
    description: string
    isOpen: boolean
    onCancel: () => void
    onConfirm: () => void
}

const Modal = ({
    title,
    description,
    isOpen,
    onCancel,
    onConfirm,
}: Props) => {

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20">
            <div className="bg-mint-white p-6 rounded shadow-lg w-full max-w-md mx-2">
                <h2 className="text-lg font-bold mb-4">{title}</h2>
                <div className="mb-4">{description}</div>
                <div className="flex justify-end space-x-2">
                    <button onClick={onCancel} className="px-4 py-2 bg-secondary text-mint-white rounded">Cancel</button>
                    <button onClick={onConfirm} className="px-4 py-2 bg-mint-dark text-mint-white rounded">Confirm</button>
                </div>
            </div>
        </div>
    )
}

export default Modal;