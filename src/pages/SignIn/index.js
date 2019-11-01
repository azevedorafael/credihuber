import React, { useRef, useState } from 'react';
import { Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import logo from '~/assets/logo.png';

import { signInRequest } from '~/store/modules/auth/actions';

import { Container, Form, FormInput, SubmitButton } from './styles';

export default function SignIn() {
  const dispatch = useDispatch();
  const passwordRef = useRef();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loading = useSelector(state => state.auth.loading);

  function handleSubmit() {
    dispatch(signInRequest(email, password));
  }

  return (
    <Container>
      <Image source={logo} style={{ width: 150, height: 150 }} />

      <Form>
        <FormInput
          icon="mail-outline"
          keyboardType="email-address"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Your Github email address"
          returnKeyType="next"
          onSubmitEditing={() => passwordRef.current.focus()}
          value={email}
          onChangeText={setEmail}
        />

        <FormInput
          icon="lock-outline"
          secureTextEntry
          placeholder="Password"
          ref={passwordRef}
          returnKeyType="send"
          onSubmitEditing={handleSubmit}
          value={password}
          onChangeText={setPassword}
        />

        <SubmitButton loading={loading} onPress={handleSubmit}>
          Next
        </SubmitButton>
      </Form>
    </Container>
  );
}
