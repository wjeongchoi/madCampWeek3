import React from "react";

import "./style.css";
import { Header } from "../../components/Header";
import { InputText } from "../../components/InputText";
import { SecondaryButton } from "../../components/SecondaryButton";

export const Login = (): JSX.Element => {
    return (
        <div className="login">
            <div className="div-2">
                <Header className="header-instance" />
                <div className="frame-2">
                    <div className="group">
                        <div className="frame-3">
                            <InputText  label="아이디"/>
                            <InputText label="비밀번호" />
                        </div>
                        <SecondaryButton label="로그인" />
                    </div>
                    <div className="text-wrapper-5">로그인</div>
                </div>
            </div>
        </div>
    );
};
