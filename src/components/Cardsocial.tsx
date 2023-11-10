import { Dispatch, FC, SetStateAction } from "react";

interface Props {
    isMenuSocialOpen: boolean;
    setIsMenuSocialOpen: Dispatch<SetStateAction<boolean>>;
}

export const Cardsocial: FC<Props> = ({ isMenuSocialOpen, setIsMenuSocialOpen }) => {
    return (
        <div className={`triangulo py-3 px-5 flex items-center justify-between bg-VeryDarkGrayishBlue rounded-b-lg ${isMenuSocialOpen ? 'opacity-0' : 'opacity-100'} absolute left-0 bottom-0 right-0 transition duration-75
        md:shadow-md md:py-2 md:w-[220px] md:px-5 md:rounded md:left-auto md:bottom-[80px] md:right-[-65px] md:shadow-VeryDarkGrayishBlue
        after:md:absolute after:md:min-w-full after:md:min-h-[10px] after:md:bg-VeryDarkGrayishBlue after:md:bottom-[-10px] after:md:left-0 after:md:shadow-md`}>

            <div className="flex-1 flex justify-evenly md:justify-between">
                <p className="text-LightGrayishBlue tracking-widest">SHARE</p>
                <img src="/images/icon-facebook.svg" alt="icon facebook" />
                <img src="/images/icon-twitter.svg" alt="icon facebook" />
                <img src="/images/icon-pinterest.svg" alt="icon facebook" />
            </div>
            <div
                className={`bg-slate-200 w-[35px] h-[35px] rounded-full cursor-pointer md:w-[35px] md:h-[35px] ${isMenuSocialOpen ? 'md:block' : 'md:hidden'}`}
                onClick={() => setIsMenuSocialOpen(!isMenuSocialOpen)}
            >
                <img className="z-20 w-full h-full p-2" src="/images/icon-share.svg" alt="icon share" />
            </div>
            {/* Flecha abajo */}
        </div>
    )
}
