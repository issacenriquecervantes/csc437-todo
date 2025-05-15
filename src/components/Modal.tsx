import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import React from "react";

interface ModalProps {
  isOpen: boolean;
  onCloseRequested: () => void;
  headerLabel: string;
  children: React.ReactNode;
}

export function Modal(props: ModalProps) {
  return props.isOpen ? (
    <div
      className="w-screen h-screen bg-[rgba(0,0,0,0.25)] absolute flex items-center justify-center top-0 left-0"
      onClick={(event: React.MouseEvent<HTMLDivElement>) => {
        if (event.target === event.currentTarget) {
          props.onCloseRequested();
        }
      }}
    >
      <div className="bg-white p-5 rounded-lg flex flex-col gap-4">
        <header className="flex justify-between">
          {props.headerLabel}
          <button aria-label="Close" onClick={props.onCloseRequested}>
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </header>
        {props.children}
      </div>
    </div>
  ) : null;
}
