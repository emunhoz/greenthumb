import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  max-width: 864px;
  overflow: auto;
  margin-bottom: 38px;
`

export const ProductCard = styled.div`
  display: flex;
  flex-flow: column;
  background: var(--white);
  box-shadow: 0px 28px 38px rgba(0, 0, 0, 0.0925754);
  border-radius: 5px;
  height: 100%;
  max-height: 342px;
  padding: 28px;
  margin-right: 30px;

  &:hover {
    cursor: pointer;
  }
`

export const Img = styled.img`
  max-height: 168px;
`

export const Title = styled.h3`
  color: var(--primary);
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
`

export const Features = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`

export const Price = styled.span`
  font-weight: 300;
  font-size: 18px;
  line-height: 28px;
  color: var(--text);
`

export const Icons = styled.span`
  display: flex;
`
