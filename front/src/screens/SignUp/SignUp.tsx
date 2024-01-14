import React from "react";

import "./style.css";
import { Header } from "../../components/Header";
import { InputText } from "../../components/InputText";
import { SecondaryButton } from "../../components/SecondaryButton";

export const SignUp = (): JSX.Element => {
    return (
        <div className="sign-up">
            <div className="div-2">
                <Header className="header-instance"  />
                <div className="frame-2">
                    <div className="frame-3">
                        <div className="text-wrapper-5">회원가입</div>
                        <div className="frame-4">
                            <InputText label="아이디" />
                            <InputText label="이름" />
                            <InputText label="비밀번호" />
                            <InputText label="비밀번호 확인" />

                        </div>
                    </div>
                    <SecondaryButton label="회원가입" />
                </div>
            </div>
        </div>
    );
};
