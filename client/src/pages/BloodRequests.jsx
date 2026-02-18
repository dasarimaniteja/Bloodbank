import React from 'react';
import styles from './BloodRequests.module.css';
import { 
  Plus, Filter, Search, 
  Droplet, Clock, AlertTriangle
} from 'lucide-react';

const mockRequests = [
  { 
    id: 1, 
    blood_group: 'O+', 
    units: 3, 
    urgency: 'Urgent', 
    type: 'live_blood',
    created_at: '2023-06-15',
    address: '123 Medical Blvd',
    contactNumber: '555-123-4567',
    facilityName: 'Medical Center',
    patientName: 'John Doe',
    patientAge: 45,
    notes: 'Patient scheduled for surgery tomorrow morning'
  },
  { 
    id: 2, 
    blood_group: 'AB-', 
    units: 2, 
    urgency: 'Within 24 hours', 
    type: 'store_blood',
    created_at: '2023-06-14',
    address: '123 Medical Blvd',
    contactNumber: '555-123-4567',
    facilityName: 'Medical Center',
    patientName: 'Jane Smith',
    patientAge: 32,
    notes: 'Rare blood type needed for upcoming procedure'
  },
  { 
    id: 3, 
    blood_group: 'A+', 
    units: 1, 
    urgency: 'Within a week', 
    type: 'live_blood',
    created_at: '2023-06-13',
    address: '123 Medical Blvd',
    contactNumber: '555-123-4567',
    facilityName: 'Medical Center',
    patientName: 'Mike Johnson',
    patientAge: 28,
    notes: 'Regular donation for thalassemia patient'
  },
  { 
    id: 4, 
    blood_group: 'B+', 
    units: 2, 
    urgency: 'Within 3 days', 
    type: 'store_blood',
    created_at: '2023-06-12',
    address: '123 Medical Blvd',
    contactNumber: '555-123-4567',
    facilityName: 'Medical Center',
    patientName: 'Sarah Williams',
    patientAge: 52,
    notes: 'Upcoming scheduled transfusion'
  }
];

const BloodRequests = ({ onCreateRequest }) => {
  return (
    <div className={styles.bloodRequests}>
      <div className={styles.header}>
        <div>
          <h1>Blood Requests</h1>
          <p>Manage your facility's blood donation requests</p>
        </div>
        <button 
          className={styles.newRequestButton} 
          onClick={onCreateRequest}
        >
          <Plus size={18} />
          New Request
        </button>
      </div>

      <div className={styles.filters}>
        <div className={styles.searchBar}>
          <Search size={18} />
          <input 
            type="text" 
            placeholder="Search requests..."
          />
        </div>
        
        <div className={styles.filterDropdowns}>
          <div className={styles.filterDropdown}>
            <Filter size={16} />
            <select>
              <option value="">Blood Group</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
          </div>
          
          <div className={styles.filterDropdown}>
            <AlertTriangle size={16} />
            <select>
              <option value="">Urgency</option>
              <option value="Urgent">Urgent</option>
              <option value="Within 24 hours">Within 24 hours</option>
              <option value="Within 3 days">Within 3 days</option>
              <option value="Within a week">Within a week</option>
            </select>
          </div>
          
          <div className={styles.filterDropdown}>
            <Droplet size={16} />
            <select>
              <option value="">Type</option>
              <option value="live_blood">Live Donation</option>
              <option value="store_blood">Blood Bank</option>
            </select>
          </div>
        </div>
      </div>

      <div className={styles.requestsContainer}>
        {mockRequests.map(request => (
          <div key={request.id} className={styles.requestCard}>
            <div className={styles.requestHeader}>
              <div 
                className={`${styles.bloodBadge} ${styles[`blood${request.blood_group.replace('+', 'pos').replace('-', 'neg')}`]}`}
              >
                {request.blood_group}
              </div>
              
              <div 
                className={`${styles.urgencyBadge} ${styles[request.urgency.toLowerCase().replace(/\s+/g, '')]}`}
              >
                {request.urgency}
              </div>
            </div>
            
            <div className={styles.requestDetails}>
              <div className={styles.detailRow}>
                <span className={styles.label}>Patient:</span>
                <span className={styles.value}>{request.patientName}, {request.patientAge}</span>
              </div>
              
              <div className={styles.detailRow}>
                <span className={styles.label}>Units:</span>
                <span className={styles.value}>{request.units}</span>
              </div>
              
              <div className={styles.detailRow}>
                <span className={styles.label}>Type:</span>
                <span className={styles.value}>
                  {request.type === 'live_blood' ? 'Live Donation' : 'Blood Bank'}
                </span>
              </div>
              
              <div className={styles.detailRow}>
                <span className={styles.label}>Contact:</span>
                <span className={styles.value}>{request.contactNumber}</span>
              </div>
              
              <div className={styles.detailRow}>
                <span className={styles.label}>Date:</span>
                <span className={styles.value}>
                  <Clock size={14} className={styles.inlineIcon} />
                  {request.created_at}
                </span>
              </div>
            </div>
            
            <div className={styles.requestNotes}>
              <p>{request.notes}</p>
            </div>
            
            <div className={styles.requestActions}>
              <button className={styles.editButton}>Edit</button>
              <button className={styles.cancelButton}>Cancel</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BloodRequests;