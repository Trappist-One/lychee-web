import { useTranslation } from "react-i18next";
import Logo from "../../components/Logo";


export default function Login() {
    const {t} = useTranslation();
    return (
        <div className="flex h-full w-full bg-white">
            <div className="flex h-full w-full flex-col px-10 pt-10 pb-2">
                <div >
                <Logo size="32"></Logo>
                </div>
                <div className="h-32 w-full flex items-center justify-center text-3xl">
                    {t('嗨，欢迎回来！')}
                </div>
            </div>
            <div className="h-full w-[600px] bg-red-300 px-5">
                <div className="w-full mt-64 bg-ly-primary">
                    
                </div>
            </div>
        </div>
    )
}