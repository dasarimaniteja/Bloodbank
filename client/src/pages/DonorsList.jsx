import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './BloodBankPage.module.css';
import { User, MapPin, Phone, Calendar, Activity, Search } from 'lucide-react';

const DonorsList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');

  const donors = [
    {
      id: 1,
      name: "Michael Brown",
      bloodType: "O+",
      age: 28,
      lastDonation: "2024-02-15",
      location: "123 Pine Street",
      contact: "+1 234-567-8903",
      donationCount: 5,
      status: "Available"
    },
    {
      id: 2,
      name: "Sarah Wilson",
      bloodType: "A-",
      age: 35,
      lastDonation: "2024-01-20",
      location: "456 Maple Avenue",
      contact: "+1 234-567-8904",
      donationCount: 8,
      status: "Cooldown"
    },
    {
      id: 3,
      name: "David Lee",
      bloodType: "B+",
      age: 42,
      lastDonation: "2024-03-01",
      location: "789 Oak Road",
      contact: "+1 234-567-8905",
      donationCount: 12,
      status: "Available"
    }
  ];

  const filteredDonors = donors.filter(donor => {
    const matchesSearch = donor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         donor.bloodType.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         donor.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (filter === 'all') return matchesSearch;
    return matchesSearch && donor.status.toLowerCase() === filter.toLowerCase();
  });

  return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div>
          <motion.h1 
            className={styles.title}
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            style={{color:'black'}}
          >
            Donors List
          </motion.h1>

          <div className={styles.searchWrapper}>
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
              <div style={{ flex: 1, position: 'relative' }}>
                <Search size={20} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }} />
                <input
                  type="text"
                  placeholder="Search donors..."
                  className={styles.searchBar}
                  style={{ paddingLeft: '40px' }}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <select 
                className={styles.searchBar} 
                style={{ width: 'auto' }}
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              >
                <option value="all">All Status</option>
                <option value="available">Available</option>
                <option value="cooldown">Cooldown</option>
              </select>
            </div>
          </div>

          <div className={styles.dashboard}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Donor Details</th>
                  <th>Blood Type</th>
                  <th>Location</th>
                  <th>Contact</th>
                  <th>Donation History</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredDonors.map((donor) => (
                  <motion.tr 
                    key={donor.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <td>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <User size={16} /> {donor.name}
                        </div>
                        <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                          Age: {donor.age}
                        </div>
                      </div>
                    </td>
                    <td>
                      <span style={{ 
                        padding: '0.5rem 1rem',
                        borderRadius: '20px',
                        background: 'var(--nav-bg)',
                        color: 'var(--text-primary)'
                      }}>
                        {donor.bloodType}
                      </span>
                    </td>
                    <td>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <MapPin size={16} /> {donor.location}
                      </div>
                    </td>
                    <td>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Phone size={16} /> {donor.contact}
                      </div>
                    </td>
                    <td>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <Activity size={16} /> {donor.donationCount} donations
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                          <Calendar size={14} /> Last: {donor.lastDonation}
                        </div>
                      </div>
                    </td>
                    <td>
                      <span style={{ 
                        padding: '0.5rem 1rem',
                        borderRadius: '20px',
                        background: donor.status === 'Available' ? '#d1e7dd' : '#fff3cd',
                        color: donor.status === 'Available' ? '#0f5132' : '#856404'
                      }}>
                        {donor.status}
                      </span>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </motion.div>
  );
};

export default DonorsList;