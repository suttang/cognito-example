import * as React from 'react'
import { connect, MapDispatchToProps } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import styled from 'styled-components'

import Button from '~/components/atoms/Button'
import InputGroup from '~/components/molecules/InputGroup'

import { RootState } from '~/modules';
import { login, Login } from '~/modules/auth'

export interface Props {
  onSubmit: () => any
}

const Container = styled.div`
`

const Login: React.SFC<Props> = ({ onSubmit }) => (
  <Container>
    <Title>Sign in</Title>
    <div>
      <InputGroup label="メールアドレス" type="text" />
      <InputGroup label="パスワード" type="password" />
    </div>
    <Button onClick={onSubmit}>Login</Button>
  </Container>
)

const Title = styled.h1`
  color: #fff;
  text-transform: uppercase;
`

type DispatchProps = Pick<Props, 'onSubmit'>

const mapDispatchToProps: MapDispatchToProps<DispatchProps, {}> = (dispatch: ThunkDispatch<RootState, void, Login>) => ({
  onSubmit: () => dispatch(login({ username: 'tarou', password: 'hoge'}))
})

export default connect(
  () => ({}),
  mapDispatchToProps
)(Login)
