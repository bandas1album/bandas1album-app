import styled from 'styled-components'
import { Button } from '../../styles/resets'

export const TabsPanel = styled.header`
  position: fixed;
  bottom: 16px;
  left: 0;
  right: 0;
  z-index: 2;
  width: calc(100% - 32px);
  max-width: 768px;
  margin: 0 auto;
`

export const TabsWrapper = styled.div<{ $opened: boolean }>`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  padding: 0 32px;
  background-color: var(--color-light);
  transition: 0.2s border-radius ease;
  box-shadow: 0 8px 16px rgba(#000, 0.1);
  ${(props) =>
    props.$opened ? 'border-radius: 0 0 16px 16px;' : 'border-radius: 16px;'}
`

export const TabsItem = styled.div<{ $opened: boolean }>`
  display: block;
  position: absolute;
  bottom: 80px;
  left: 0;
  right: 0;
  width: 100%;
  pointer-events: none;
  opacity: 0;
  transition: 0.2s transform ease, 0.2s opacity ease;
  transform: translateY(50%);

  ${(props) =>
    props.$opened
      ? `
    pointer-events: all;
    opacity: 1;
    transform: translateY(0);
  `
      : ''}
`

export const TabsButton = styled(Button)<{ $active: boolean }>`
  position: relative;
  display: flex;
  color: var(--color-primary);

  &:hover {
    color: var(--color-primary-tint);
  }

  &:active {
    color: var(--color-primary-shade);
  }

  svg {
    width: 32px;
    height: 32px;
  }

  &::after {
    content: ${(props) => (props.$active ? '""' : 'none')};
    position: absolute;
    bottom: -12px;
    left: 0;
    right: 0;
    width: 6px;
    height: 6px;
    margin: 0 auto;
    border-radius: 50%;
    background-color: var(--color-warning);
  }
`

export const TabsLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: var(--color-light);
  transform: translateY(-20px);
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='54' height='72' fill='none'%3E%3Cg fill='%2324214C' clip-path='url(%23a)'%3E%3Cpath fill-rule='evenodd' d='M9.514 46.43a1.56 1.56 0 0 1-3.106-.3l1.528.14-1.527-.14v-.014l.003-.018a3.304 3.304 0 0 1 .026-.199c.02-.121.049-.285.095-.491.092-.412.25-.99.516-1.719.535-1.46 1.506-3.526 3.265-6.096 1.712-2.503 2.915-4.044 3.707-4.973.396-.465.692-.78.9-.989a6.739 6.739 0 0 1 .362-.336l.012-.01.006-.005.002-.002h.002s.001-.002.975 1.216l-.974-1.218a1.56 1.56 0 0 1 1.958 2.43c-.021.019-.066.06-.137.13-.14.142-.38.395-.732.807-.703.825-1.84 2.274-3.507 4.711-1.62 2.368-2.469 4.203-2.909 5.407-.22.602-.34 1.049-.402 1.327a4.643 4.643 0 0 0-.063.341Z' clip-rule='evenodd'/%3E%3Cpath d='M35.13 20.214c-3.1-.38-6.375-.172-9.648.616l-.505 2.729a1.56 1.56 0 0 1-.49 2.642l-.123.668 1.155 1.468a1.04 1.04 0 0 1 .074 2.038l-.011.003a5.527 5.527 0 0 0-.483.169c-.351.14-.881.383-1.561.784l-1.266 6.833c3.33-2.19 7.252-2.612 10.2-1.184l2.659-16.766Z'/%3E%3Cpath fill-rule='evenodd' d='m33.378 37.498 2.72-17.145c4.626.76 8.811 2.867 11.949 6.351 8.646 9.602 6.054 26.031-5.789 36.694C30.415 74.063 13.806 74.922 5.16 65.32c-8.646-9.603-6.054-26.031 5.788-36.695 4.102-3.692 8.775-6.21 13.491-7.524l-.385 2.077a1.565 1.565 0 0 0-.274.007l.103.92-.104-.92h-.007l-.01.002-.025.003a3.977 3.977 0 0 0-.292.048c-.183.035-.433.091-.746.178-.626.175-1.5.476-2.578.99-2.157 1.03-5.11 2.904-8.506 6.3-2.048 2.049-3.903 4.896-5.22 7.157a62.852 62.852 0 0 0-2.025 3.776l-.117.24-.03.066-.01.017-.003.008a1.56 1.56 0 0 0 2.824 1.325l.001-.003.006-.012.026-.054.105-.218a59.766 59.766 0 0 1 1.92-3.576c1.28-2.2 2.973-4.764 4.73-6.52l.146-.145 1.917 2.437c-1.307 1.472-2.512 3.351-3.38 4.838a49.91 49.91 0 0 0-1.433 2.633l-.02.042-.006.011-.002.005.934.457-.934-.457a1.04 1.04 0 0 0 1.868.913v-.002l.005-.008.017-.036.072-.142a47.729 47.729 0 0 1 1.294-2.366c.857-1.467 1.998-3.233 3.183-4.556 1.916-2.14 3.6-3.553 4.927-4.479l-1.288 6.955c-.154.127-.307.259-.457.394-4.5 4.045-5.489 10.282-2.209 13.93 3.28 3.649 9.586 3.327 14.086-.718s5.489-10.282 2.209-13.93a7.308 7.308 0 0 0-1.373-1.19Zm9.143 6.11-.002.01-.002.02-.004.02a11.156 11.156 0 0 1-.179.836c-.147.581-.4 1.42-.82 2.436-.84 2.03-2.351 4.767-5.028 7.574-2.724 2.562-4.97 3.96-6.522 4.717-.777.378-1.38.596-1.784.719a6.072 6.072 0 0 1-.557.142l-.023.004h-.002a.489.489 0 0 0 .139.967l-.07-.484.07.484h.002l.005-.002.012-.002.02-.003.02-.004a7.052 7.052 0 0 0 .668-.169 13.232 13.232 0 0 0 1.927-.775c1.648-.803 3.979-2.261 6.774-4.892a.535.535 0 0 0 .018-.019c2.777-2.908 4.351-5.756 5.233-7.883.44-1.064.707-1.948.865-2.57a12.083 12.083 0 0 0 .197-.922l.008-.054.002-.015v-.007l-.483-.064.484.064a.488.488 0 0 0-.968-.127Zm5.23-.42a.488.488 0 0 0-.55.417v.003l-.003.013-.004.029-.005.03a15.815 15.815 0 0 1-.253 1.162c-.205.8-.554 1.945-1.125 3.315-1.143 2.739-3.176 6.373-6.734 9.932-3.24 3.24-6.003 4.976-7.94 5.9-.969.462-1.732.722-2.247.866a7.265 7.265 0 0 1-.721.163 1.315 1.315 0 0 1-.031.005h-.005a.489.489 0 0 0 .108.97l-.054-.484.054.485h.004l.004-.001.015-.002.05-.007a8.247 8.247 0 0 0 .838-.189 15.012 15.012 0 0 0 2.405-.925c2.042-.975 4.896-2.776 8.21-6.09 3.664-3.665 5.762-7.412 6.945-10.248a25.497 25.497 0 0 0 1.17-3.448 16.817 16.817 0 0 0 .27-1.246l.011-.07.003-.02.001-.006v-.002l-.483-.068.483.068a.488.488 0 0 0-.416-.551Z' clip-rule='evenodd'/%3E%3Cpath d='m4.21 41.97 1.412.663-1.412-.663ZM31.525 42.95c-.406 2.447-.566 4.27-1.383 5.375-.816 1.105-1.934 1.586-3.67 1.586-.967 0-2.798 0-4.14-1.342-1.342-1.342-1.342-3.05-.946-5.619l5.858-31.632c0-.41-.032-.821-.095-1.232a3.453 3.453 0 0 0-.345-1.136 2.298 2.298 0 0 0-.69-.852c-.294-.221-.67-.332-1.13-.332-.42 0-.827.126-1.225.379a7.314 7.314 0 0 0-1.099.852c-.376.348-.753.742-1.13 1.184l-.784-1.563c2.574-3.062 4.907-5.256 7-6.582C29.86.68 31.837 0 33.679 0c1.088 0 1.977.49 2.668 1.468.69.947 1.036 2.462 1.036 4.546L31.525 42.95Z'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='a'%3E%3Cpath fill='%23fff' d='M0 0h53.207v72H0z'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: center;

  &::before {
    content: '';
    position: absolute;
    top: 32px;
    left: -4px;
    display: block;
    width: 11px;
    height: 8px;
    background-image: url("data:image/svg+xml,%3Csvg width='11' height='8' viewBox='0 0 11 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8.70269 3.31833C7.28544 5.36547 5.15546 6.81027 2.72937 7.37014L3.49691e-07 8L8 8L11 0L8.70269 3.31833Z' fill='white'/%3E%3C/svg%3E%0A");
  }

  &::after {
    content: '';
    position: absolute;
    top: 32px;
    right: -4px;
    display: block;
    width: 11px;
    height: 8px;
    background-image: url("data:image/svg+xml,%3Csvg width='11' height='8' viewBox='0 0 11 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2.29731 3.31833C3.71456 5.36547 5.84454 6.81027 8.27063 7.37014L11 8L3 7.99999L0 0L2.29731 3.31833Z' fill='white'/%3E%3C/svg%3E%0A");
  }
`
