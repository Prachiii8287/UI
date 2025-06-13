import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from './Logo.png';


export default function AuthPage() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    if (isLogin) {
      console.log('Login attempt:', { email: formData.email, password: formData.password });
      navigate('/dashboard');
    } else {
      console.log('Register attempt:', formData);
      navigate('/dashboard');
    }
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setFormData({ name: '', email: '', password: '' });
  };

  const styles = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(100deg, #4f46e5 0%, #7c3aed 50%, #06b6d4 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
    },
    card: {
      width: '100%',
      maxWidth: '1200px',
      background: 'white',
      borderRadius: '24px',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'row',
      minHeight: '600px'
    },
    leftSide: {
      flex: '1',
      background: '#7E44EE',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px',
      color: 'white',
      textAlign: 'center'
    },
    illustration: {
      position: 'relative',
      zIndex: 10
    },
    illustrationCircle: {
      width: '200px',
      height: '200px',
      margin: '0 auto 32px',
      position: 'relative'
    },
    circle1: {
      position: 'absolute',
      inset: '0',
      background: 'rgba(255, 255, 255, 0.2)',
      borderRadius: '50%',
      animation: 'pulse 2s infinite'
    },
      logoImage: {
  width: '60px',
  height: '60px',
  objectFit: 'contain', // Maintains aspect ratio
  borderRadius: '4px' // Optional: slight rounding
},
    circle2: {
      position: 'absolute',
      inset: '16px',
      background: 'rgba(255, 255, 255, 0.3)',
      borderRadius: '50%',
      animation: 'pulse 2s infinite 0.5s'
    },
    circle3: {
      position: 'absolute',
      inset: '32px',
      background: 'rgba(255, 255, 255, 0.4)',
      borderRadius: '50%',
      animation: 'pulse 2s infinite 1s'
    },
    centerIcon: {
      position: 'absolute',
      inset: '0',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    iconBox: {
      width: '80px',
      height: '80px',
      background: 'rgba(255, 255, 255, 0.9)',
      borderRadius: '16px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transform: 'rotate(12deg)',
      transition: 'transform 0.5s ease',
      cursor: 'pointer'
    },
    iconBoxHover: {
      transform: 'rotate(0deg)'
    },
    userIcon: {
      width: '40px',
      height: '40px',
      color: '#4f46e5'
    },
    leftTitle: {
      fontSize: '32px',
      fontWeight: 'bold',
      marginBottom: '16px'
    },
    leftSubtitle: {
      fontSize: '18px',
      opacity: 0.9,
      maxWidth: '300px',
      margin: '0 auto',
      lineHeight: '1.6'
    },
    decorativeElement1: {
      position: 'absolute',
      top: '40px',
      left: '40px',
      width: '60px',
      height: '60px',
      background: 'rgba(255, 255, 255, 0.1)',
      borderRadius: '50%',
      animation: 'bounce 2s infinite 1s'
    },
    decorativeElement2: {
      position: 'absolute',
      bottom: '40px',
      right: '40px',
      width: '48px',
      height: '48px',
      background: 'rgba(255, 255, 255, 0.1)',
      borderRadius: '50%',
      animation: 'bounce 2s infinite 2s'
    },
    decorativeElement3: {
      position: 'absolute',
      top: '50%',
      left: '20px',
      width: '36px',
      height: '36px',
      background: 'rgba(255, 255, 255, 0.1)',
      borderRadius: '50%',
      animation: 'bounce 2s infinite 1.5s'
    },
    rightSide: {
      flex: '1',
      padding: '50px 50px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    },
    formContainer: {
      maxWidth: '500px',
      margin: '0 auto',
      width: '100%'
    },
    header: {
      textAlign: 'center',
      marginBottom: '40px'
    },
    title: {
      fontSize: '32px',
      fontWeight: 'bold',
      color: '#1f2937',
      marginBottom: '8px'
    },
    subtitle: {
      color: '#6b7280',
      fontSize: '10px'
    },
    formGroup: {
      marginBottom: '24px'
    },
    nameGroup: {
      marginBottom: '24px',
      transform: isLogin ? 'translateY(-10px)' : 'translateY(0)',
      opacity: isLogin ? 0 : 1,
      height: isLogin ? '0' : 'auto',
      overflow: 'hidden',
      transition: 'all 0.3s ease'
    },
    label: {
      display: 'block',
      fontSize: '14px',
      fontWeight: '500',
      color: '#374151',
      marginBottom: '8px'
    },
    inputWrapper: {
      position: 'relative'
    },
    input: {
      width: '100%',
      padding: '12px 10px 10px 40px',
      border: '2px solid #e5e7eb',
      borderRadius: '12px',
      fontSize: '14px',
      background: '#f9fafb',
      transition: 'all 0.2s ease',
      outline: 'none',
      boxSizing: 'border-box'
    },
    inputFocus: {
      borderColor: '#4f46e5',
      background: 'white',
      boxShadow: '0 0 0 3px rgba(79, 70, 229, 0.1)'
    },
    inputIcon: {
      position: 'absolute',
      left: '12px',
      top: '50%',
      transform: 'translateY(-50%)',
      color: '#9ca3af',
      width: '20px',
      height: '20px'
    },
    passwordToggle: {
      position: 'absolute',
      right: '12px',
      top: '50%',
      transform: 'translateY(-50%)',
      background: 'none',
      border: 'none',
      color: '#9ca3af',
      cursor: 'pointer',
      padding: '4px',
      borderRadius: '4px',
      transition: 'color 0.2s ease'
    },
    passwordToggleHover: {
      color: '#6b7280'
    },
    submitButton: {
      width: '100%',
      background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)',
      color: 'white',
      padding: '12px 24px',
      borderRadius: '12px',
      border: 'none',
      fontSize: '16px',
      fontWeight: '600',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      transition: 'all 0.2s ease',
      boxShadow: '0 4px 12px rgba(79, 70, 229, 0.4)'
    },
    submitButtonHover: {
      transform: 'translateY(-2px)',
      boxShadow: '0 8px 20px rgba(79, 70, 229, 0.4)'
    },
    toggleSection: {
      textAlign: 'center',
      marginTop: '24px'
    },
    toggleText: {
      color: '#6b7280',
      marginBottom: '16px'
    },
    toggleButton: {
      color: '#4f46e5',
      background: 'none',
      border: 'none',
      fontSize: '16px',
      fontWeight: '600',
      cursor: 'pointer',
      textDecoration: 'underline',
      transition: 'color 0.2s ease'
    },
    toggleButtonHover: {
      color: '#4338ca'
    },
    forgotPassword: {
      marginTop: '24px',
      textAlign: 'center'
    },
    forgotLink: {
      color: '#4f46e5',
      textDecoration: 'none',
      fontSize: '14px',
      transition: 'color 0.2s ease'
    },
    forgotLinkHover: {
      color: '#4338ca'
    },
    // Responsive styles
    '@media (max-width: 768px)': {
      card: {
        flexDirection: 'column',
        maxWidth: '100%',
        margin: '10px'
      },
      leftSide: {
        padding: '10px 10px'
      },
      rightSide: {
        padding: '10px 10px'
      },
      leftTitle: {
        fontSize: '24px'
      },
      title: {
        fontSize: '24px'
      }
    }
  };

  // Add keyframes for animations
  const keyframes = `
    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.5; }
    }
    @keyframes bounce {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    }
    @media (max-width: 768px) {
      .auth-card {
        flex-direction: column !important;
      }
    }
  `;
  const LogoComponent = () => (
  <img 
    src={Logo} 
    alt="Company Logo" 
    style={styles.logoImage}
  />
);

  const UserIcon = () => (
    <svg style={styles.userIcon} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
    </svg>
  );

  const MailIcon = () => (
    <svg style={styles.inputIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );

  const LockIcon = () => (
    <svg style={styles.inputIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </svg>
  );

  const EyeIcon = () => (
    <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
  );

  const EyeOffIcon = () => (
    <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
    </svg>
  );

  const ArrowRightIcon = () => (
    <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
    </svg>
  );

  return (
    <div>
      <style>{keyframes}</style>
      <div style={styles.container}>
        <div style={styles.card} className="auth-card">
          {/* Left Side - Illustration */}
          <div style={styles.leftSide}>
            <div style={styles.illustration}>
              <div style={styles.illustrationCircle}>
                <div style={styles.circle1}></div>
                <div style={styles.circle2}></div>
                <div style={styles.circle3}></div>
                <div style={styles.centerIcon}>
                  <div style={styles.iconBox}>
                     <LogoComponent />
                  </div>
                </div>
              </div>
              <h2 style={styles.leftTitle}>
                {isLogin ? 'Welcome Back!' : 'Welcome!'}
              </h2>
              <p style={styles.leftSubtitle}>
                {isLogin 
                  ? 'Sign in to access your account and continue your journey with us.'
                  : 'Create your account and start your amazing journey with our platform.'
                }
              </p>
            </div>
            
            {/* Decorative elements */}
            <div style={styles.decorativeElement1}></div>
            <div style={styles.decorativeElement2}></div>
            <div style={styles.decorativeElement3}></div>
          </div>

          {/* Right Side - Form */}
          <div style={styles.rightSide}>
            <div style={styles.formContainer}>
              <div style={styles.header}>
                <h1 style={styles.title}>
                  {isLogin ? 'Sign In' : 'Register'}
                </h1>
              </div>

              <div>
                {/* Name field - only shown for register */}

                {/* ---------------------------------------------------------------------------- */}

{/* Row 1: First Name & Last Name */}
{!isLogin && (
  <div style={{ display: 'flex', gap: '1rem' }}>
    <div style={{ ...styles.formGroup, flex: 1 }}>
      <label style={styles.label} htmlFor="firstName">First Name</label>
      <div style={styles.inputWrapper}>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
          style={styles.input}
          placeholder="Enter your first name"
          required
        />
      </div>
    </div>

    <div style={{ ...styles.formGroup, flex: 1 }}>
      <label style={styles.label} htmlFor="lastName">Last Name</label>
      <div style={styles.inputWrapper}>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
          style={styles.input}
          placeholder="Enter your last name"
          required
        />
      </div>
    </div>
  </div>
)}

{/* Row 2: Company Name & Email */}
<div style={{ display: 'flex', gap: '1rem' }}>
  <div style={{ ...styles.formGroup, flex: 1 }}>
    <label style={styles.label} htmlFor="companyName">Company Name</label>
    <div style={styles.inputWrapper}>
      <input
        type="text"
        id="companyName"
        name="companyName"
        value={formData.companyName}
        onChange={handleInputChange}
        style={styles.input}
        placeholder="Enter your company name"
        required={!isLogin}
      />
    </div>
  </div>

  <div style={{ ...styles.formGroup, flex: 1 }}>
    <label style={styles.label} htmlFor="email">Email Address</label>
    <div style={styles.inputWrapper}>
      <MailIcon />
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        style={styles.input}
        placeholder="Enter your email"
        required
      />
    </div>
  </div>
</div>

{/* Row 3: Password & Confirm Password */}
<div style={{ display: 'flex', gap: '1rem' }}>
  <div style={{ ...styles.formGroup, flex: 1 }}>
    <label style={styles.label} htmlFor="password">Password</label>
    <div style={styles.inputWrapper}>
      <LockIcon />
      <input
        type={showPassword ? 'text' : 'password'}
        id="password"
        name="password"
        value={formData.password}
        onChange={handleInputChange}
        style={styles.input}
        placeholder="Enter your password"
        required
      />
      <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        style={styles.passwordToggle}
      >
        {showPassword ? <EyeOffIcon /> : <EyeIcon />}
      </button>
    </div>
  </div>

  <div style={{ ...styles.formGroup, flex: 1 }}>
    <label style={styles.label} htmlFor="confirmPassword">Confirm Password</label>
    <div style={styles.inputWrapper}>
      <LockIcon />
      <input
        type={showPassword ? 'text' : 'password'}
        id="confirmPassword"
        name="confirmPassword"
        value={formData.confirmPassword}
        onChange={handleInputChange}
        style={styles.input}
        placeholder="Re-enter your password"
        required
      />
    </div>
  </div>
</div>



                {/* ----------------------------------------------------------------------- */}

                {/* Submit button */}
                <button
                  type="button"
                  onClick={handleSubmit}
                  style={styles.submitButton}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 8px 20px rgba(79, 70, 229, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 4px 12px rgba(79, 70, 229, 0.4)';
                  }}
                >
                  {isLogin ? 'Sign In' : 'Create Account'}
                  <ArrowRightIcon />
                </button>

                {/* Toggle button */}
                <div style={styles.toggleSection}>
                  <p style={styles.toggleText}>
                    {isLogin ? "Don't have an account?" : "Already have an account?"}
                  </p>
                  <button
                    type="button"
                    onClick={toggleMode}
                    style={styles.toggleButton}
                    onMouseEnter={(e) => e.target.style.color = '#4338ca'}
                    onMouseLeave={(e) => e.target.style.color = '#4f46e5'}
                  >
                    {isLogin ? 'Create Account' : 'Sign In'}
                  </button>
                </div>
              </div>

              {/* Additional features for login */}
              {isLogin && (
                <div style={styles.forgotPassword}>
                  <a 
                    href="#" 
                    style={styles.forgotLink}
                    onMouseEnter={(e) => e.target.style.color = '#4338ca'}
                    onMouseLeave={(e) => e.target.style.color = '#4f46e5'}
                  >
                    Forgot your password?
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}