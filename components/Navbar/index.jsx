'use client';
import Link from "next/link";
import {useEffect, useState} from "react";
import ButtonLink from "@components/ButtonLink";
import Button from "@components/Button";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import Logo from "@components/Logo";
import styled from "@components/Navbar/index.module.css";
import button from "@components/Button";


const Navbar = () => {

    const { data: session} = useSession();
    const [providers, setProviders] = useState(null);

    useEffect(() => {
        (async () => {
            await getProviders().then(res => setProviders(res));
        })();
    }, []);

    return (
        <header className={styled.main_header}>
            <Link href="/" title={'Logo'}>
                <Logo/>
            </Link>
            <div className="button_group">
                    {
                        session?.user ? (
                            <>
                                <ButtonLink type={'dark'} label={'Create Post'} url={'/create-post'}/>
                                <ButtonLink type={'icon'} label={session?.user.name} url={'/profile'} dataUser={ session?.user }/>
                                <button type="button" onClick={ () => signOut() } className={ "button border" }>Sign Out</button>
                            </>
                        ) : (
                            <>
                                {
                                    providers && (
                                        Object.values(providers)
                                            .map((apps, key) =>
                                                <button className={ ['button'].join(' ') } key={key} onClick={ () => signIn(apps.id) }>
                                                    Sign with { apps.name }
                                                </button>
                                            )
                                    )
                                }
                            </>
                        )
                    }
            </div>
        </header>
    )
}

export default Navbar;