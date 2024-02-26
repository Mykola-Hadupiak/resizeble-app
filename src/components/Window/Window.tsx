import React from "react";
import { ResizableWindow } from "../ResizableWindow";
import './Window.scss';

type Props = {
  num: number;
};

export const Window: React.FC<Props> = ({ num }) => {
  return (
    <ResizableWindow className={`window--${num}`}>
      {`Window-${num}`}
      {num === 2 && (
        <input type="text" />
      )}
    </ResizableWindow >
  )
}