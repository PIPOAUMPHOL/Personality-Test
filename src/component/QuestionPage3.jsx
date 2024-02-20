/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useNavigate } from "react-router-dom";

function QuestionPage3() {
  const navigate = useNavigate();
  return (
    <div
      css={css`
        width: 100%;
        height: 100%;
        background-color: #39b7e8;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: ;
      `}
    >
      <div
        css={css`
          width: 90%;
          height: 10%;
          display: flex;
          align-items: center;
          gap: 5px;
          padding-bottom: 20px;
        `}
      >
        <div
          css={css`
            width: 15%;
            height: 12%;
            background-color: black;
            border-radius: 10px;
          `}
        ></div>
        <div
          css={css`
            width: 15%;
            height: 12%;
            background-color: black;
            border-radius: 10px;
          `}
        ></div>
        <div
          css={css`
            width: 15%;
            height: 12%;
            background-color: black;
            border-radius: 10px;
          `}
        ></div>
        <div
          css={css`
            width: 15%;
            height: 12%;
            background-color: white;
            border-radius: 10px;
          `}
        ></div>
        <div
          css={css`
            width: 15%;
            height: 12%;
            background-color: white;
            border-radius: 10px;
          `}
        ></div>
        <div
          css={css`
            width: 15%;
            height: 12%;
            background-color: white;
            border-radius: 10px;
          `}
        ></div>
        <div
          css={css`
            width: 15%;
            height: 12%;
            background-color: white;
            border-radius: 10px;
          `}
        ></div>
      </div>
      <div
        css={css`
          width: 85%;
          height: 60%;
          background-color: white;
          border-radius: 40px;
          padding: 40px;
        `}
      >
        <p
          css={css`
            font-size: 60px;
            margin-bottom: 20px;
            color: #c8c8c8;
          `}
        >
          <i>Q3</i>
        </p>
        <p
          css={css`
            font-size: 35px;
            font-weight: 700;
            margin-bottom: 85px;
          `}
        >
          สไตล์การเรียนภาษาอังกฤษของคุณเป็นแบบไหน?
        </p>
        <div
          css={css`
            width: 100%;
            height: 18%;
            border-radius: 40px;
            margin-bottom: 30px;
            border: rgb(162, 158, 158) 1px solid;
            display: flex;
            align-items: center;
            font-size: 35px;
            font-weight: 500;
            padding: 50px;
            &:hover {
              background-color: #f57c4a;
              cursor: pointer;
            }
          `}
        >
          เรียนคอร์สออนไลน์ / โรงเรียนสอนภาษา
        </div>
        <div
          css={css`
            width: 100%;
            height: 18%;
            border-radius: 40px;
            margin-bottom: 30px;
            border: rgb(162, 158, 158) 1px solid;
            display: flex;
            align-items: center;
            font-size: 35px;
            font-weight: 500;
            padding: 50px;
            &:hover {
              background-color: #f57c4a;
              cursor: pointer;
            }
          `}
        >
          เรียนด้วยตนเอง เช่น อ่านหนังสือ ดูหนัง ฟังเพลง
        </div>
        <div
          css={css`
            width: 100%;
            height: 18%;
            border-radius: 40px;
            border: rgb(162, 158, 158) 1px solid;
            display: flex;
            align-items: center;
            font-size: 35px;
            font-weight: 500;
            padding: 50px;
            &:hover {
              background-color: #f57c4a;
              cursor: pointer;
            }
          `}
        >
          คุยกับเพื่อนต่างชาติ / ไปเที่ยวต่างประเทศ
        </div>
      </div>
      <div
        css={css`
          width: 85%;
          height: 10%;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 70px;
          margin-top: 60px;
        `}
      >
        <button
          css={css`
            width: 30%;
            height: 40%;
            font-size: 35px;
            font-weight: 500;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 40px;
            background-color: #f7c116;
            border: 1px solid black;
            &:hover {
              cursor: point;
            }
          `}
          onClick={() => {
            navigate("/questionpage2");
          }}
        >
          กลับ
        </button>
        <button
          css={css`
            width: 60%;
            height: 40%;
            font-size: 35px;
            font-weight: 500;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 40px;
            background-color: #f7c116;
            border: 1px solid black;
            &:hover {
              cursor: point;
            }
          `}
          onClick={() => {
            navigate("/questionpage4");
          }}
        >
          ต่อไป
        </button>
      </div>
    </div>
  );
}

export default QuestionPage3;
