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
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export interface LoginFormProps {
  loginRedirectUrl?: string;
  error?: string;
}

const LoginForm = ({ loginRedirectUrl = '/', error = '' }: LoginFormProps) => {
  const navigate = useNavigate();
  const { login } = useAuth();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [loginError, setLoginError] = React.useState<string>(error);
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const methods = useForm<LoginFormValues>({
    resolver: yupResolver(loginSchema),
    mode: 'onChange',
    reValidateMode: 'onChange',
    defaultValues: defaultLoginValues,
    shouldFocusError: true,
    shouldUseNativeValidation: false,
  });
  const { handleSubmit, formState } = methods;
  const onSubmit = async (data: LoginFormValues) => {
    console.log('onSubmit().  data: ', data);
    setLoginError('');
    const result = await login(data);
    console.log('LoginFom() login result: ', result);
    if (!result.success) {
      // eslint-disable-next-line no-console
      console.error('Login failed:', error);
      setLoginError(result?.message || 'Login failed. Please try again later.');
    } else {
      navigate(loginRedirectUrl);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '64px',
        height: '50vh',
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
                {loginError && (
                  <Box
                    sx={{
                      color: 'error.main',
                      marginTop: '10px',
                      textAlign: 'center',
                    }}
                  >
                    {loginError}
                  </Box>
                )}
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
