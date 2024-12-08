import styled from "styled-components";

export const FooterContainer = styled.div`
  background-color: var(--color-secondary--dark--alpha);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px;

  img {
    width: 50px;
    margin-top: 25px;
    transition: width 0.3s ease;

    @media (max-width: 1100px) {
      width: 45px;
    }
  }
`;