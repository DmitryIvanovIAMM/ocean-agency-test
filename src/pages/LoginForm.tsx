import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  Box,
  Button,
  CircularProgress,
  InputAdornment,
  IconButton,
} from '@mui/material';
import SectionTitle from '../components/SectionTitle/SectionTitle';
import { FormTextInput } from '../components/FormTextInput/FormTextInput';
import SendIcon from '@mui/icons-material/Send';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { FormContainer } from '../components/FormContainer/FormContainer';
import {
  defaultLoginValues,
  LoginFormValues,
  loginSchema,
} from '../models/Login.';
import { redirect } from 'react-router';

export interface LoginFormProps {
  loginRedirectUrl?: string;
  error?: string;
}

const LoginForm = ({ loginRedirectUrl = '/', error = '' }: LoginFormProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [loginError, setLoginError] = React.useState<string>(error);
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const methods = useForm<LoginFormValues>({
    resolver: yupResolver(loginSchema),
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    defaultValues: defaultLoginValues,
    shouldFocusError: true,
    shouldUseNativeValidation: false,
  });
  const { handleSubmit, formState } = methods;
  const onSubmit = async (data: LoginFormValues) => {
    setLoginError('');
    try {
      const result = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      // eslint-disable-next-line no-console
      console.log('Login result: ', result);
      redirect(loginRedirectUrl);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Login failed:', error);
      setLoginError('Login failed. Please try again later.');
      return;
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        padding: '10px',
      }}
    >
      <FormContainer>
        <SectionTitle title="Login Page" />
        <p>Please enter your credentials to log in.</p>
        <FormProvider {...methods}>
          <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
              }}
            >
              <Box sx={{ flex: { xs: '100%', sm: '50%' } }}>
                <FormTextInput name={'email'} label={'Email *'} />
                <FormTextInput
                  name={'password'}
                  label={'Password *'}
                  type={showPassword ? 'text' : 'password'}
                  slotProps={{
                    input: {
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            edge="end"
                            data-testid="password-eye"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    },
                    formHelperText: {
                      style: { marginTop: '12px' },
                    },
                  }}
                />
                <Box
                  sx={{
                    display: 'flex',
                    flex: { xs: '100%' },
                    marginTop: '20px',
                    marginBottom: '20px',
                    justifyContent: 'center',
                  }}
                >
                  <Button
                    type="submit"
                    variant="contained"
                    endIcon={
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          width: '24px',
                          height: '24px',
                        }}
                      >
                        {formState.isSubmitting ? (
                          <CircularProgress
                            size="20px"
                            //sx={{ color: `${primary.contrastText}` }}
                          />
                        ) : (
                          <SendIcon />
                        )}
                      </div>
                    }
                    disabled={formState.isSubmitting || !formState.isValid}
                  >
                    Login
                  </Button>
                </Box>
              </Box>
            </Box>
          </form>
        </FormProvider>
      </FormContainer>
    </Box>
  );
};
export default LoginForm;
