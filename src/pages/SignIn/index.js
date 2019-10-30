import React, { useRef } from 'react';
import { Image } from 'react-native';

import logo from '~/assets/logo.png';

import { Container, Form, FormInput, SubmitButton } from './styles';

export default function SignIn() {
  const passwordRef = useRef();

  function handleSubmit() {}

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
        />

        <FormInput
          icon="lock-outline"
          secureTextEntry
          placeholder="Password"
          ref={passwordRef}
          returnKeyType="send"
          onSubmitEditing={handleSubmit}
        />

        <SubmitButton onPress={handleSubmit}>Next</SubmitButton>
      </Form>
    </Container>
  );
}
