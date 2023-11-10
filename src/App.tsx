import { FC, useState } from "react"
import { Cardperson } from "./components/Cardperson"
import { Cardsocial } from "./components/Cardsocial"

export const App: FC = () => {
    const [isMenuSocialOpen, setIsMenuSocialOpen] = useState(true)

    if (isMenuSocialOpen) {
        console.log('Abierto')
    } else { console.log ('Cerrado')}

    return (
        <section className="h-[560px] mx-[10px] rounded-lg bg-white flex flex-col mt-[5%] md:mt-0 md:w-[750px] md:h-[220px] md:flex-row ">
            {/* Image */}
            <article className="bg-article min-h-[260px] bg-cover rounded-t-md md:w-[300px] md:min-h-[100%] md:bg-contain md:bg-no-repeat md:rounded-l-lg md:bg-left-bottom"></article>

            {/* Body */}
            <article className="flex flex-col h-[300px] md:w-[450px] md:h-[100%] relative">
                <div className="pt-7 px-7 md:pt-4">
                    <h1 className="text-[18px] text-VeryDarkGrayishBlue font-bold md:text-xl ">Shift the overall look and feel by adding these wonderful touches to forniture in your home</h1>
                </div>
                <div className="pt-5 px-7 md:pt-2">
                    <p className="text-sm leading-5 text-GrayishBlue md:text-xs">
                        Ever been in a rrom and felt like something was missing? Perhaps it left slightly bare and uninviting. I've got some simple tips to help you make any room feel complete.
                    </p>
                </div>
                <Cardsocial isMenuSocialOpen={isMenuSocialOpen} setIsMenuSocialOpen={setIsMenuSocialOpen} />
                <Cardperson isMenuSocialOpen={isMenuSocialOpen} setIsMenuSocialOpen={setIsMenuSocialOpen} />
                {/* {isMenuSocialOpen
                    ? <Cardsocial isMenuSocialOpen={isMenuSocialOpen} setIsMenuSocialOpen={setIsMenuSocialOpen} />
                    : <Cardperson isMenuSocialOpen={isMenuSocialOpen} setIsMenuSocialOpen={setIsMenuSocialOpen} />
                } */}
            </article>
        </section>
    )
}
