import { motion } from 'framer-motion';
import styles from './BloodBankPage.module.css';
import { Users, Activity, Clock, AlertTriangle } from 'lucide-react';

const Analytics = () => {
  const bloodTypeData = {
    'A+': { current: 15, target: 20 },
    'A-': { current: 8, target: 10 },
    'B+': { current: 12, target: 15 },
    'B-': { current: 6, target: 8 },
    'AB+': { current: 4, target: 5 },
    'AB-': { current: 3, target: 4 },
    'O+': { current: 20, target: 25 },
    'O-': { current: 10, target: 12 }
  };

  const monthlyStats = [
    { month: 'Jan', donations: 45 },
    { month: 'Feb', donations: 52 },
    { month: 'Mar', donations: 48 },
    { month: 'Apr', donations: 60 },
    { month: 'May', donations: 55 },
    { month: 'Jun', donations: 65 }
  ];

  const maxDonations = Math.max(...monthlyStats.map(stat => stat.donations));

  return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className={styles.container}>
          <motion.h1 
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            style={{color:'black'}}
          >
            Analytics Dashboard
          </motion.h1>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
            {[
              { icon: Users, title: 'Total Donors', value: '250+', color: '#3b82f6' },
              { icon: Activity, title: 'Monthly Donations', value: '65', color: '#10b981' },
              { icon: AlertTriangle, title: 'Urgent Requests', value: '3', color: '#ef4444' },
              { icon: Clock, title: 'Avg Response Time', value: '45 min', color: '#f59e0b' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className={styles.dashboard}
                style={{ padding: '1.5rem' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <stat.icon size={24} style={{ color: stat.color }} />
                  <div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{stat.title}</div>
                    <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: stat.color }}>{stat.value}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem' }}>
            <motion.div 
              className={styles.dashboard}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h2 style={{ marginBottom: '1.5rem' }}>Blood Type Inventory</h2>
              <div style={{ display: 'grid', gap: '1rem' }}>
                {Object.entries(bloodTypeData).map(([type, data]) => (
                  <div key={type} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ width: '40px' }}>{type}</div>
                    <div style={{ flex: 1, background: 'var(--nav-bg)', borderRadius: '10px', height: '20px' }}>
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${(data.current / data.target) * 100}%` }}
                        style={{
                          height: '100%',
                          background: data.current >= data.target ? '#10b981' : 
                                    data.current >= data.target * 0.7 ? '#f59e0b' : '#ef4444',
                          borderRadius: '10px'
                        }}
                      />
                    </div>
                    <div style={{ width: '100px', textAlign: 'right' }}>
                      {data.current}/{data.target} units
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              className={styles.dashboard}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h2 style={{ marginBottom: '1.5rem' }}>Monthly Donations</h2>
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: '1rem', height: '200px' }}>
                {monthlyStats.map((stat, index) => (
                  <div key={index} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: `${(stat.donations / maxDonations) * 100}%` }}
                      style={{
                        width: '100%',
                        background: 'var(--accent-gradient)',
                        borderRadius: '5px 5px 0 0',
                        minHeight: '20px'
                      }}
                    />
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{stat.month}</div>
                    <div style={{ fontSize: '0.8rem' }}>{stat.donations}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
  );
};

export default Analytics;