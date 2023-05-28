import styled from "styled-components";
import {
  coloBackground,
  colorPrimary,
  colorSection,
  colorSecundary,
  colorText,
} from "../../Variables";

export const DivPrincipal = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: ${coloBackground};
  border-radius: 20px 20px 0px 0px;

  .div-principal {
    display: flex;
    gap: 9px;

    .div-logo {
      width: 100px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-radius: 20px 0px 0px 0px;
      background: ${colorSecundary};

      img {
        width: 30px;
        height: 30px;
        margin-bottom: -7%;
      }

      h1 {
        color: white;
        font-size: 13px;
        line-height: 27px;
        text-decoration: overline;
      }
    }

    .div-user {
      width: 180px;
      display: flex;
      align-items: center;
      padding: 8px 11px;
      gap: 8px;
      background: ${colorText};

      img {
        width: 40px;
        height: 40px;
        border: 2px solid ${colorPrimary};
        border-radius: 10px;
        object-fit: cover;
      }

      div {
        text-align: right;
        color: ${colorSection};

        h2 {
          font-size: 13px;
          line-height: 27px;
          margin-bottom: -12%;
        }

        h3 {
          font-size: 10px;
          line-height: 22px;
        }
      }

      svg {
        color: ${colorPrimary};
        margin-left: 5px;
        cursor: pointer;
      }
    }

    .div-date {
      width: 120px;
      display: flex;
      align-items: center;
      padding: 8px 11px;
      gap: 12px;
      background: ${colorText};

      #calendar {
        color: ${colorPrimary};
        width: 25px;
        height: 25px;
      }

      div {
        text-align: right;
        color: ${colorSection};
        margin-left: 3px;

        h3 {
          font-size: 13px;
          line-height: 27px;
          margin-bottom: -25%;
        }

        p {
          font-size: 10px;
          line-height: 22px;
        }
      }

      svg {
        color: ${colorPrimary};
      }
    }
  }

  .div-second {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 9px;

    div {
      display: flex;
      justify-content: center;
      align-items: center;

      svg {
        width: 20px;
        height: 20px;
        padding: 0 15px;
        cursor: pointer;
      }
    }
  }
`;
