import styled from "styled-components";

export const Container = styled.div`
  padding: 30px;

  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;

  @media (max-width: 768px) {
    height: 100%;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
  }

  .div-form-1 {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;

    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
    }
  }

  .div-form-2 {
    width: 64%;
    order: none;

    @media (max-width: 768px) {
      width: 110%;
    }
  }

  .div-form-3 {
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 10px;
    border-radius: 12px;

    h3 {
      font-size: 36px;
      color: rgb(0, 6, 92);
    }

    p {
      color: rgba(0, 6, 92, 0.66);
    }

    .div-input {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));

      gap: 20px;

      height: 200px;

      margin-top: 20px;

      @media (max-width: 768px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));

        gap: 10px;
      }
    }

    select {
      height: 30px;
      width: 304px;

      margin-top: 10px;
    }
  }

  .div-info {
    display: flex;
    flex: 1 1 0%;

    align-items: center;
    justify-content: flex-end;
  }
`;

export const Select = styled.select``;

export const Input = styled.input``;

export const Textarea = styled.textarea`
  height: 200px;
`;

export const Button = styled.button`
  max-width: 150px;
  height: 30px;
  border-radius: 5px;
  border: none;

  cursor: pointer;

  background: rgb(6, 120, 214);

  color: #fff;

  font-size: 19px;
  font-weight: 900;

  &:active {
    opacity: 0.4;
  }
`;

export const ContainerInfo = styled.div`
  display: flex;
  flex: 1 1 0%;

  align-items: center;
  justify-content: flex-end;

  order: 1;
  order: none;

  margin-bottom: 32px;

  ul {
    display: flex;
    flex-direction: column;
    gap: 40px;

    li {
      display: flex;
      align-items: center;
      gap: 7px;

      .div-1 {
        width: 72px;
        height: 72px;
        color: rgb(6, 120, 214);
        display: flex;
        align-items: center;
        justify-content: center;

        @media (max-width: 768px) {
          width: 52px;
          height: 52px;
        }

        .div-2 {
          font-size: 28px;
        }
      }

      .div-3 {
        flex: 1 1 0%;

        p {
          color: rgba(0, 6, 92, 0.66);
        }

        h3 {
          font-size: 28px;

          color: rgb(0, 6, 92);

          @media (max-width: 768px) {
            font-size: 20px;
          }
        }
      }
    }
  }
`;
