import { ModalBody } from "./styles";
import type { IModal } from "./types";
import type { PropsWithChildren } from "react";

export function Modal({ isActive, children} :PropsWithChildren<IModal>) {


    return (
        <ModalBody isActive={isActive} >
            {children}
        </ModalBody>
    )
}