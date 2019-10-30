import React from 'react';
import { Image } from 'react-native';

import logo from '~/assets/logo.png';

import { Container, Form, FormInput, SubmitButton } from './styles';

export default function SignIn() {
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
        />

        <FormInput icon="lock-outline" secureTextEntry placeholder="Password" />

        <SubmitButton onPress={() => {}}>Next</SubmitButton>
      </Form>
    </Container>
  );
}
