import cert from "images/certify.jpg"


const detailedPopup = ({isOpen, onClose})=>{
    if(!isOpen) return null

    return(
        <Main className="relative flex flex-row">
            <button className="absolute top-2 right-2" onClick={onClose}>X</button>
            <section>
                <img src={cert} alt="certificate" />
            </section>
            <section>
                ggggggggggggggggggggggggggggggggggggggggggggg
            </section>

        </Main>
    )
}
 
export default detailedPopup;