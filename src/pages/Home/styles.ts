import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`

export const Glass = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem 2.5rem;

  // glass effect:
  background: rgba(255, 255, 255, 0.06);
  border-radius: 15px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(2.3px);
  -webkit-backdrop-filter: blur(2.3px);
  border: 1px solid rgba(255, 255, 255, 0.66);

  img {
    height: 150px;
    width: 220px;
  }

  .sr-only {
    position:absolute;
    left:-10000px;
    top:auto;
    width:1px;
    height:1px;
    overflow:hidden;
  }

  .search {
    display: flex;
    gap: 1rem;
  }
`

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;

  div {
    display: flex;
    gap: 1rem;

    p:first-child {
      font-weight: 700;
    }

    p {
      font-size: 1.5rem;
    }
  }
`