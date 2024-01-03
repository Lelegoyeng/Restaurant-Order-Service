const Modal = (props: any) => {
    const {
        title, content
    } = props.modalOption



    return (
        < div >
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{title}</h3>
                    <div>{content}</div>
                </div>
            </dialog>
        </div >

    )
}

export default Modal
