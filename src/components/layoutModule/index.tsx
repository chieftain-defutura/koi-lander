import React from "react";
import "./layoutModule.scss";
import UnionTop from "../../assets/images/Union-top.png";
import UnionBottom from "../../assets/images/Union-bottom.png";

interface ILayoutModule {
  children: React.ReactNode;
  className?: string;
  handleToggle: () => void;
}
const LayoutModule: React.FC<ILayoutModule> = ({
  children,
  handleToggle,
  className,
}) => {
  return (
    <div className="mx">
      <div className="product-detail">
        <div className="modal-overlay " onClick={handleToggle} />
        <div className={`product-detail-wrap ${className} `}>
          <div className="layout-module-children">
            <div className="union-top-img">
              <img src={UnionTop} alt="" />
            </div>
            {children}
            <div className="union-bottom-img">
              <img src={UnionBottom} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LayoutModule;
