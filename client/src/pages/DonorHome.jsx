import React, { useEffect, useState } from "react";
import styles from "./DonorHome.module.css";
import { motion, AnimatePresence } from "framer-motion";
import { AlertCircle, Search } from "lucide-react";
import Card from "../Components/Card";
import DonorSummary from "../Components/DonorSummary";
import EmergencyAlert from "../Components/EmergencyAlert";
import FilterSection from "../Components/FilterSection";
import Sidebar from "../Components/Sidebar";
import LoadingSkeleton from "../Components/LoadingSkeleton";

const DonorHome = () => {
  const [requests, setRequests] = useState([]);
  const [filteredRequests, setFilteredRequests] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [userLocation, setUserLocation] = useState({ latitude: "", longitude: "" });
  const [showAllRequests, setShowAllRequests] = useState(false);
  const [loading, setLoading] = useState(true);
  const [hasUrgentRequests, setHasUrgentRequests] = useState(false);
  const [showEmergencyAlert, setShowEmergencyAlert] = useState(true);
  const [selectedBloodGroup, setSelectedBloodGroup] = useState("All");
  const [selectedEmergencyLevel, setSelectedEmergencyLevel] = useState("All");
  const [isMobileView, setIsMobileView] = useState(window.matchMedia("(max-width: 768px)").matches);

  const donorData = {
    bloodType: "O+",
    lastDonation: "2024-05-10",
    eligibility: "Eligible",
    totalDonations: 5,
    donorLevel: "Silver",
    progress: 75,
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const handleResize = () => setIsMobileView(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleResize);
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const location = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        };
        setUserLocation(location);
        localStorage.setItem("latitude", location.latitude);
        localStorage.setItem("longitude", location.longitude);
      },
      () => {
        const storedLat = localStorage.getItem("latitude");
        const storedLong = localStorage.getItem("longitude");
        if (storedLat && storedLong) {
          setUserLocation({ latitude: parseFloat(storedLat), longitude: parseFloat(storedLong) });
        } else {
          setUserLocation({ latitude: 17.6868, longitude: 83.2185 }); // Vizag fallback
        }
      }
    );
  }, []);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      await new Promise((res) => setTimeout(res, 1500));

      const mockRequests = [
        { id: 1, medicalFacility: "City Hospital", bloodGroup: "A+", unitsRequired: 3, eLevel: 1, latitude: 12.9716, longitude: 77.5946, postedTime: "2 hours ago" },
        { id: 2, medicalFacility: "Metro Health Center", bloodGroup: "O-", unitsRequired: 2, eLevel: 2, latitude: 13.0359, longitude: 77.597, postedTime: "45 minutes ago" },
        { id: 3, medicalFacility: "LifeLine Clinic", bloodGroup: "B-", unitsRequired: 1, eLevel: 3, latitude: 13.05, longitude: 77.6, postedTime: "10 minutes ago" },
        { id: 4, medicalFacility: "Apollo Hospital", bloodGroup: "AB+", unitsRequired: 2, eLevel: 3, latitude: 17.7231, longitude: 83.3115, postedTime: "Just now" },
        { id: 5, medicalFacility: "SevenHills Hospital", bloodGroup: "O+", unitsRequired: 3, eLevel: 2, latitude: 17.726, longitude: 83.315, postedTime: "3 hours ago" },
        { id: 6, medicalFacility: "Care Hospital", bloodGroup: "A-", unitsRequired: 2, eLevel: 3, latitude: 17.72, longitude: 83.308, postedTime: "30 minutes ago" },
        { id: 7, medicalFacility: "KGH", bloodGroup: "B+", unitsRequired: 4, eLevel: 3, latitude: 17.7174, longitude: 83.3155, postedTime: "15 minutes ago" },
      ];

      setRequests(mockRequests);
      setLoading(false);
      setHasUrgentRequests(mockRequests.some((req) => req.eLevel === 3));
    };

    loadData();
  }, []);

  const getDistance = (lat1, lon1, lat2, lon2) => {
    if (!lat1 || !lon1 || !lat2 || !lon2) return Infinity;
    const toRad = (deg) => (deg * Math.PI) / 180;
    const R = 6371;
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) ** 2 +
      Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
    return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  };

  useEffect(() => {
    let filtered = [...requests];

    if (!showAllRequests) {
      filtered = filtered.filter((req) => {
        const distance = getDistance(userLocation.latitude, userLocation.longitude, req.latitude, req.longitude);
        return distance <= 30;
      });
    }

    if (searchQuery) {
      filtered = filtered.filter((req) =>
        req.medicalFacility.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedBloodGroup !== "All") {
      filtered = filtered.filter((req) => req.bloodGroup === selectedBloodGroup);
    }

    if (selectedEmergencyLevel !== "All") {
      const levelMap = { Low: 1, Medium: 2, High: 3 };
      filtered = filtered.filter((req) => req.eLevel === levelMap[selectedEmergencyLevel]);
    }

    filtered.sort((a, b) => b.eLevel - a.eLevel);
    setFilteredRequests(filtered);
  }, [requests, searchQuery, selectedBloodGroup, selectedEmergencyLevel, showAllRequests, userLocation]);

  return (
    <div className={styles.mainContainer}>
      {!isMobileView && <Sidebar donorData={donorData} />}

      <div className={styles.content}>
        <AnimatePresence>
          {hasUrgentRequests && showEmergencyAlert && (
            <EmergencyAlert onClose={() => setShowEmergencyAlert(false)} />
          )}
        </AnimatePresence>

        <motion.div
          className={styles.welcomeBanner}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className={styles.welcomeTitle}>Welcome, Blood Donor!</h1>
          <p className={styles.welcomeText}>
            Your contribution can save lives. Check out the latest blood donation requests in your area.
          </p>
        </motion.div>

        {isMobileView && (
          <div className={styles.mobileDonorSummary}>
            <DonorSummary donorData={donorData} />
          </div>
        )}
        <motion.div
          className={styles.searchSection}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.searchWrapper}>
            <div className={styles.inputContainer}>
              <Search className={styles.searchIcon} size={20} />
              <input
                type="text"
                className={styles.searchBar}
                placeholder="Search blood requests..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </motion.div>

        <FilterSection
          showAllRequests={showAllRequests}
          onLocationToggle={() => setShowAllRequests((prev) => !prev)}
          selectedBloodGroup={selectedBloodGroup}
          selectedEmergencyLevel={selectedEmergencyLevel}
          onFilterChange={(type, val) =>
            type === "bloodGroup"
              ? setSelectedBloodGroup(val)
              : setSelectedEmergencyLevel(val)
          }
        />

        <div className={styles.header}>
          <h2 className={styles.heading}>Emergency Blood Requests</h2>
        </div>

        {loading ? (
          <div className={styles.grid}>
            {[...Array(4)].map((_, i) => (
              <LoadingSkeleton key={i} />
            ))}
          </div>
        ) : (
          <motion.div
            className={styles.grid}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {filteredRequests.length ? (
              filteredRequests.map((req) => (
                <motion.div
                  key={req.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card request={req} />
                </motion.div>
              ))
            ) : (
              <motion.div
                className={styles.noRequests}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <AlertCircle size={24} />
                <p>
                  {showAllRequests
                    ? "No matching requests found based on your filters."
                    : "Sorry, there are no emergency requests available in the 30 km radius of your location."}
                </p>
              </motion.div>
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default DonorHome;
