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
    const [admin, setAdmin] = useState(false);
    const [oldUser, setOldUser] = useState({});

    useEffect(() => {
        fetch('https://floating-hamlet-78764.herokuapp.com/users')
        .then(res => res.json())
        .then(data => setOldUser(data));
    }, [])


    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const microsoftProvider = new OAuthProvider('microsoft.com');
    const yahooProvider = new OAuthProvider('yahoo.com');

    microsoftProvider.setCustomParameters({
        prompt: "consent",
        tenant: "f8cdef31-a31e-4b4a-93e4-5f571e91255a",
      })

    const signInUsingGoogle = (location, history) => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                console.log(oldUser);
                // console.log(oldUser[0].email);
                console.log(oldUser.length);
                // saveUser(user.email, user.displayName, user.phoneNumber, 'PUT');
                setError('');
                // let i;
                // for(i=0; i<oldUser.length; i++){
                //     if(oldUser[i].email === user.email){
                //         console.log(oldUser[i].email);
                //         console.log(user.email);
                //         const destination = location?.state?.from || '/home';
                //         history.replace(destination);
                //     }
                //     else if(i===oldUser.length){
                //         history.replace('/phoneLogin');
                //     }
                // }

                    const res = oldUser.find(ou => ou.email === user.email );
                    console.log(res);
                    if(res === undefined){
                        history.replace('/phoneLogin');
                    }
                    else{
                        const destination = location?.state?.from || '/home';
                        history.replace(destination);
                    }

                // oldUser.map(ou => <UserCheck
                //     key = {ou._id}
                //     ou={ou}
                //     oemail = {user.email}
                //     ></UserCheck>)
                // if(user.email)
                // {
                //     const destination = location?.state?.from || '/';
                //     history.replace(destination);
                // }
                // else{
                    
                // }
                // const destination = location?.state?.from || '/';
                
            }).catch((error) => {
                setError(error.message);
            }).finally(() => { setLoading(false) });
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

    const setUserInfo = () => {
        updateProfile(auth.currentUser, {
            displayName: name
          }).then(() => {
            
          }).catch((error) => {
            setError(error.message)
          });
    }

    const userRegistration = (history) => {
        // e.preventDefault();
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
            const userName = {displayName: name};
            saveUser(email, name, user.phoneNumber, 'POST');
            verifyEmail();
            setError('');
            alert("Registration Successful!");
            history.replace('/phoneLogin');

            setUserInfo();
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

    const signInUsingOTP = (country, name, email, number, captchContainer, location, history) => {
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
                    const user = res.user;
                    user.name = name;
                    user.email = email;
                    console.log(user.phoneNumber);
                    // saveUser(user.email, user.name, user.phoneNumber, 'PUT');
                    setUser(res.user);
                    setError(null);
                    history.push('/detailForm');
                    // ...
                }).catch((error) => {
                    // User couldn't sign in (bad verification code?)
                    // ...
                    alert("Wrong OTP. Please try again.")
                    history.push('/login');
                });
            }).catch((error) => {
                // Error; SMS not sent
                // ...
                setError(error);
            });
    };

    useEffect(() => {
        fetch(`https://floating-hamlet-78764.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])

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

    const saveUser = (email, displayName, phone, method) => {
        const user = { email, displayName, phone};
        fetch('https://floating-hamlet-78764.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }

    return { 
        user, 
        error, 
        loading, 
        userRegistration, 
        getName, 
        getEmail, 
        getPassword, 
        userEmail, 
        userPassword,
        signInWithEmail, 
        signInUsingGoogle,
        signInUsingMicrosoft,
        signInUsingYahoo,
        signInUsingOTP,
        setUserInfo,
        logOut }

}

export default useFirebase;