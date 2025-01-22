// components/TestCommunication.tsx

"use client";

import React, { useEffect, useState } from 'react';
import api from '../lib/api';

const TestCommunication: React.FC = () => {
  const [message, setMessage] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('/test/');
        setMessage(response.data.message);
      } catch (err) {
        setError('Error fetching data: ' + (err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Backend Response:</h1>
      <p>{message}</p>
    </div>
  );
};

export default TestCommunication;
