import calsses from "./Modal.module.scss";
import { Fragment } from "react";
import ReactDom from "react-dom";

const Backdrop = (props) => {
  return <div className={calsses.backdrop} onClick={props.onClick}></div>;
};

const ModalOverLay = (props) => {
  return (
    <div className={calsses.modal}>
      <div className={calsses.content}>{props.children}</div>
    </div>
  );
};

const portal = document.getElementById("overlays");

const Modul = (props) => {
  return (
    <Fragment>
      {ReactDom.createPortal(<Backdrop onClick={props.onClick} />, portal)}
      {ReactDom.createPortal(
        <ModalOverLay>{props.children} </ModalOverLay>,
        portal
      )}
    </Fragment>
  );
};
export default Modul;
