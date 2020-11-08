import styled, { keyframes } from 'styled-components'

export const StyledSpinner = styled.div`
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 101;
  background-color: rgba(256, 256, 256, 0.6);
`

const rotate = keyframes`
  from {
    -webkit-transform: rotate(0deg);
  }

  to {
    -webkit-transform: rotate(360deg);
  }
`

export const Loader = styled.div`
  border: ${({ size }) => size / 12}px solid transparent;
  border-radius: 80%;
  border-top: ${({ size }) => size / 12}px solid ${({ color }) => color};
  border-bottom: ${({ size }) => size / 12}px solid ${({ color }) => color};
  border-left: ${({ size }) => size / 12}px solid ${({ color }) => color};

  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  -webkit-animation: ${rotate} 0.8s linear infinite; /* Safari */
  animation: ${rotate} 0.8s linear infinite;
`
