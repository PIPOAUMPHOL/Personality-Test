import backgroundImage from "../assets/9c47e372c47809f8e7ad815c11aea28d.png";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useNavigate } from "react-router-dom";

function Homepage() {
  const navigate = useNavigate();
  return (
    <div
      css={css`
        width: 100%;
        height: 100%;
        display: flex;
        align-items: flex-end;
        justify-content: center;
        padding-bottom: 150px;
        background-image: url(${backgroundImage});
        background-size: cover;
      `}
    >
      <button
        css={css`
          width: 80%;
          height: 5%;
          border-radius: 40px;
          border: none;
          border: 1px solid black;
          background-color: #f7c116;
          font-size: 35px;
          font-weight: 600;
          &:hover {
            cursor: point;
          }
        `}
        onClick={() => {
          navigate("/questionpage1");
        }}
      >
        เริ่มเลย
      </button>
    </div>
  );
}

export default Homepage;
