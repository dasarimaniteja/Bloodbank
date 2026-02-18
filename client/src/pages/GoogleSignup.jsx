import { Link, useNavigate, useLocation } from 'react-router-dom';
import styles from './auth.module.css';
import { motion } from 'framer-motion';
import { jwtDecode } from 'jwt-decode';
import axios from "axios";
import { useState } from 'react';
import React from 'react';

const GoogleSignup = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [coords,setCoords]=useState({latitude:null,longitude:null});
  const googleclient = location?.state;

  if (!googleclient || !googleclient.credential) {
    return <p style={{ textAlign: "center", color: "red" }}>Missing Google credentials. Please login again.</p>;
  }

  const userdetails = jwtDecode(googleclient.credential);
  console.log("Decoded user:", userdetails);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const dName = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const street = formData.get('street');
    const city = formData.get('city');
    const state = formData.get('state');
    const zip = formData.get('zip');
    const preferred_notification = formData.get('preferred_notification');
    const blood_group = formData.get('blood_group');
    const password = "google"; 
    const coordinates={lat:coords.latitude,lng:coords.longitude};
    const user = {
      dName,
      email,
      phone,
      location_info : {
        street,
        city,
        state,
        zip
      },
      blood_group,
      preferred_notification,
      password,
      coordinates,
    };

    // console.log('Form submitted:', user);

    try {
      const response = await axios.post("http://localhost:5000/api/donors", user);
      if (response.data.message === "Donor added successfully") {
        navigate("/donor");
      } else {
        console.error("Signup error:", response.data.message);
      }
    } catch (error) {
      console.error("Axios error during signup:", error.message);
    }
  };

  React.useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCoords({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          });
        },
        (error) => {
          console.error("Error getting location:", error);
          toast.error("Please enable location access for better experience");
        }
      );
    } else {
      toast.error("Geolocation is not supported by this browser.");
    }
  }, []);
  

  return (
    <div className={styles.authContainer}>
      <motion.div
        className={styles.formCard}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className={styles.title}>Enter your details</h1>
        
        <div className={styles.profilepic} style={{ display: "flex", justifyContent: "center" }}>
          <img 
            src={userdetails.picture} 
            alt="User Profile" 
            style={{ width: "100px", height: "100px", borderRadius: "50%" }} 
          />
        </div>

        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className={styles.inputField}
              defaultValue={userdetails.name}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              className={styles.inputField}
              defaultValue={userdetails.email}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="phone">Mobile Number</label>
            <input
              type="text"
              id="phone"
              name="phone"
              className={styles.inputField}
              required
            />
          </div>

          <div className={styles.formGroup}>
             <label htmlFor="street">Street</label>
              <input
              type="text"
              id="street"
              name="street"
              className={styles.inputField}
              required
            />
          </div>

          <div className={styles.formGroup}>
             <label htmlFor="city">City</label>
             <input
              type="text"
              id="city"
              name="city"
              className={styles.inputField}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="state">State</label>
            <input
              type="text"
              id="state"
              name="state"
              className={styles.inputField}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="zip">ZIP Code</label>
            <input
              type="text"
              id="zip"
              name="zip"
              className={styles.inputField}
              required
            />
          </div>
          <div className={styles.two}>
          <div className={styles.formGroup}>
            <label htmlFor="blood">Blood Group</label>
            <select 
            id="blood"
            name='blood_group'
            className={styles.dropDown}
            required
            >
              <option value="">-- Select --</option>
              <option value="A+">A+</option>
              <option value="B+">B+</option>
              <option value="O+">O+</option>
              <option value="AB+">AB+</option>
              <option value="A-">A-</option>
              <option value="B-">B-</option>
              <option value="O-">O-</option>
              <option value="AB-">AB-</option>

            </select>
          </div>
          <div className={styles.formGroup}>
           <label htmlFor="notification">Preferred Notification</label>
            <select
              id="notification"
              name="preferred_notification"
              className={styles.dropDown}
              required
            >
             <option value="">-- Select --</option>
             <option value="Email">Email</option>
             <option value="SMS">SMS</option>
             <option value="WhatsApp">WhatsApp</option>
            </select>
          </div>
          </div>

          <motion.button
            className={styles.submitButton}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
          >
            Sign Up
          </motion.button>
        </form>

        <p className={styles.switchText}>
          Already have an account?{" "}
          <Link to="/VLogin" className={styles.switchLink}>Sign In</Link>
        </p>
      </motion.div>
    </div>
  );
};

export default GoogleSignup;
