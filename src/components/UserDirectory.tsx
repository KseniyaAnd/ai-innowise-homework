// UserDirectory.tsx
import React, { useEffect, useState } from 'react';
import styles from './UserDirectory.module.css';

interface User {
  id: number;
  name: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

const UserDirectory: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .then((data) => setUsers(data));
  }, []);

  const handleDelete = (id: number) => {
    setUsers(users.filter((user) => user.id !== id));
    if (selectedUser?.id === id) setSelectedUser(null);
  };

  return (
      <div className={styles.container}>
        <h1 className={styles.title}>Users</h1>

        <div className={styles.tableWrapper}>
          <table className={styles.userTable}>
            <thead>
            <tr>
              <th>NAME / EMAIL</th>
              <th>ADDRESS</th>
              <th>PHONE</th>
              <th>WEBSITE</th>
              <th>COMPANY</th>
              <th>ACTION</th>
            </tr>
            </thead>
            <tbody>
            {users.map((user) => (
                <tr key={user.id} className={styles.tableRow}>
                  <td onClick={() => setSelectedUser(user)}>
                    <div className={styles.userName}>{user.name}</div>
                    <div className={styles.userEmail}>{user.email}</div>
                  </td>
                  <td onClick={() => setSelectedUser(user)}>
                    {user.address.street}, {user.address.suite}
                  </td>
                  <td onClick={() => setSelectedUser(user)}>{user.phone}</td>
                  <td onClick={() => setSelectedUser(user)}>
                    <a href={`http://${user.website}`} target="_blank" rel="noopener noreferrer" className={styles.websiteLink}>
                      {user.website}
                    </a>
                  </td>
                  <td onClick={() => setSelectedUser(user)}>{user.company.name}</td>
                  <td>
                    <button
                        className={styles.deleteButton}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDelete(user.id);
                        }}
                        aria-label="Delete user"
                    >
                      ×
                    </button>
                  </td>
                </tr>
            ))}
            </tbody>
          </table>
        </div>

        {selectedUser && (
            <div className={styles.modalOverlay} onClick={() => setSelectedUser(null)}>
              <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <button className={styles.closeButton} onClick={() => setSelectedUser(null)}>
                  ×
                </button>

                <div className={styles.modalHeader}>
                  <h2 className={styles.modalTitle}>{selectedUser.name}</h2>
                  <p className={styles.modalSubtitle}>{selectedUser.email}</p>
                </div>

                <div className={styles.section}>
                  <h3 className={styles.sectionTitle}>Address</h3>
                  <div className={styles.sectionContent}>
                    <p>{selectedUser.address.street}, {selectedUser.address.suite}</p>
                    <p>{selectedUser.address.city}, {selectedUser.address.zipcode}</p>
                    <a
                        href={`https://www.google.com/maps?q=${selectedUser.address.geo.lat},${selectedUser.address.geo.lng}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.mapLink}
                    >
                      View on map
                    </a>
                  </div>
                </div>

                <div className={styles.section}>
                  <h3 className={styles.sectionTitle}>Contact</h3>
                  <div className={styles.sectionContent}>
                    <p>Phone: {selectedUser.phone}</p>
                    <p>
                      Website: <a href={`http://${selectedUser.website}`} target="_blank" rel="noopener noreferrer" className={styles.websiteLink}>
                      {selectedUser.website}
                    </a>
                    </p>
                  </div>
                </div>

                <div className={styles.section}>
                  <h3 className={styles.sectionTitle}>Company</h3>
                  <div className={styles.sectionContent}>
                    <span className={styles.companyName}>{selectedUser.company.name}</span>
                    <span className={styles.companyCatchPhrase}>{selectedUser.company.catchPhrase}</span>
                    <span className={styles.companyBs}>{selectedUser.company.bs}</span>
                  </div>
                </div>
              </div>
            </div>
        )}
      </div>
  );
};

export default UserDirectory;