import { useState, useEffect } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, sendEmailVerification, signOut, RecaptchaVerifier, signInWithPhoneNumber, OAuthProvider } from "firebase/auth";
import initializeAuthentication from '../Firebase/firebase.init.js';

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const [name, setName] = useState('')
    const [error, setError] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [useremail, setuserEmail] = useState("");
    const [userpassword, setuserPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [code, setCode] = useState("");
    const [signin, setSignin] = useState("");

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const microsoftProvider = new OAuthProvider('microsoft.com');
    const yahooProvider = new OAuthProvider('yahoo.com');

    microsoftProvider.setCustomParameters({
        prompt: "consent",
        tenant: "f8cdef31-a31e-4b4a-93e4-5f571e91255a",
      })

    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider)
            .finally(() => { setLoading(false) });
    }

    const signInUsingMicrosoft = () => {
        return signInWithPopup(auth, microsoftProvider)
            .finally(() => { setLoading(false) });
    }

    const signInUsingYahoo = () => {
        return signInWithPopup(auth, yahooProvider)
            .finally(() => { setLoading(false) });
    }

    const getName = e =>{
        setName(e.target.value);
    }

    const getEmail = e =>{
        setEmail(e.target.value);
    }

    const getPassword = e =>{
        setPassword(e.target.value);
    }

    const userEmail = e => {
        setuserEmail(e.target.value)
    }

    const userPassword = e => {
        setuserPassword(e.target.value)
    }

    const getPhone = e => {
        console.log(e.target.value)
        setPhone(e.target.value);
    }

    const getCode = e => {
        setCode(e.target.value);
    }

    const sign = e => {
        console.log(e.target.value)
        setSignin(e.target.value);
    }

    const setUserInfo = () => {
        updateProfile(auth.currentUser, {
            displayName: name
          }).then(() => {
            
          }).catch((error) => {
            setError(error.message)
          });
    }

    const userRegistration = e => {
        e.preventDefault();
        console.log(email, password);
        if(email.length === 0){
            setError("Please enter your email")
            return;
        }
        if(password.length === 0){
            setError("Please enter a password");
            return;
        }
        if(password.length < 6){
            setError("Password should be at least 6 charecters");
            return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('Password Must contain 2 upper case');
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            setUserInfo();
            const user = result.user;
            console.log(user);
            verifyEmail();
            setError('');
            alert("Registration Successful!");
        })
        .catch((error) => {
            setError(error.message);
        })
    }
    
    const signInWithEmail = e => {
        e.preventDefault();
        if(useremail.length === 0){
            setError("Please give your email")
            return;
        }
        if(userpassword.length === 0){
            setError("Please give your password")
            return;
        }
        signInWithEmailAndPassword(auth, useremail, userpassword)
        .then(result => {
            const user = result.user;
            console.log(user);
            setUser(result.user)
            setError('');
        })
        .catch((error) => {
            setError(error.message);
        })
    }

      const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
          .then(result => {
            console.log(result);
          })
      }

    //   const recaptcha = () => {
    //     window.recaptchaVerifier = new RecaptchaVerifier(sign, {
    //         'size': 'invisible',
    //         'callback': (response) => {
    //           // reCAPTCHA solved, allow signInWithPhoneNumber.
    //           submitPhoneNumberAuth();
    //         }
    //       }, auth);
    //   }
       

    //     const submitPhoneNumberAuth = e => {
    //         // We are using the test phone numbers we created before
    //         // var phoneNumber = document.getElementById("phoneNumber").value;
    //         var phoneNumber = '+16005551234';
    //         e.preventDefault();
    //         var appVerifier = window.recaptchaVerifier;

    //         signInWithPhoneNumber(auth, getPhone, appVerifier)
    //         // signInWithPhoneNumber(auth, phoneNumber, appVerifier)
    //         .then((confirmationResult) => {
    //             // SMS sent. Prompt user to type the code from the message, then sign the
    //             // user in with confirmationResult.confirm(code).
    //             window.confirmationResult = confirmationResult;
    //             // ...
    //           }).catch((error) => {
    //             // Error; SMS not sent
    //             // ...
    //           });
    //     }

    //     const submitPhoneNumberAuthCode = (confirmationResult) => {
    //         // We are using the test code we created before
    //         // var code = document.getElementById("code").value;
    //         var code = '123456';
    //         confirmationResult.confirm(getCode).then((result) => {
    //             // confirmationResult.confirm(code).then((result) => {
    //             // User signed in successfully.
    //             const user = result.user;
    //             console.log(user);
    //             setUser(result.user)
    //             setError('');
    //             // ...
    //           }).catch((error) => {
    //             // User couldn't sign in (bad verification code?)
    //             // ...
    //           });
    //     }

    const signInUsingOTP = (country, number, captchContainer, location, history) => {
        const appVerifier = new RecaptchaVerifier(captchContainer, {
            'size': 'normal',
            'callback': (response) => {
                // reCAPTCHA solved, allow signInWithPhoneNumber.
                // ...
                // console.log(response);


            },
            'expired-callback': () => {
                // Response expired. Ask user to solve reCAPTCHA again.
                // ...

            }
        }, auth);
        signInWithPhoneNumber(auth, country + number, appVerifier)
            .then((confirmationResult) => {
                // SMS sent. Prompt user to type the code from the message, then sign the
                // user in with confirmationResult.confirm(code).
                // ...
                const code = prompt("enter otp");
                confirmationResult.confirm(code).then((res) => {
                    // User signed in successfully.
                    setUser(res.user);
                    setError(null);
                    const destination = location?.state?.from || '/';
                    history.replace(destination);
                    // ...
                }).catch((error) => {
                    // User couldn't sign in (bad verification code?)
                    // ...
                    console.log(error);
                });
            }).catch((error) => {
                // Error; SMS not sent
                // ...
                setError(error);
            });
    };

    const logOut = () => {
        setLoading(true);
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .finally(() => setLoading(false))
    }

    // observe whether user state changed or not
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setLoading(false);
        });
        return () => unsubscribed;
    }, [])

    return { 
        user, 
        error, 
        loading, 
        sign,
        userRegistration, 
        getName, 
        getEmail, 
        getPassword, 
        userEmail, 
        userPassword,
        getPhone,
        getCode,
        signInWithEmail, 
        signInUsingGoogle,
        signInUsingMicrosoft,
        signInUsingYahoo,
        signInUsingOTP,
        // submitPhoneNumberAuth,
        // submitPhoneNumberAuthCode,
        // recaptcha,
        logOut }

}

export default useFirebase;