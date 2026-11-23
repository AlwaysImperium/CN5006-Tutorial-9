
import { useEffect, useState } from 'react';

function EmployeeCount() {
  const [count, setCount] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchEmployeeCount() {
      try {
        const response = await fetch(
          'http://127.0.0.1:3000/api/employees/count'
        );

        if (!response.ok) {
          throw new Error('Failed to retrieve employee count');
        }

        const data = await response.json();

        if (!data.success) {
          throw new Error('Employee count request failed');
        }

        setCount(data.totalEmployees);
      } catch (err) {
        setError(err.message);
      }
    }

    fetchEmployeeCount();
  }, []);

  return (
    <section>
      <h2>Employee Count</h2>

      {error ? (
        <p role="alert">Error: {error}</p>
      ) : count === null ? (
        <p>Loading employee count...</p>
      ) : (
        <p>Total Employees: {count}</p>
      )}
    </section>
  );
}

export default EmployeeCount;
