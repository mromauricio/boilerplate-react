import * as S from '../components/Main/styles'

export default function Home() {
  return (
    <S.Wrapper>
      <S.Logo
        src="/img/logo.svg"
        alt="Imagem de um átomo e React Avançado escrito ao lado."
      />
      <S.Title>React Avançado</S.Title>
      <S.Description>
        TypeScript, RactJS, NextJS e Styled Components
      </S.Description>
      <S.Illustration
        src="img/hero-illustration.svg"
        alt="Imagem de um átomo e React Avançado escrito ao lado."
      />
    </S.Wrapper>
  )
}
