import HomeLayout from '../../components/HomeLayout'
import HomeIllustration from '../../images/illustrations/illustration-home.webp'
import { FadeInRight, FadeInLeft } from 'animate-css-styled-components'
import LogoGreenThumb from '../../images/logo-greenthumb.svg'
import Button from '../../components/Button/Button'
import { Link } from 'react-router-dom'
import * as S from './styles'

const HomePage = () => (
  <HomeLayout>
    <S.Header>
      <FadeInLeft duration='0.5s' delay='.2s'>
        <S.Logo src={LogoGreenThumb} alt='Logo' />
      </FadeInLeft>
      <FadeInLeft duration='0.5s' delay='.5s'>
        <S.Title>Find your next green friend</S.Title>
      </FadeInLeft>
      <FadeInLeft duration='0.5s' delay='.7s'>
        <Link to="/wizard">
          <Button icon='right'>
            start quizz
          </Button>
        </Link>
      </FadeInLeft>
    </S.Header>
    <S.Main>
      <FadeInRight duration='0.5s' delay='.5s'>
        <S.Img src={HomeIllustration} alt='Plants' />
      </FadeInRight>
    </S.Main>
  </HomeLayout>
)

export default HomePage
