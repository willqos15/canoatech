import IcoWhatsfix from "./icons/icowhatsfix"

export default function WhatsFixed() {
    return (<>
        <a href="https://wa.me/5593991878598" target="_blank"
            className="fixed hover:-translate-y-6 transition-all duration-300 sm:right-10 sm:bottom-10 right-5 bottom-5 z-30">
            <IcoWhatsfix className="w-12 h-12" />
        </a>
    </>)
}