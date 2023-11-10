import { Dispatch, FC, SetStateAction } from 'react';

interface Props {
    isMenuSocialOpen: boolean;
    setIsMenuSocialOpen: Dispatch<SetStateAction<boolean>>;
}

export const Cardperson:FC<Props> = ({ isMenuSocialOpen, setIsMenuSocialOpen }) => {
    return (
        <div className={`py-3 px-7 flex items-center justify-between ${isMenuSocialOpen ? 'opacity-100' : 'opacity-0'} absolute left-0 bottom-0 right-0 md:relative md:opacity-100`}>
            <div className="w-[35px] h-[35px] ">
                <img className="w-full h-full rounded-full" src="/images/avatar-michelle.jpg" alt="Michelle" />
            </div>
            <div className="w-1/2 md:flex-1 md:ml-6 ">
                <p className="text-sm font-bold text-VeryDarkGrayishBlue">Michelle Appleton</p>
                <p className="text-sm text-GrayishBlue">28 Jun 2020</p>
            </div>
            <div
                className="bg-slate-200 w-[35px] h-[35px] rounded-full cursor-pointer  md:w-[35px] md:h-[35px]"
                onClick={() => setIsMenuSocialOpen(!isMenuSocialOpen)}
            >
                <img className="z-20 w-full h-full p-2" src="/images/icon-share.svg" alt="icon share" />
            </div>
        </div>
    )
}
