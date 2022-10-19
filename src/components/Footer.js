import React from "react";
import { Footer } from "antd/lib/layout/layout";
import "./Footer.css";

export default function footer()
{
    return (
        <>
        <Footer className="footer">
            <span className="footerContent">Condições de Uso</span>
            <span className="footerContent">Notificação de privacidade</span>
            <span className="footerContent">Cookies</span>
            <span className="footerContent">Ajuda</span>
            <span className="footerContent copyright">@MercadoDex - Todos os direitos reservados</span>

        </Footer>
        </>
    )

}   