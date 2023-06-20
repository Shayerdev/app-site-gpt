import Image from "next/image";
import LogoSite from "@/public/assets/images/next.svg";
import styled from "@/components/logo/index.module.css";
export default function Index(){
    return (
        <div className={styled.logo}>
            <Image
                src={ LogoSite }
                alt={'Site Logo'}
            />
        </div>
    );
}