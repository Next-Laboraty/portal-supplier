import ButtonPertamaWarnaBiru from "../../atom/ButtonPertamaWarnaBiru";

export default function HeroText(props) {
    return (
        <div >
            <h1 className="text-blue-600 font-bold text-2xl">
                {props.title}
            </h1>
            <p>
                {props.deskripsi}
            </p>
            <div className="mt-10">
                <ButtonPertamaWarnaBiru />
                <a className="ml-10 bg-gray-500 px-10 py-2 rounded-lg text-gray-100 hover:bg-gray-300">
                    login
                </a>
            </div>
        </div>
    )
}